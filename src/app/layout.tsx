import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "【2026最新】ロケットナウ加盟店募集｜初期費用0円で始めるデリバリー",
  description: "Rocket Nowは初期費用・月額費用・解約費用すべて0円。手数料は売上の30%のみ。最短1週間でデリバリーを開始できます。専任スタッフが全工程をサポート。",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
