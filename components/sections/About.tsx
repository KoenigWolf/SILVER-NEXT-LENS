'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Award } from 'lucide-react';

export default function About() {
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
          <h2 className="text-4xl font-bold text-center mb-16">会社概要</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">SilverNextLens</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>運営会社：</strong>株式会社フィールドコム映像制作事業部
                </p>
                <p>
                  <strong>所在地：</strong>〒656-0122 南あわじ市広田広田365-2 山岡オフィスビル３F
                </p>
                <p>
                  <strong>TELL：</strong>0799-45-2377
                </p>
                <p>
                  <strong>FAX：</strong>0799-45-2378
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">設立</h4>
                  <p className="text-muted-foreground">
                    1995年9月 (株)フィールドコム<br />
                    2017年11月 SilverNextLens 映像制作事業部
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">代表者</h4>
                  <p className="text-muted-foreground">
                    代表取締役　眞野方仁<br />
                    映像制作事業部　温泉銀次
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-2">加盟団体</h4>
                  <ul className="text-muted-foreground list-disc list-inside">
                    <li>一般社団法人 UAS多用推進技術会（UMTA）</li>
                    <li>一般社団法人日本UAS産業振興協議会（JUIDA）</li>
                    <li>一般社団法人 音楽特定利用促進機構（ISUM）</li>
                    <li>淡路島フィルムオフィス</li>
                    <li>南あわじ市商工会</li>
                    <li>淡路島観光協会</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
