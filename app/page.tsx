import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-[100vh]  flex items-center justify-center">
      <div className="w-[80vw] h-[50vh] rounded-xl bg-slate-600/25 shadow-lg border-2 border-slate-300 backdrop-blur-md text-center flex flex-col justify-center items-center space-y-8">
        <div>
          <h1 className="text-3xl font-bold">SQL Injection Demo</h1>
          <p className="text-xl">System Security Project</p>
        </div>
        <div className="flex space-x-12">
          <div className="space-y-4">
            <Link
              className="text-lg w-60 border-2 border-white h-10 flex items-center justify-center rounded-full hover:bg-white/25 transition-colors duration-200"
              href="/login-prepared"
            >
              Login
            </Link>
            <Link
              className="text-lg w-60 border-2 border-white h-10 flex items-center justify-center rounded-full hover:bg-white/25 transition-colors duration-200"
              href="/login"
            >
              Login (unsafe)
            </Link>
          </div>

          <div className="space-y-4">
            <Link
              className="text-lg w-60 border-2 border-white h-10 flex items-center justify-center rounded-full hover:bg-white/25 transition-colors duration-200"
              href="/product-search-prepared"
            >
              Search Product
            </Link>
            <Link
              className="text-lg w-60 border-2 border-white h-10 flex items-center justify-center rounded-full hover:bg-white/25 transition-colors duration-200"
              href="/product-search"
            >
              Search Product (unsafe)
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
