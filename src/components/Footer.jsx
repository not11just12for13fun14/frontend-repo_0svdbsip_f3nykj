import { Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/40 py-10">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-900/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-white text-sm font-semibold tracking-widest">ZENITH</p>
            <p className="text-white/60 text-sm">Where Power Meets Precision</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors">
              <Twitter size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="GitHub" className="rounded-full border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors">
              <Github size={18} />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Zenith. All rights reserved.</div>
      </div>
    </footer>
  );
}
