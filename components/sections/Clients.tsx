'use client';

import { motion } from 'framer-motion';

const clients = [
  'NHK（日本放送協会）',
  '日本テレビ放送網株式会社',
  '株式会社TBSテレビ',
  '株式会社テレビ朝日',
  '株式会社関西テレビ放送',
  '株式会社テレビ東京',
  '株式会社テレビ大阪',
  '株式会社サンテレビジョン',
  '株式会社エルマガジン社',
  '株式会社ポニーキャニオン',
  '株式会社ブースタープロジェクト',
  '株式会社電通クリエーティブX',
  '農林水産省',
  '兵庫県',
  '南あわじ市',
  '洲本市',
  '南あわじ市商工会',
  '淡路市商工会',
  '株式会社パソナグループ',
];

export default function Clients() {
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
          <h2 className="text-4xl font-bold mb-4">主要取引先</h2>
          <p className="text-lg text-muted-foreground">
            多くの企業・団体様にご信頼いただいています
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-center justify-center p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-foreground font-medium text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
