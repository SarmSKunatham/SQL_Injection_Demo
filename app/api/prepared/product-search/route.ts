import { sql } from "@/server/sql";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;

  const query = searchParams.get("query");

  if (!query) {
    const products =
      await sql`SELECT name, cast(price as varchar) FROM products LIMIT 10`;
    return NextResponse.json(products);
  }

  const [products, queryStatement] = await Promise.all([
    sql`SELECT name, cast(price as varchar) FROM products WHERE name ILIKE '%' || ${decodeURIComponent(
      query
    )} || '%' LIMIT 10`,
    sql`SELECT name, cast(price as varchar) FROM products WHERE name ILIKE '%' || ${decodeURIComponent(
      query
    )} || '%' LIMIT 10`.describe(),
  ]);

  console.log(`SQL Script (Safe): ${queryStatement.string}`);

  return NextResponse.json(products);
};
