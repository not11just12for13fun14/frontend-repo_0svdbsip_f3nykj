import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0b17] to-black" />

      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="mt-10 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.85)]">
            ZENITH
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-white/80"
        >
          Where Power Meets Precision
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#agents"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-10px_rgba(99,102,241,0.9)] transition-transform hover:scale-[1.02]"
          >
            Explore Agents
          </a>
          <a
            href="#about"
            className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/15"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
