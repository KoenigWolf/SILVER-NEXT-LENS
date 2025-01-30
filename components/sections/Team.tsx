'use client';

import { motion } from 'framer-motion';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const teamMembers = [
  {
    quote: `映像の力に魅了され、人や場所の空気感を切り取ることに情熱を注ぐ。JUIDA認定講師として活動し、国内外での撮影経験を持つ。MY HYOGO MOVIE 2022グランプリをはじめ、数々のコンテストで受賞歴あり。`,
    name: '温泉 銀次',
    designation: 'Videographer / ドローンパイロット',
    src: '/images/ginji2.webp'
  },
  {
    quote: `1999年生まれの若手映像作家。『Five Colors ～染織家～』がSSFF & ASIA 2022 U-25プロジェクトにノミネート、『海心會 -Mikoshi Parade-』がSSFF & ASIA 2024ノンフィクション部門ショートリストに選出。`,
    name: '伊名岡 智也',
    designation: 'Videographer',
    src: '/images/tomoya.webp'
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">チームメンバー</h2>
          <p className="text-lg text-muted-foreground">
            プロフェッショナルな映像制作チーム
          </p>
        </motion.div>

        <AnimatedTestimonials testimonials={teamMembers} />
      </div>
    </section>
  );
}
