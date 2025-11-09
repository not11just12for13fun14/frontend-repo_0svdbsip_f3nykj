import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-[1]">
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
  );
}
