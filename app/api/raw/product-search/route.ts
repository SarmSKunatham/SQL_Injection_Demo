import { sql } from "@/server/sql";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;

  const query = searchParams.get("query");
  try {
    if (!query) {
      const products = await sql.unsafe(`SELECT * FROM products LIMIT 10`);
      return NextResponse.json(products);
    }

    const products = await sql.unsafe(
      `SELECT * FROM products WHERE name ILIKE ${query} LIMIT 10`
    );
    return NextResponse.json(products);
  } catch (e: any) {
    return NextResponse.json(
      { error: e.message },
      {
        status: 400,
      }
    );
  }
};
