export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-xl font-bold">
          AccessFlow AI
        </h1>

        <button className="rounded-xl border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black">
          Login
        </button>

      </div>

    </nav>
  );
}