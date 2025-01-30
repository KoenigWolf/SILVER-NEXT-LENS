import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const newsData = [
  {
    date: "2023年12月17日",
    title: "アジア国際子ども映画祭 in 南あわじ",
    description: "南あわじの子どもたちと映画づくりから関わらせて頂きました。",
    link: null,
    thumbnail: "/images/news1.webp",
  },
  {
    date: "2023年11月19日",
    title: "南あわじ市総合防災訓練 ドローン中継訓練",
    description: "昨年に引き続き、南あわじ市総合防災訓練でドローン中継訓練を行いました。",
    link: "https://youtube.com/live/K8Ngyeci2vo",
    thumbnail: "/images/news2.webp",
  },
  {
    date: "2023年10月19日",
    title: "日テレ「世界一受けたい授業」映像提供",
    description: "渦潮のドローン空撮映像を提供しました。",
    link: "https://www.ntv.co.jp/sekaju/?fbclid=IwAR1RY6tNs4_wXNaH7",
    thumbnail: "/images/news3.webp",
  },
  {
    date: "2023年7月4日",
    title: "テレビ朝日「マツコ＆有吉 かりそめ天国」映像提供",
    description: "番組に映像を提供しました。",
    link: "https://www.tv-asahi.co.jp/matsuari/",
    thumbnail: "/images/news4.webp",
  },
  {
    date: "2023年10月2日",
    title: "第16回アジア国際子ども映画祭 関西・四国ブロック大会",
    description: "南あわじ市の湊地区公民館で開催され、SilverNextLensも参加しました。",
    link: null,
    thumbnail: "/images/news5.webp",
  },
  {
    date: "2023年6月10日",
    title: "NO BORDERS PROJECT インド 帰国",
    description: "インドでの撮影を担当しました。",
    link: null,
    thumbnail: "/images/news6.webp",
  },
  {
    date: "2023年6月8日",
    title: "兵庫県 県民だより 撮影",
    description: "沼島 上立神岩 ドローン空撮",
    link: null,
    thumbnail: "/images/news7.webp",
  },
  {
    date: "2023年5月8日",
    title: "兵庫テロワール旅 ポスターと冊子の撮影",
    description: "沼島をドローンで空撮",
    link: null,
    thumbnail: "/images/news8.webp",
  },
  {
    date: "2023年1月31日",
    title: "NHK土曜ドラマ『探偵ロマンス』 空撮",
    description: "最終話で放送されます。",
    link: "https://www2.nhk.or.jp/archives/movies/?id=D0009051524_00000",
    thumbnail: "/images/news9.webp",
  },
];

export default function NewsSection() {
  return (
    <section className="w-full py-20 lg:py-40 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>notice</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-left">
                News
              </h2>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
                映像制作やイベントの最新情報をお届けします。
              </p>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsData.map((news, index) => (
              <div key={index} className="flex flex-col gap-3 bg-white p-4 rounded-lg shadow-md">
                <Image
                  src={news.thumbnail}
                  alt={news.title}
                  width={400}
                  height={250}
                  className="rounded-md object-cover w-full h-52"
                />
                <h3 className="text-xl font-semibold tracking-tight">{news.title}</h3>
                <p className="text-sm text-gray-500">{news.date}</p>
                <p className="text-muted-foreground text-sm">{news.description}</p>
                {news.link && (
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    詳細を見る
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
