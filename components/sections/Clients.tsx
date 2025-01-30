'use client';

import { motion } from 'framer-motion';

const clients = [
  '(株)ポニーキャニオン',
  '(株)ブースタープロジェクト',
  'エルマガジン社',
  '日本テレビ',
  'TBSテレビ',
  'テレビ朝日',
  '関西テレビ',
  'テレビ東京',
  'テレビ大阪',
  'サンテレビ',
  'NHK',
  'パソナグループ',
  '電通クリエーティブX',
  '農林水産省',
  '兵庫県',
  '南あわじ市',
  '洲本市',
  '淡路市商工会',
  '南あわじ市商工会',
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
