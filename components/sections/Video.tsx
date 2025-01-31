'use client';

import { motion } from 'framer-motion';
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog"

export default function Video() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16">ありのまま、<br />あわじしま。</h2>
          
          <div className="space-y-12">
            <HeroVideoDialog
              animationStyle="from-center"
              videoSrc="https://youtu.be/h5RZmQVUu_o?si=oU32s78GNY41N389"
              thumbnailSrc="/images/movies/arino.webp"
              thumbnailAlt="シルバーネクストレンズ 紹介映像"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
