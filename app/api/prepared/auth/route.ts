import { sql } from "@/server/sql";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: NextRequest) => {
  const response = z
    .object({
      username: z.string(),
      password: z.string(),
    })
    .safeParse(await req.json());

  if (!response.success) {
    return NextResponse.json({ error: response.error }, { status: 400 });
  }

  const { username, password } = response.data;

  console.log(
    `Attempted login with username: ${username} and password: ${password}`
  );

  try {
    const [userData, queryStatement] = await Promise.all([
      sql`SELECT * FROM users WHERE username = ${username} AND password = ${password}`,
      sql`SELECT * FROM users WHERE username = ${username} AND password = ${password}`.describe(),
    ]);

    console.log(`SQL Script (Safe): ${queryStatement.string}`);

    if (userData.length === 0) {
      return NextResponse.json(
        {
          error: "Unable to login, username or password not found",
        },
        { status: 401 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ error: (e as Error).name }, { status: 500 });
  }
};
