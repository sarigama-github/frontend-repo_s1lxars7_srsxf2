import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-violet-200 via-purple-200 to-white" />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline 
          scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" 
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Iridescent overlay for depth; pointer-events-none so it doesn't block Spline */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.35),transparent_60%)]" />

      {/* Headline content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto w-full max-w-7xl px-6 pb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <p className="mb-3 text-xs tracking-[0.35em] text-slate-900/70 uppercase">Maison Éclat</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-slate-900">
              The Fragrance of Creativity
            </h2>
            <p className="mt-4 text-slate-700/80 text-base md:text-lg">
              Contemporary perfumes crafted with minimalist elegance. Discover ethereal blends inspired by light, glass and quiet mornings.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#collections" className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">
                Explore Collection
              </a>
              <a href="#story" className="inline-flex items-center rounded-full bg-white/70 px-5 py-3 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white transition">
                Our Philosophy
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;