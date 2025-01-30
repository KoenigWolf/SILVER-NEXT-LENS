'use client';

import { motion } from 'framer-motion';
import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll';

const images = [
  '/images/movies/image_017.webp',
  '/images/movies/image_022.webp',
  '/images/movies/image_023.webp',
  '/images/movies/image_024.webp',
  '/images/movies/image_025.webp',
  '/images/movies/image_026.webp',
  '/images/movies/image_027.webp',
  '/images/movies/image_028.webp',
  '/images/movies/image_029.webp',
  '/images/movies/image_030.webp',
  '/images/movies/image_031.webp',
  '/images/movies/image_032.webp'
];

export default function Movies() {
  return (
    <section className="py-24 bg-background">
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
