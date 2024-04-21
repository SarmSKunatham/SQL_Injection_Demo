import { sql } from "@/server/sql";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export const POST = async (req: NextRequest) => {
  const response = await z
    .object({
      username: z.string(),
      password: z.string(),
    })
    .safeParseAsync(req.json());

  if (!response.success) {
    return NextResponse.json({ error: response.error }, { status: 400 });
  }

  const { username, password } = response.data;

  try {
    await sql`SELECT * FROM users WHERE username = ${username} AND password = ${password}`;
    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.log(
      `Attempted login with username: ${username} and password: ${password}`
    );
    return NextResponse.json(
      { error: "Unable to login, username or password not found" },
      { status: 401 }
    );
  }
};