'use client';

import { motion } from 'framer-motion';
import { Camera, Video, Briefcase, AirVent, Tv2, Lightbulb } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: Video,
    title: 'プロモーション映像制作',
    description: '事業や観光の魅力を映像で伝えるプロモーションムービーを制作。',
  },
  {
    icon: Briefcase,
    title: '企業・ブランドムービー',
    description: '企業の理念やブランドの世界観を映像で表現し、魅力を発信。',
  },
  {
    icon: Camera,
    title: '個人向け映像制作',
    description: '人生の特別な瞬間を映像に残し、感動を形にする映像制作。',
  },
  {
    icon: AirVent, // Drone の代替アイコン
    title: 'ドローン空撮',
    description: '圧倒的な視点で撮影する高品質なドローン空撮サービス。',
  },
  {
    icon: Tv2,
    title: 'テレビ・メディア向け映像提供',
    description: '番組やニュース向けの映像素材を提供し、メディア制作をサポート。',
  },
  {
    icon: Lightbulb,
    title: '映像コンサルティング & 企画',
    description: '映像戦略の企画・構成から撮影・編集まで幅広くサポート。',
  },
];

export default function Services() {
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
          <h2 className="text-4xl font-bold mb-4">Service</h2>
          <p className="text-lg text-muted-foreground">
            映像制作を通じて、あなたのビジョンを具現化します。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 text-primary">
                    <service.icon size={32} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
