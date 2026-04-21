"use client";

import Link from "next/link";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Montserrat:wght@700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --flame: #FF5722; --flame-deep: #E64A19; --gold: #FFA726;
          --dark: #1A1A1A; --mid: #3D3D3D; --soft: #F5F0EB; --white: #FFFFFF;
        }
        body { font-family: 'Noto Sans JP', sans-serif; color: var(--dark); background: var(--white); }
        .legal-header {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,0.97); backdrop-filter: blur(8px);
          border-bottom: 2px solid var(--flame);
          padding: 12px 20px; display: flex; align-items: center; justify-content: space-between;
        }
        .legal-logo {
          font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 1.2rem;
          color: var(--flame); display: flex; align-items: center; gap: 6px; text-decoration: none;
        }
        .legal-logo-sub {
          font-family: 'Noto Sans JP', sans-serif; font-size: 0.58rem; font-weight: 700;
          color: var(--flame-deep); background: #fff3e0; border: 1px solid #ffcc80;
          border-radius: 4px; padding: 2px 6px; margin-left: 4px;
        }
        .legal-back {
          font-size: 0.78rem; font-weight: 700; color: var(--flame);
          text-decoration: none; display: flex; align-items: center; gap: 4px;
          padding: 6px 14px; border: 2px solid var(--flame); border-radius: 50px;
          transition: background 0.2s, color 0.2s;
        }
        .legal-back:hover { background: var(--flame); color: white; }
        .legal-hero {
          background: linear-gradient(145deg, #fff8f5 0%, #fff3e0 50%, #ffe0b2 100%);
          padding: 48px 20px 40px; border-bottom: 1px solid #ffe0c8;
        }
        .legal-hero-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 2px; color: var(--flame);
          text-transform: uppercase; margin-bottom: 10px;
        }
        .legal-hero-title {
          font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 900; color: var(--dark);
          margin-bottom: 8px;
        }
        .legal-hero-date { font-size: 0.78rem; color: var(--mid); }
        .legal-body {
          max-width: 800px; margin: 0 auto; padding: 48px 20px 80px;
        }
        .legal-section { margin-bottom: 36px; }
        .legal-section h2 {
          font-size: 1.05rem; font-weight: 900; color: var(--dark);
          border-left: 4px solid var(--flame); padding-left: 12px;
          margin-bottom: 14px; line-height: 1.4;
        }
        .legal-section h3 {
          font-size: 0.92rem; font-weight: 700; color: var(--dark);
          margin-bottom: 8px; margin-top: 16px;
        }
        .legal-section p {
          font-size: 0.88rem; color: var(--mid); line-height: 1.9; margin-bottom: 10px;
        }
        .legal-section ul {
          padding-left: 20px; margin-bottom: 10px;
        }
        .legal-section ul li {
          font-size: 0.88rem; color: var(--mid); line-height: 1.9; margin-bottom: 4px;
        }
        .legal-table {
          width: 100%; border-collapse: collapse; margin-bottom: 10px; font-size: 0.85rem;
        }
        .legal-table th, .legal-table td {
          border: 1px solid #e8e0d8; padding: 10px 14px; text-align: left; vertical-align: top;
        }
        .legal-table th {
          background: var(--soft); font-weight: 700; color: var(--dark);
          width: 30%; white-space: nowrap;
        }
        .legal-table td { color: var(--mid); line-height: 1.7; }
        .legal-footer {
          background: var(--dark); color: rgba(255,255,255,0.45);
          padding: 32px 20px; text-align: center; font-size: 0.75rem; line-height: 1.9;
        }
        .legal-footer-logo {
          font-family: 'Montserrat', sans-serif; font-size: 1rem; font-weight: 900;
          color: var(--flame); margin-bottom: 10px; display: block;
        }
        .legal-footer-links {
          display: flex; justify-content: center; gap: 16px; margin-bottom: 12px; flex-wrap: wrap;
        }
        .legal-footer-links a { color: rgba(255,255,255,0.4); text-decoration: none; font-size: 0.72rem; }
        .legal-footer-links a:hover { color: var(--flame); }
        @media (min-width: 768px) {
          .legal-header { padding: 12px 40px; }
          .legal-hero { padding: 64px 40px 52px; }
          .legal-body { padding: 64px 40px 100px; }
        }
      `}</style>

      <header className="legal-header">
        <Link href="/" className="legal-logo">
          <span>🚀</span>
          Rocket Now
          <span className="legal-logo-sub">加盟店申請専用サイト</span>
        </Link>
        <Link href="/" className="legal-back">← トップへ戻る</Link>
      </header>

      <div className="legal-hero">
        <div className="legal-hero-label">LEGAL</div>
        <h1 className="legal-hero-title">{title}</h1>
        <p className="legal-hero-date">最終更新日：{lastUpdated}</p>
      </div>

      <div className="legal-body">
        {children}
      </div>

      <footer className="legal-footer">
        <span className="legal-footer-logo">🚀 Rocket Now</span>
        <div className="legal-footer-links">
          <Link href="/terms">利用規約</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
          <Link href="/store-terms">加盟店規約</Link>
          <Link href="/tokushoho">特定商取引法</Link>
          <Link href="/contact">お問い合わせ</Link>
        </div>
        <p>© {new Date().getFullYear()} Rocket Now Inc. All rights reserved.</p>
      </footer>
    </>
  );
}
