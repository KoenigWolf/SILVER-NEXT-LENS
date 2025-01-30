'use client';

import { motion } from 'framer-motion';
import { Camera, Video, Compass, Image, Bone as Drone, Film } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const services = [
  {
    icon: Drone,
    title: 'ドローン空撮',
    description: '高度な技術と最新機材による空撮サービス',
  },
  {
    icon: Video,
    title: '映像制作',
    description: 'プロフェッショナルな映像コンテンツの制作',
  },
  {
    icon: Camera,
    title: '商品写真撮影',
    description: '商品の魅力を最大限に引き出す撮影',
  },
  {
    icon: Compass,
    title: 'VR撮影',
    description: '没入感のある360度VRコンテンツ制作',
  },
  {
    icon: Image,
    title: 'パノラマ写真',
    description: '360度パノラマ写真による空間表現',
  },
  {
    icon: Film,
    title: '素材提供',
    description: '高品質な映像・写真素材のライセンス提供',
  },
];

export default function Services() {
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
          <h2 className="text-4xl font-bold mb-4">サービス</h2>
          <p className="text-lg text-muted-foreground">
            最新技術と創造力で、お客様のビジョンを実現します
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
