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

const gallery = [
  'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop',
];

export default function Showcase() {
  return (
    <div className="relative">
      {/* Agents */}
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

      {/* About */}
      <section id="about" className="relative py-24">
        <div className="absolute inset-0">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-blue-500/10 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Zenith</h2>
              <p className="mt-4 text-white/80">
                Zenith is a premium gaming and technology brand at the edge of performance and design. We build tools and experiences that feel cinematic, tactile, and impossibly fast.
              </p>
              <p className="mt-4 text-white/70">
                Our universe blends cyberpunk aesthetics with precision engineering. Every interface, every surface, every glow serves a purpose: elevate your play and amplify your presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-900/30 via-fuchsia-900/20 to-transparent p-1">
                <div className="rounded-2xl bg-black/60 p-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-[4/3] rounded-xl bg-gradient-to-br from-blue-600/20 to-fuchsia-600/20 shadow-[0_0_40px_-15px_rgba(99,102,241,0.6)]"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Gallery</h2>
          <p className="mt-2 max-w-2xl text-white/70">Cinematic shots from the Zenith universe. Neon, chrome, and velocity in motion.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <img
                  src={src}
                  alt="Zenith visual"
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
