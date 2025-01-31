'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Video Background */}
      <iframe
        title="Background video"
        src="https://player.vimeo.com/video/667542636?autoplay=1&loop=1&muted=1&background=1"
        className={`absolute inset-0 w-screen h-screen -z-10 border-none ${styles.videoBackground}`}
        allow="autoplay; fullscreen"
      ></iframe>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
