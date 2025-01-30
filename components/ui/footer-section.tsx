"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Send, Twitter } from "lucide-react"

function Footerdemo() {
  const { theme, setTheme } = useTheme()

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">お問い合わせ</h2>
            <p className="mb-6 text-muted-foreground">
              最新情報やお得な情報をメールでお届けします
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="メールアドレスを入力"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">登録</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">サービス</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                ドローン空撮
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                映像制作
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                商品写真撮影
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                VR撮影
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                360度パノラマ写真
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">会社情報</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>〒656-0122</p>
              <p>南あわじ市広田広田365-2</p>
              <p>山岡オフィスビル3F</p>
              <p>TEL: 0799-45-2377</p>
              <p>FAX: 0799-45-2378</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">SNS</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Facebookでフォロー</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitterでフォロー</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagramでフォロー</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SilverNextLens. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              プライバシーポリシー
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              利用規約
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
