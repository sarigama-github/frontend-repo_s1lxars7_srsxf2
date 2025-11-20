import { motion } from 'framer-motion';

function Story() {
  return (
    <section id="story" className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.35em] text-slate-500">Our Story</p>
          <h3 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">Minimal forms, maximal emotions</h3>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Born from a love of modern art and quiet craftsmanship, our fragrances are composed with restraint and intention. We work in small batches, letting raw materials speak softly—glass, light, and air are as much ingredients as flowers and woods.
          </p>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Each bottle is a meditation on simplicity: clear lines, soft reflections, and the space between notes where imagination lives.
          </p>
          <div className="mt-6 flex gap-3">
            <button className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-white hover:bg-slate-800 transition">Read more</button>
            <button className="inline-flex items-center rounded-full bg-white px-5 py-3 text-slate-900 ring-1 ring-slate-900/10 hover:bg-slate-50 transition">Visit studio</button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-violet-200 via-purple-200 to-white ring-1 ring-slate-900/10">
            <img src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxzdHVkaW98ZW58MHwwfHx8MTc2MzY4MDI4OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="studio" className="h-full w-full object-cover mix-blend-multiply" />
          </div>
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-white/70 backdrop-blur-md ring-1 ring-slate-900/10 shadow-lg"></div>
          <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-white/70 backdrop-blur-md ring-1 ring-slate-900/10 shadow-lg"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default Story;