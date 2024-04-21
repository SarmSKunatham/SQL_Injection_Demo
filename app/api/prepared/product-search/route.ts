import { sql } from "@/server/sql";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;

  const query = searchParams.get("query");

  if (!query) {
    const products = await sql`SELECT * FROM products LIMIT 10`;
    return NextResponse.json(products);
  }

  const products =
    await sql`SELECT * FROM products WHERE name ILIKE '%' || ${query} || '%' LIMIT 10`;

  return NextResponse.json(products);
};
