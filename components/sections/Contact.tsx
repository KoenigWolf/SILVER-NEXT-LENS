'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Contact() {
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
          <h2 className="text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground">
            お気軽にご相談ください
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <Phone className="w-12 h-12 text-primary mb-4" />
                <CardTitle>お電話</CardTitle>
                <CardDescription>平日 9:00-18:00</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-semibold">0799-45-2377</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <Mail className="w-12 h-12 text-primary mb-4" />
                <CardTitle>メール</CardTitle>
                <CardDescription>24時間受付</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full">
                  フォームを開く
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mb-4" />
                <CardTitle>所在地</CardTitle>
                <CardDescription>南あわじ市</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  〒656-0122<br />
                  南あわじ市広田広田365-2<br />
                  山岡オフィスビル3F
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
