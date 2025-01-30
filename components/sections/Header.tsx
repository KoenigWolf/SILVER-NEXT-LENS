import { Book, Sunset, Trees, Zap } from "lucide-react"
import { Navbar1 } from "../blocks/shadcnblocks-com-navbar1"
import Image from "next/image"

const menuData = {
  logo: {
    url: "/",
    src: "/images/logo100.webp",
    alt: "SILVER NEXT LENS",
    title: "SILVER NEXT LENS",
  },
  menu: [
    {
      title: "ホーム",
      url: "/",
    },
    {
      title: "サービス",
      url: "#",
      items: [
        {
          title: "映像制作",
          description: "高品質な映像コンテンツの制作サービス",
          icon: <Book className="size-5 shrink-0" />,
          url: "/services/video",
        },
        {
          title: "写真撮影",
          description: "プロフェッショナルな写真撮影サービス",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/services/photo",
        },
        {
          title: "編集・加工",
          description: "映像や写真の編集・加工サービス",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/services/editing",
        },
        {
          title: "コンサルティング",
          description: "映像制作に関する専門的なアドバイス",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/services/consulting",
        },
      ],
    },
    {
      title: "作品",
      url: "#",
      items: [
        {
          title: "映画",
          description: "オリジナル映画作品のショーケース",
          icon: <Zap className="size-5 shrink-0" />,
          url: "/works/movies",
        },
        {
          title: "CM",
          description: "テレビCMや広告作品のポートフォリオ",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "/works/commercials",
        },
        {
          title: "MV",
          description: "ミュージックビデオの制作実績",
          icon: <Trees className="size-5 shrink-0" />,
          url: "/works/music-videos",
        },
        {
          title: "写真",
          description: "写真作品のギャラリー",
          icon: <Book className="size-5 shrink-0" />,
          url: "/works/photos",
        },
      ],
    },
    {
      title: "会社概要",
      url: "/about",
    },
    {
      title: "お問い合わせ",
      url: "/contact",
    },
  ],
  mobileExtraLinks: [
    { name: "ブログ", url: "/blog" },
    { name: "採用情報", url: "/careers" },
    { name: "プライバシーポリシー", url: "/privacy" },
    { name: "利用規約", url: "/terms" },
  ],
  auth: {
    login: { text: "見積もり依頼", url: "/estimate" },
    signup: { text: "お問い合わせ", url: "/contact" },
  },
}

export default function Header() {
  return <Navbar1 {...menuData} />
}
