'use client';

import { motion } from 'framer-motion';
import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll';

const images = [
  '/images/movies/movie1.webp',
  '/images/movies/movie2.webp',
  '/images/movies/movie3.webp',
  '/images/movies/movie4.webp',
  '/images/movies/movie5.webp',
  '/images/movies/movie6.webp',
  '/images/movies/movie7.webp',
  '/images/movies/movie8.webp',
  '/images/movies/movie9.webp',
  '/images/movies/movie10.webp',
  '/images/movies/movie11.webp',
  '/images/movies/movie12.webp'
];

export default function Movies() {
  return (
    <section className="section-base section-gradient-1 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">制作実績</h2>
          <p className="text-lg text-muted-foreground">
            ドローン空撮・映像制作の作品集
          </p>
        </motion.div>

        <ParallaxScrollSecond images={images} />
      </div>
    </section>
  );
}
