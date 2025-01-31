'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clients = [
  { name: 'NHK', logo: '/images/logo/NHK_logo.webp' },
  { name: '日本テレビ', logo: '/images/logo/nittere.webp' },
  { name: 'TBSテレビ', logo: '/images/logo/tbs.webp' },
  { name: 'テレビ朝日', logo: '/images/logo/asahi.webp' },
  { name: '関西テレビ', logo: '/images/logo/kantere.webp' },
  { name: 'テレビ東京', logo: '/images/logo/teretou.webp' },
  { name: 'テレビ大阪', logo: '/images/logo/tvosaka.webp' },
  { name: 'サンテレビ', logo: '/images/logo/santv.webp' },
  { name: 'エルマガジン社', logo: '/images/logo/erumaga.webp' },
  { name: 'ポニーキャニオン', logo: '/images/logo/poni.webp' },
  { name: 'ブースタープロジェクト', logo: '/images/logo/busuta.webp' },
  { name: '電通クリエーティブX', logo: '/images/logo/dentsu.webp' },
  { name: '農林水産省', logo: '/images/logo/nourin.webp' },
  { name: '兵庫県', logo: '/images/logo/hyougoken.webp' },
  { name: '南あわじ市', logo: '/images/logo/minami.webp' },
  { name: '洲本市', logo: '/images/logo/sumoto.webp' },
  { name: '南あわじ市商工会', logo: '/images/logo/minami.webp' },
  { name: '淡路市商工会', logo: '/images/logo/awajisyoukoukai.webp' },
  { name: 'パソナグループ', logo: '/images/logo/pasona.webp' },
];

export default function Clients() {
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
              className="flex items-center justify-center p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow transform hover:scale-105 bg-white/50 dark:bg-black/50"
            >
              <Image 
                src={client.logo} 
                alt={client.name} 
                width={120} 
                height={60} 
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
