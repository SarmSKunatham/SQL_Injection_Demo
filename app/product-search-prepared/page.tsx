"use client";

import React, { useState } from "react";
import useSWR from "swr";

const Product = () => {
  const [query, setQuery] = useState<string>();
  const { data, isLoading, error, mutate } = useSWR(
    "/api/products",
    async () => {
      const url = new URL("/api/prepared/product-search", window.origin);
      const searchParams = new URLSearchParams();
      if (query) {
        searchParams.set("query", encodeURIComponent(query));
      }
      url.search = searchParams.toString();
      const data = (await (await fetch(url.toString())).json()) as Record<
        string,
        string | number
      >[];
      return data;
    }
  );

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  function handleSearch() {
    mutate();
  }

  return (
    <section className="w-full h-[100vh] flex items-center justify-center">
      <div className="w-[80vw] py-10 rounded-xl bg-slate-800/25 shadow-lg border-2 border-slate-300 backdrop-blur-md text-center flex flex-col justify-center items-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">Product Search</h1>
          <div className="flex gap-3 h-max">
            <input
              className="text-black px-2 h-10 border border-slate-500 rounded-md w-96"
              type="search"
              placeholder="Search for products"
              onChange={handleSearchChange}
            />
            <button
              onClick={handleSearch}
              className="bg-white text-black h-10 px-4 rounded-md hover:bg-white/80 transition-colors duration-200"
            >
              Search
            </button>
          </div>
        </div>
        {data && data.length === 0 && <div>No products found</div>}
        {data && data.length > 0 && (
          <table className="table-fixed border-collapse border border-slate-500 w-3/4">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th
                    key={key}
                    className="border border-slate-400 py-4 bg-slate-300 text-black"
                  >
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="h-7">
              {data.map((product, idx) => (
                <tr key={`row-${idx}`}>
                  {Object.values(product).map((value) => (
                    <td
                      key={`row-${idx}-value-${value}`}
                      className="border border-slate-400 bg-slate-600 py-4"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {isLoading && <div>Loading...</div>}

        {error && <div>Error: {error.message}</div>}
      </div>
    </section>
  );
};

export default Product;
