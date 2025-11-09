import { motion } from 'framer-motion';

const agents = [
  {
    name: 'Nyx',
    role: 'Infiltrator',
    img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Vanta',
    role: 'Sentinel',
    img: 'https://images.unsplash.com/photo-1514790193030-c89d266d5a9d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Ion',
    role: 'Assault',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    name: 'Seraph',
    role: 'Support',
    img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Agents() {
  return (
    <section id="agents" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured Agents
          </h2>
          <p className="text-white/60">Specialists engineered for dominance.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((a, i) => (
            <motion.article
              key={a.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-xl"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={a.img}
                  alt={a.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{a.name}</h3>
                <p className="text-sm uppercase tracking-wider text-white/60">{a.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
