import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "【2026最新】ロケットナウ加盟店募集｜初期費用0円で始めるデリバリー",
  description: "Rocket Nowは初期費用・月額費用・解約費用すべて0円。手数料は売上の30%のみ。最短1週間でデリバリーを開始できます。専任スタッフが全工程をサポート。",
  openGraph: {
    title: "【2026最新】ロケットナウ加盟店募集｜初期費用0円で始めるデリバリー",
    description: "Rocket Nowは初期費用・月額費用・解約費用すべて0円。手数料は売上の30%のみ。最短1週間でデリバリーを開始できます。専任スタッフが全工程をサポート。",
    url: "https://rocketnow-kameiten.com",
    siteName: "Rocket Now 加盟店募集",
    images: [
      {
        url: "https://rocketnow-kameiten.com/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Rocket Now 加盟店募集",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "【2026最新】ロケットナウ加盟店募集｜初期費用0円で始めるデリバリー",
    description: "Rocket Nowは初期費用・月額費用・解約費用すべて0円。手数料は売上の30%のみ。最短1週間でデリバリーを開始できます。専任スタッフが全工程をサポート。",
    images: ["https://rocketnow-kameiten.com/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🚀</text></svg>" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GSTQHM8498"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GSTQHM8498');
        `}} />
      </head>
      <body>{children}</body>
    </html>
  );
}
