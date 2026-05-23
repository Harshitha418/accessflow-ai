export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold tracking-wide text-white">
          AccessFlow
          <span className="ml-2 text-purple-400">
            AI
          </span>
        </h1>

        <div className="flex items-center gap-4">

        <button className="hidden text-sm text-gray-400 transition hover:text-white md:block">
          Features
        </button>

        <button className="hidden text-sm text-gray-400 transition hover:text-white md:block">
        About
        </button>

        <button className="rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black">
          Login
        </button>

      </div>

      </div>

    </nav>
  );
}