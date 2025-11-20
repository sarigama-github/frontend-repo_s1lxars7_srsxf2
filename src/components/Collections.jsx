import { motion } from 'framer-motion';

const products = [
  {
    name: 'Iris Lumière',
    notes: 'Iris • Bergamot • White Musk',
    color: 'from-indigo-200 via-purple-200 to-pink-200',
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Verre Clair',
    notes: 'Pear • Jasmine • Amber',
    color: 'from-sky-200 via-cyan-200 to-teal-200',
    image: 'https://images.unsplash.com/photo-1557170362-2fcf81eb0b4e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Matin Silencieux',
    notes: 'Tea • Neroli • Cashmere',
    color: 'from-rose-200 via-fuchsia-200 to-violet-200',
    image: 'https://images.unsplash.com/photo-1546500840-ae38253aba9b?q=80&w=1600&auto=format&fit=crop',
  },
];

function Collections() {
  return (
    <section id="collections" className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500">New Arrivals</p>
            <h3 className="mt-2 text-3xl md:text-4xl font-semibold text-slate-900">Signature Collection</h3>
          </div>
          <a href="#" className="text-slate-700 hover:text-slate-900">View all</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl ring-1 ring-slate-900/10 bg-white"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-40`} />
              <img src={p.image} alt={p.name} className="h-64 w-full object-cover object-center" />
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-slate-900">{p.name}</h4>
                  <span className="rounded-full bg-black text-white text-xs px-3 py-1">New</span>
                </div>
                <p className="mt-2 text-slate-600">{p.notes}</p>
                <button className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-white hover:bg-slate-800 transition">Add to bag</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collections;