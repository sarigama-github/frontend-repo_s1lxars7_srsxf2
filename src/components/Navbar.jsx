import { Menu, ShoppingBag, Instagram, Facebook, Twitter } from "lucide-react";

function Navbar() {
  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-400 via-violet-400 to-blue-400 shadow-lg ring-1 ring-white/30" />
          <div className="leading-tight">
            <p className="text-sm uppercase tracking-[0.25em] text-white/60">Maison</p>
            <h1 className="text-xl font-semibold text-white">Éclat Parfums</h1>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-white/80">
          <a href="#collections" className="hover:text-white transition-colors">Collections</a>
          <a href="#story" className="hover:text-white transition-colors">Our Story</a>
          <a href="#newsletter" className="hover:text-white transition-colors">Newsletter</a>
        </nav>

        <div className="flex items-center gap-4">
          <a aria-label="Instagram" href="#" className="hidden sm:inline-flex text-white/70 hover:text-white transition-colors"><Instagram size={18} /></a>
          <a aria-label="Twitter" href="#" className="hidden sm:inline-flex text-white/70 hover:text-white transition-colors"><Twitter size={18} /></a>
          <a aria-label="Facebook" href="#" className="hidden sm:inline-flex text-white/70 hover:text-white transition-colors"><Facebook size={18} /></a>
          <button className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-white backdrop-blur-md ring-1 ring-white/20 hover:bg-white/15 transition">
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Shop</span>
          </button>
          <button className="md:hidden text-white/80 hover:text-white"><Menu /></button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
