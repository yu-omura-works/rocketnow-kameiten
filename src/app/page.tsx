"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function RocketNowLP() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    storeName: "",
    contactName: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const faqs = [
    {
      q: "導入費用はかかりますか？",
      a: "初期費用・月額費用・解約費用はすべて0円です。ご注文が入った際の手数料（売上の30%）のみで、固定コストは一切かかりません。",
    },
    {
      q: "タブレットの貸出はありますか？",
      a: "はい、受注用の専用タブレット端末を完全無料でお貸しします。Wi-Fi環境があればすぐにご利用いただけます。初期設定のサポートも無料で対応いたします。なお、CamelやOrdeeなどの既存システムをご利用中の場合も、連携が可能です。",
    },
    {
      q: "導入までどのくらいかかりますか？",
      a: "お申込みからメニュー登録・端末設定を経て、最短1週間でデリバリーを開始できます。専任の担当者が全工程をサポートいたしますので、初めての方もご安心ください。",
    },
    {
      q: "手数料はどのくらいですか？",
      a: "手数料は売上の30%です。初期費用・月額費用・解約費用はすべて0円のため、注文が発生した分だけのコストとなります。固定費ゼロで始められるのがRocket Nowの強みです。",
    },
    {
      q: "配達員はしっかり確保できますか？",
      a: "ご安心ください。Rocket Nowは時給制のアルバイト配達員とフリーランス配達員を組み合わせたハイブリッド体制を採用しています。他社と比べて配達員への報酬が高いため、ピーク時や悪天候時でも優先的に配達していただける環境が整っており、安定した配達体制を確保できます。",
    },
    {
      q: "入金のサイクルを教えてください。",
      a: "毎月末締めの翌月10営業日目にお支払いとなります。",
    },
    {
      q: "配達中のトラブル（破損・未配達など）はどう対応されますか？",
      a: "配達中に発生したトラブルについては、ロケットナウが全額負担いたします。オーナー様にご迷惑をおかけしないよう、責任を持って対応いたします。",
    },
    {
      q: "メニュー写真がない場合はどうすればいいですか？",
      a: "プロのカメラマンが無料で撮影に伺います。1回につき最大15商品まで無料撮影が可能です。クオリティの高い写真でメニューを魅力的に見せましょう。",
    },
    {
      q: "営業時間を教えてください。",
      a: "Rocket Nowの配達営業時間は午前8時から翌日午前3時までとなります。幅広い時間帯に対応しているため、ランチからディナー・深夜帯まで安定してご利用いただけます。",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style precedence="default" href="rocket-now-global">{`
        /* フォントはnext/font経由で読み込み */

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --flame: #FF5722;
          --flame-light: #FF7043;
          --flame-deep: #E64A19;
          --gold: #FFA726;
          --gold-light: #FFD54F;
          --dark: #1A1A1A;
          --mid: #3D3D3D;
          --soft: #F5F0EB;
          --white: #FFFFFF;
          --red-accent: #D84315;
        }

        body {
          font-family: var(--font-noto), sans-serif;
          color: var(--dark);
          background: var(--white);
          overflow-x: hidden;
        }

        /* ── HEADER ── */
        html { scroll-behavior: smooth; }
        .header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(8px);
          border-bottom: 2px solid var(--flame);
          box-shadow: 0 2px 12px rgba(255,87,34,0.08);
        }
        .header-top {
          padding: 10px 20px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .logo {
          font-family: var(--font-montserrat), sans-serif;
          font-weight: 900;
          font-size: 1.2rem;
          color: var(--flame);
          letter-spacing: -0.5px;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-icon { font-size: 1.4rem; }
        .logo-sub {
          font-family: var(--font-noto), sans-serif;
          font-size: 0.58rem;
          font-weight: 700;
          color: var(--flame-deep);
          background: #fff3e0;
          border: 1px solid #ffcc80;
          border-radius: 4px;
          padding: 2px 6px;
          margin-left: 4px;
          white-space: nowrap;
          letter-spacing: 0.3px;
          display: none;
        }
        .header-right {
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .header-cta {
          background: var(--flame);
          color: var(--white);
          border: none;
          border-radius: 50px;
          padding: 8px 14px;
          font-family: var(--font-noto), sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s, transform 0.15s cubic-bezier(0.34,1.56,0.64,1);
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }
        .header-cta:hover { background: var(--flame-deep); transform: scale(1.06); }
        .header-cta:active { transform: scale(0.97); background: var(--flame); color: var(--white); }
        .header-cta:focus { outline: none; background: var(--flame); color: var(--white); }
        .hamburger {
          background: none;
          border: 2px solid var(--flame);
          border-radius: 8px;
          width: 36px; height: 36px;
          cursor: pointer;
          display: flex;
          flex-direction: column-reverse;
          align-items: flex-start;
          justify-content: center;
          gap: 4px;
          padding: 6px;
          flex-shrink: 0;
        }
        .hamburger span {
          display: block;
          width: 18px; height: 2px;
          background: var(--flame);
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.2s;
        }
        .hamburger.active span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .hamburger.active span:nth-child(2) { opacity: 0; }
        .hamburger.active span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
        /* ── NAV ── */
        .nav-bar {
          background: white;
          border-top: 1px solid #f0e8e0;
          padding: 0 20px;
          display: flex;
          gap: 0;
          overflow-x: auto;
          scrollbar-width: none;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        .nav-bar.open { max-height: 60px; overflow-x: auto; }
        .nav-bar::-webkit-scrollbar { display: none; }
        .nav-link {
          font-family: var(--font-noto), sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--mid);
          text-decoration: none;
          padding: 12px 12px;
          white-space: nowrap;
          border-bottom: 3px solid transparent;
          transition: color 0.2s, border-color 0.2s;
          display: block;
        }
        .nav-link:hover { color: var(--flame); border-bottom-color: var(--flame); }
        @media (min-width: 768px) {
          .header-top { padding: 12px 40px; }
          .hamburger { display: none; }
          .nav-bar { max-height: none !important; overflow: visible; padding: 0 40px; display: flex; }
          .nav-link { font-size: 0.82rem; padding: 10px 16px; }
          .logo-sub { display: inline; }
        }
        @media (min-width: 1024px) {
          .header-top { padding: 12px max(40px, calc((100vw - 1100px)/2)); }
          .nav-bar { padding: 0 max(40px, calc((100vw - 1100px)/2)); }
        }

        /* ── HERO ── */
        .hero {
          position: relative;
          min-height: 88vh;
          display: flex;
          flex-direction: column-reverse;
          justify-content: center;
          padding: 60px 20px 100px;
          overflow: hidden;
          background: linear-gradient(145deg, #fff8f5 0%, #fff3e0 50%, #ffe0b2 100%);
        }
        .hero-inner {
          display: flex;
          flex-direction: column-reverse;
          gap: 40px;
          width: 100%;
          z-index: 1;
        }
        .hero-content { flex: 1; }
        .hero-image-wrap {
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .hero-image-wrap img {
          width: 100%;
          max-width: 720px;
          height: auto;
          border-radius: 20px;
          box-shadow: 0 16px 48px rgba(255,87,34,0.18);
          animation: fadeSlideDown 0.9s 0.3s ease both;
        }
        .hero-bg-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,87,34,0.15) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-bg-circle-1 { width: 500px; height: 500px; top: -150px; right: -180px; }
        .hero-bg-circle-2 { width: 300px; height: 300px; bottom: -80px; left: -100px; }
        .hero-badge {
          display: inline-flex;
          align-items: flex-start;
          gap: 6px;
          background: linear-gradient(90deg, var(--flame), var(--gold));
          color: white;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 5px 14px;
          border-radius: 50px;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
          width: fit-content;
          animation: fadeSlideDown 0.7s ease both;
        }
        .hero-headline {
          font-size: clamp(1.75rem, 5.5vw, 3rem);
          font-weight: 900;
          line-height: 1.3;
          color: var(--dark);
          margin-bottom: 20px;
          animation: fadeSlideDown 0.8s 0.1s ease both;
        }
        .hero-headline span {
          color: var(--flame);
          position: relative;
          display: inline;
        }
        .hero-headline span::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, var(--flame), var(--gold));
          border-radius: 2px;
        }
        .hero-sub {
          font-size: clamp(0.88rem, 3vw, 1.1rem);
          line-height: 1.8;
          color: var(--mid);
          margin-bottom: 36px;
          max-width: 540px;
          animation: fadeSlideDown 0.8s 0.2s ease both;
        }
        .hero-cta-group {
          display: flex;
          flex-direction: column-reverse;
          gap: 12px;
          animation: fadeSlideDown 0.8s 0.3s ease both;
        }
        .btn-primary {
          display: inline-flex;
          align-items: flex-start;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, var(--flame), var(--red-accent));
          color: white;
          border: none;
          border-radius: 14px;
          padding: 18px 28px;
          font-family: var(--font-noto), sans-serif;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 8px 24px rgba(255,87,34,0.4);
          transition: transform 0.15s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.15s;
          letter-spacing: 0.3px;
          -webkit-tap-highlight-color: transparent;
          outline: none;
          -webkit-appearance: none;
        }
        .btn-primary:hover { transform: scale(1.06); box-shadow: 0 12px 32px rgba(255,87,34,0.55); }
        .btn-primary:active { transform: scale(0.97); box-shadow: 0 4px 12px rgba(255,87,34,0.3); background: linear-gradient(135deg, var(--flame), var(--red-accent)); color: white; }
        .btn-primary:focus { outline: none; background: linear-gradient(135deg, var(--flame), var(--red-accent)); color: white; }
        .btn-secondary {
          display: inline-flex;
          align-items: flex-start;
          justify-content: center;
          gap: 6px;
          background: transparent;
          color: var(--flame);
          border: 2px solid var(--flame);
          border-radius: 14px;
          padding: 16px 28px;
          font-family: var(--font-noto), sans-serif;
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.15s cubic-bezier(0.34,1.56,0.64,1);
          -webkit-tap-highlight-color: transparent;
          outline: none;
          -webkit-appearance: none;
        }
        .btn-secondary:hover { background: var(--flame); color: white; transform: scale(1.06); }
        .btn-secondary:active { transform: scale(0.97); }
        .btn-secondary:focus { outline: none; }
          display: flex;
          gap: 28px;
          margin-top: 44px;
          animation: fadeSlideDown 0.8s 0.4s ease both;
        }
        .stat { text-align: center; }
        .stat-num {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 1.6rem;
          font-weight: 900;
          color: var(--flame);
          line-height: 1;
        }
        .stat-label { font-size: 0.7rem; color: var(--mid); margin-top: 4px; white-space: nowrap; }
        .stat-divider { width: 1px; background: rgba(0,0,0,0.12); align-self: stretch; }
        .hero-rocket {
          position: absolute;
          right: 16px; bottom: 20px;
          font-size: 5rem;
          opacity: 0.12;
          animation: float 4s ease-in-out infinite;
          pointer-events: none;
        }

        /* ── SECTION BASE ── */
        section { padding: 72px 20px; }
        .section-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--flame);
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .section-title {
          font-size: clamp(1.4rem, 4vw, 2rem);
          font-weight: 900;
          line-height: 1.35;
          margin-bottom: 14px;
          color: var(--dark);
        }
        .section-title em { font-style: normal; color: var(--flame); }
        .section-desc {
          font-size: 0.92rem;
          color: var(--mid);
          line-height: 1.75;
          margin-bottom: 40px;
        }

        /* ── REASONS ── */
        .reasons { background: var(--soft); }
        .reason-cards { display: flex; flex-direction: column; gap: 20px; margin-top: 40px; }
        .reason-card {
          background: white;
          border-radius: 20px;
          padding: 0;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          border-left: 5px solid var(--flame);
          position: relative;
          overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .reason-card:hover { transform: translateY(-4px); box-shadow: 0 12px 36px rgba(0,0,0,0.11); }
        .reason-card::before {
          content: '';
          position: absolute;
          top: -30px; right: -30px;
          width: 100px; height: 100px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,87,34,0.08) 0%, transparent 70%);
        }
        .reason-img-wrap {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          background: #f0ebe6;
          margin: 0;
          padding: 0;
        }
        .reason-img-wrap img {
          max-width: 100%;
          height: auto;
          display: block;
          margin-left: auto;
          margin-right: auto;
          border-radius: 20px 20px 0 0;
          transition: transform 0.5s ease;
        }
        .reason-card:hover .reason-img-wrap img { transform: scale(1.05); }
        .reason-text-wrap {
          padding: 20px 24px 24px;
        }
        .reason-img-badge {
          position: absolute; top: 12px; left: 12px;
          background: linear-gradient(135deg, var(--flame), var(--red-accent));
          color: white; font-family: var(--font-montserrat), sans-serif;
          font-size: 0.62rem; font-weight: 700; letter-spacing: 2px;
          padding: 4px 10px; border-radius: 50px;
          box-shadow: 0 2px 8px rgba(255,87,34,0.4);
        }
        .reason-number {
          font-family: var(--font-montserrat), sans-serif;
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--flame);
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .reason-icon { font-size: 2.4rem; margin-bottom: 10px; display: block; }
        .reason-title { font-size: 1.05rem; font-weight: 900; color: var(--dark); margin-bottom: 10px; line-height: 1.45; }
        .reason-body { font-size: 0.88rem; color: var(--mid); line-height: 1.7; }

        /* ── BENEFITS / VOICES ── */
        .benefits { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); }
        .benefits .section-label { color: rgba(255,255,255,0.55); }
        .benefits .section-title { color: white; }
        .benefits .section-desc { color: rgba(255,255,255,0.72); }
        .voice-cards { display: flex; flex-direction: column; gap: 16px; }
        .voice-card {
          background: rgba(255,255,255,0.07);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 16px;
          padding: 24px 22px;
          color: white;
          position: relative;
          overflow: hidden;
        }
        .voice-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 100%;
          background: linear-gradient(180deg, var(--flame), var(--gold));
        }
        .voice-video {
          position: relative;
          width: 100%;
          padding-top: 56.25%;
          margin-bottom: 16px;
          border-radius: 10px;
          overflow: hidden;
        }
        .voice-video iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }
        .voice-quote {
          font-size: 3rem;
          line-height: 0.6;
          color: var(--flame);
          font-family: var(--font-montserrat), sans-serif;
          margin-bottom: 12px;
          opacity: 0.7;
        }
        .voice-text { font-size: 0.95rem; font-weight: 500; line-height: 1.75; margin-bottom: 16px; color: rgba(255,255,255,0.92); }
        .voice-highlight {
          color: var(--gold-light);
          font-weight: 700;
        }
        .voice-author { font-size: 0.75rem; color: rgba(255,255,255,0.5); margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1); }
        .voice-stars { color: var(--gold-light); font-size: 0.78rem; margin-bottom: 8px; letter-spacing: 2px; }

        /* ── STEPS ── */
        .steps-wrap { display: flex; flex-direction: column; gap: 0; margin-top: 40px; }
        .step { display: flex; gap: 20px; align-items: flex-start; padding-bottom: 36px; }
        .step:last-child { padding-bottom: 0; }
        .step-left { display: flex; flex-direction: column-reverse; align-items: flex-start; flex-shrink: 0; }
        .step-dot {
          width: 52px; height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--flame), var(--gold));
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-montserrat), sans-serif;
          font-size: 1.2rem; font-weight: 900; color: white;
          box-shadow: 0 4px 16px rgba(255,87,34,0.4);
          flex-shrink: 0;
        }
        .step-line {
          width: 2px; flex: 1;
          background: linear-gradient(to bottom, var(--flame), var(--gold));
          margin-top: 8px; min-height: 40px; opacity: 0.3;
        }
        .step:last-child .step-line { display: none; }
        .step-content { padding-top: 10px; }
        .step-label { font-size: 0.68rem; font-weight: 700; color: var(--flame); letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 4px; }
        .step-title { font-size: 1.1rem; font-weight: 900; color: var(--dark); margin-bottom: 6px; }
        .step-desc { font-size: 0.86rem; color: var(--mid); line-height: 1.65; }
        .step-icon { font-size: 1.4rem; margin-bottom: 4px; }

        /* ── FAQ ── */
        .faq { background: var(--soft); }
        .faq-list { display: flex; flex-direction: column-reverse; gap: 12px; margin-top: 40px; }
        .faq-item { background: white; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
        .faq-q {
          width: 100%; display: flex; align-items: flex-start; justify-content: space-between; gap: 12px;
          padding: 20px 20px; background: none; border: none; cursor: pointer;
          font-family: var(--font-noto), sans-serif; font-size: 0.92rem; font-weight: 700;
          color: var(--dark); text-align: left;
        }
        .faq-icon {
          width: 28px; height: 28px; border-radius: 50%;
          background: linear-gradient(135deg, var(--flame), var(--gold));
          color: white; display: flex; align-items: flex-start; justify-content: center;
          font-size: 1rem; flex-shrink: 0; transition: transform 0.25s;
        }
        .faq-item.open .faq-icon { transform: rotate(45deg); }
        .faq-a {
          max-height: 0; overflow: hidden;
          transition: max-height 0.35s ease, padding 0.25s;
          font-size: 0.88rem; color: var(--mid); line-height: 1.75;
          padding: 0 20px;
        }
        .faq-item.open .faq-a { max-height: 200px; padding: 0 20px 20px; }

        /* ── CTA FORM ── */
        .cta-form-section {
          background: linear-gradient(160deg, #fff8f5 0%, #ffede5 100%);
          border-top: 3px solid var(--flame);
        }
        .form-card {
          background: white; border-radius: 24px; padding: 32px 24px;
          box-shadow: 0 8px 48px rgba(255,87,34,0.12); margin-top: 36px;
        }
        .form-group { margin-bottom: 18px; }
        .form-label { display: block; font-size: 0.8rem; font-weight: 700; color: var(--mid); margin-bottom: 6px; letter-spacing: 0.3px; }
        .form-label span {
          background: var(--flame); color: white;
          font-size: 0.65rem; padding: 1px 6px; border-radius: 4px;
          margin-left: 6px; vertical-align: middle;
        }
        .form-input {
          width: 100%; border: 2px solid #ebebeb; border-radius: 12px;
          padding: 14px 16px; font-family: var(--font-noto), sans-serif;
          font-size: 0.95rem; color: var(--dark); outline: none;
          transition: border-color 0.2s, box-shadow 0.2s; background: #fafafa;
        }
        .form-input:focus { border-color: var(--flame); box-shadow: 0 0 0 3px rgba(255,87,34,0.12); background: white; }
        .form-input::placeholder { color: #bbb; }
        .form-note { font-size: 0.75rem; color: #999; margin-top: 14px; line-height: 1.6; text-align: center; }
        .success-box { text-align: center; padding: 40px 24px; }
        .success-icon { font-size: 3.5rem; margin-bottom: 16px; display: block; }
        .success-title { font-size: 1.3rem; font-weight: 900; color: var(--dark); margin-bottom: 8px; }
        .success-text { font-size: 0.9rem; color: var(--mid); line-height: 1.7; }

        /* ── FOOTER ── */
        .footer {
          background: var(--dark); color: rgba(255,255,255,0.5);
          padding: 40px 20px; text-align: center; font-size: 0.78rem; line-height: 1.9;
        }
        .footer-logo { font-family: var(--font-montserrat), sans-serif; font-size: 1.2rem; font-weight: 900; color: var(--flame); margin-bottom: 12px; display: block; }
        .footer-links { display: flex; justify-content: center; gap: 20px; margin-bottom: 16px; flex-wrap: wrap; }
        .footer-links a { color: rgba(255,255,255,0.4); text-decoration: none; font-size: 0.75rem; }
        .footer-links a:hover { color: var(--flame); }

        /* ── FLOATING CTA ── */
        .floating-cta {
          position: fixed; bottom: 0; left: 0; right: 0;
          background: linear-gradient(135deg, var(--flame), var(--red-accent));
          padding: 14px 20px; z-index: 99;
          box-shadow: 0 -4px 24px rgba(255,87,34,0.35);
          display: flex; align-items: flex-start; justify-content: center; gap: 10px;
        }
        .floating-cta-text { color: white; font-size: 0.88rem; font-weight: 700; white-space: nowrap; }
        .floating-cta a {
          background: white; color: var(--flame); border-radius: 50px;
          padding: 10px 20px; font-size: 0.82rem; font-weight: 700;
          text-decoration: none; white-space: nowrap;
          transition: transform 0.15s cubic-bezier(0.34,1.56,0.64,1);
          -webkit-tap-highlight-color: transparent;
          outline: none;
        }
        .floating-cta a:hover { transform: scale(1.06); }
        .floating-cta a:active { transform: scale(0.97); background: white; color: var(--flame); }
        .floating-cta a:focus { outline: none; background: white; color: var(--flame); }

        /* ── ANIMATIONS ── */
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-10deg); }
          50%       { transform: translateY(-18px) rotate(-10deg); }
        }

        /* ── RESPONSIVE ── */
        @media (min-width: 640px) {
          .hero-cta-group { flex-direction: row; }
          .hero-inner { flex-direction: row; align-items: flex-start; }
          .reason-cards { flex-direction: row; }
          .reason-card { flex: 1; }
          .voice-cards { flex-direction: row; flex-wrap: wrap; }
          .voice-card { flex: 1 1 calc(50% - 8px); }
        }
        @media (min-width: 768px) {
          section { padding: 100px 40px; }
          .header { padding: 14px 40px; }
          .hero { padding: 100px 40px; }
          .hero-rocket { font-size: 10rem; right: 60px; bottom: 60px; opacity: 0.08; }
          .floating-cta { display: none; }
        }
        @media (min-width: 1024px) {
          section { padding: 120px max(40px, calc((100vw - 1100px)/2)); }
          .hero { padding: 120px max(40px, calc((100vw - 1100px)/2)); }
        }
      `}</style>

      {/* HEADER */}
      <header className="header">
        <div className="header-top">
          <a href="#" className="logo">
            <span className="logo-icon">🚀</span>
            Rocket Now
            <span className="logo-sub">加盟店申請専用サイト</span>
          </a>
          <div className="header-right">
            <a href="#contact" className="header-cta">無料で資料請求</a>
            <button
              className={`hamburger${menuOpen ? " active" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
        <nav className={`nav-bar${menuOpen ? " open" : ""}`}>
          <a className="nav-link" onClick={() => scrollTo("reasons")} href="#reasons">選ばれる理由</a>
          <a className="nav-link" onClick={() => scrollTo("voices")} href="#voices">導入事例</a>
          <a className="nav-link" onClick={() => scrollTo("steps")} href="#steps">導入の流れ</a>
          <a className="nav-link" onClick={() => scrollTo("faq")} href="#faq">よくある質問</a>
          <a className="nav-link" onClick={() => scrollTo("contact")} href="#contact">お問い合わせ</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg-circle hero-bg-circle-1" />
        <div className="hero-bg-circle hero-bg-circle-2" />
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              🛡️ 配達員の安全確保を最優先に取り組んでいます
            </div>
            <h1 className="hero-headline">
              <span>Rocket Now</span> で、<br />
              あなたのお店の味を<br />
              街中に届ける。
            </h1>
            <p className="hero-sub">
              <strong style={{color:"var(--flame)"}}>初期費用0円・月額費用0円・解約費用0円。</strong><br />
              最短1週間でデリバリー開始。<br />
              地域密着型の配送ネットワークで<br />
              リピーターを増やしませんか？
            </p>
            <div className="hero-cta-group">
              <a href="#contact" className="btn-primary">
                📋 無料で資料請求・お問い合わせ
              </a>
              <a href="#reasons" className="btn-secondary">
                詳しく見る →
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <Image src="/images/hero.png" alt="ロケットナウ加盟店募集" width={480} height={480} loading="eager" priority />
          </div>
        </div>
        <div className="hero-rocket">🚀</div>
      </section>

      {/* REASONS */}
      <section id="reasons" className="reasons">
        <div className="section-label">WHY ROCKET NOW</div>
        <h2 className="section-title">
          Rocket Nowが選ばれる<br /><em>3つの理由</em>
        </h2>
        <p className="section-desc">
          飲食店オーナーの「もっと稼ぎたい」を実現するために、<br />
          Rocket Nowは3つの強みで徹底サポートします。
        </p>
        <div className="reason-cards">
          <div className="reason-card" style={{padding: '0'}}>
            <div className="reason-img-wrap">
              <img src="/images/reason01.webp" alt="配達員数・ハイブリッド体制イメージ" style={{maxWidth:'100%',height:'auto',display:'block',marginLeft:'auto',marginRight:'auto'}} />
              <span className="reason-img-badge">REASON 01</span>
            </div>
            <div style={{padding:'20px'}}>
              <div className="reason-number">REASON 01</div>
              <span className="reason-icon">🛵</span>
              <div className="reason-title">圧倒的な「配達員数」で<br /><span style={{color:"var(--flame)"}}>機会損失ゼロ</span>へ</div>
              <div className="reason-body">
                Rocket Nowは、独自の時給制アルバイトと高単価契約のフリーランスを組み合わせたハイブリッド体制。他社が不足しがちな雨の日やピークタイムでも、確実にお客様へお料理を届けます。
              </div>
            </div>
          </div>
          <div className="reason-card" style={{padding: '0'}}>
            <div className="reason-img-wrap">
              <img src="/images/reason02.webp" alt="初期費用0円・業界最安級イメージ" style={{maxWidth:'100%',height:'auto',display:'block',marginLeft:'auto',marginRight:'auto'}} />
              <span className="reason-img-badge">REASON 02</span>
            </div>
            <div style={{padding:'20px'}}>
              <div className="reason-number">REASON 02</div>
              <span className="reason-icon">💰</span>
              <div className="reason-title">
                初期・月額・解約<br />ぜんぶ<span style={{color:"var(--flame)"}}>「0円」</span>！<br />業界最安級のコストでスタート
              </div>
              <div className="reason-body">
                初期費用、月額固定費、解約違約金もすべて<strong>「0円」</strong>。手数料は売上のわずか<strong>「30%」</strong>で、大手他社と比較しても手元にしっかり利益が残ります。受注用の専用タブレットも<strong>完全無料</strong>でレンタル。完全リスクゼロで始められます。
              </div>
            </div>
          </div>
          <div className="reason-card" style={{padding: '0'}}>
            <div className="reason-img-wrap">
              <img src="/images/reason03.webp" alt="最短1週間で開店イメージ" style={{maxWidth:'100%',height:'auto',display:'block',marginLeft:'auto',marginRight:'auto'}} />
              <span className="reason-img-badge">REASON 03</span>
            </div>
            <div style={{padding:'20px'}}>
              <div className="reason-number">REASON 03</div>
              <span className="reason-icon">🚀</span>
              <div className="reason-title">最短<span style={{color:"var(--flame)"}}>1週間</span>で開店</div>
              <div className="reason-body">
                お申込みからメニュー登録・端末設定まで、専任スタッフが全てサポート。面倒な手続きは一切なく、最短1週間でデリバリーをスタートできます。
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="comparison" style={{background:'white',padding:'64px 20px'}}>
        <div style={{maxWidth:'900px',margin:'0 auto'}}>
          <div className="section-label" style={{textAlign:'center'}}>COMPARISON</div>
          <h2 className="section-title" style={{textAlign:'center'}}>他社サービスとの<span style={{color:'var(--flame)'}}>比較</span></h2>
          <p className="section-desc" style={{textAlign:'center'}}>コストパフォーマンスとサポートの手厚さで選ばれています。</p>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.15fr 1fr',gap:'16px',marginTop:'40px'}}>
            {/* A社 */}
            <div style={{background:'#f9f6f2',borderRadius:'20px',padding:'28px 24px',boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>
              <div style={{fontSize:'1.1rem',fontWeight:'900',marginBottom:'20px',color:'var(--dark)'}}>A社</div>
              {[
                {label:'販売手数料',value:'35%〜'},
                {label:'初期費用',value:'0円'},
                {label:'写真撮影',value:'有料 / 自前'},
                {label:'担当窓口',value:'Webのみ'},
                {label:'システム連携',value:'対応'},
              ].map((item,i) => (
                <div key={i} style={{padding:'12px 0',borderBottom:i<4?'1px solid #e8e4e0':'none'}}>
                  <div style={{fontSize:'0.72rem',color:'#aaa',marginBottom:'4px'}}>{item.label}</div>
                  <div style={{fontSize:'0.9rem',fontWeight:'700',color:'var(--dark)'}}>{item.value}</div>
                </div>
              ))}
            </div>
            {/* Rocket Now */}
            <div style={{background:'linear-gradient(145deg,#1a2a4a,#0f1e38)',borderRadius:'20px',padding:'28px 24px',boxShadow:'0 12px 48px rgba(255,87,34,0.25)',position:'relative'}}>
              <div style={{position:'absolute',top:'-14px',left:'50%',transform:'translateX(-50%)',background:'var(--flame)',color:'white',fontSize:'0.75rem',fontWeight:'900',padding:'5px 18px',borderRadius:'50px',whiteSpace:'nowrap'}}>🚀 おすすめ</div>
              <div style={{fontSize:'1.3rem',fontWeight:'900',marginBottom:'4px',color:'white'}}>Rocket Now</div>
              <div style={{fontSize:'0.75rem',color:'rgba(255,255,255,0.5)',marginBottom:'20px'}}>利益重視のデリバリー</div>
              {[
                {label:'販売手数料',value:'30%',good:true},
                {label:'初期費用',value:'0円',good:true},
                {label:'写真撮影',value:'無料（プロ撮影）',good:true},
                {label:'担当窓口',value:'専任担当あり',good:true},
                {label:'システム連携',value:'対応',good:true},
              ].map((item,i) => (
                <div key={i} style={{padding:'12px 0',borderBottom:i<4?'1px solid rgba(255,255,255,0.1)':'none'}}>
                  <div style={{fontSize:'0.72rem',color:'rgba(255,255,255,0.5)',marginBottom:'4px'}}>{item.label}</div>
                  <div style={{fontSize:'0.9rem',fontWeight:'700',color:'var(--flame)'}}>{item.value}</div>
                </div>
              ))}
            </div>
            {/* B社 */}
            <div style={{background:'#f9f6f2',borderRadius:'20px',padding:'28px 24px',boxShadow:'0 4px 24px rgba(0,0,0,0.06)'}}>
              <div style={{fontSize:'1.1rem',fontWeight:'900',marginBottom:'20px',color:'var(--dark)'}}>B社</div>
              {[
                {label:'販売手数料',value:'40%〜'},
                {label:'初期費用',value:'0円'},
                {label:'写真撮影',value:'有料'},
                {label:'担当窓口',value:'Webのみ'},
                {label:'システム連携',value:'一部対応'},
              ].map((item,i) => (
                <div key={i} style={{padding:'12px 0',borderBottom:i<4?'1px solid #e8e4e0':'none'}}>
                  <div style={{fontSize:'0.72rem',color:'#aaa',marginBottom:'4px'}}>{item.label}</div>
                  <div style={{fontSize:'0.9rem',fontWeight:'700',color:'var(--dark)'}}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VOICES */}
      <section id="voices" className="benefits">
        <div className="section-label">STORE VOICES</div>
        <h2 className="section-title">オーナー様インタビュー</h2>
        <p className="section-desc">
          実際に Rocket Now を導入したオーナー様からのリアルな声をご紹介します。
        </p>
        <div className="voice-cards">
          <div className="voice-card">
            <div className="voice-video">
              <iframe src="https://www.youtube.com/embed/dg8BhufMBsI" allowFullScreen />
            </div>
            <div className="voice-stars">★★★★★</div>
            <div className="voice-text">
              2022年にサービスを開始して以来、複数のデリバリーアプリを利用してきましたが、<span className="voice-highlight">注文数が2倍以上に増えたのはロケットナウが初めて</span>でした。他のデリバリーアプリと比べても、注文数は約30％以上多いです。
            </div>
            <div className="voice-author">🍜 ラーメン店オーナー</div>
          </div>
          <div className="voice-card">
            <div className="voice-video">
              <iframe src="https://www.youtube.com/embed/5Ko6YXDeWi4" allowFullScreen />
            </div>
            <div className="voice-stars">★★★★★</div>
            <div className="voice-text">
              当店はお店と同価格で提供していますが、ロケットナウに出店してから<span className="voice-highlight">売上が一気に伸びました。</span>ロケットナウは、お客様にもお店にも嬉しい、まさにウィンウィンのサービスです。
            </div>
            <div className="voice-author">🍖 焼肉店オーナー</div>
          </div>
          <div className="voice-card">
            <div className="voice-video">
              <iframe src="https://www.youtube.com/embed/EU5vw-Tskxk" allowFullScreen />
            </div>
            <div className="voice-stars">★★★★★</div>
            <div className="voice-text">
              ロケットナウの導入後、<span className="voice-highlight">1日の平均お弁当注文数が80食増えました。</span>さらに、ロケットナウで注文したことをきっかけに実際に来店してくださるお客様も増え、今では地域で人気のお店になりました。
            </div>
            <div className="voice-author">🍱 弁当・惣菜店オーナー</div>
          </div>
          <div className="voice-card">
            <div className="voice-video">
              <iframe src="https://www.youtube.com/embed/nBOl_08ELxA" allowFullScreen />
            </div>
            <div className="voice-stars">★★★★★</div>
            <div className="voice-text">
              新規開店と同時にロケットナウも始めましたが、<span className="voice-highlight">オープン初日から注文が入り、現在はスタッフを2名増員</span>しています。オープンからわずか1か月で、ここまで早く成長するとは思っていませんでした。
            </div>
            <div className="voice-author">🥙 ケバブ店オーナー</div>
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section id="steps">
        <div className="section-label">HOW TO START</div>
        <h2 className="section-title">
          導入までの<em>3ステップ</em>
        </h2>
        <p className="section-desc">
          面倒な手続きはすべて担当者がサポート。<br />
          最短1週間でデリバリーを開始できます。
        </p>
        <div className="steps-wrap">
          <div className="step">
            <div className="step-left">
              <div className="step-dot">1</div>
              <div className="step-line" />
            </div>
            <div className="step-content">
              <div className="step-label">STEP 01</div>
              <div className="step-icon">🌐</div>
              <div className="step-title">Webからのお申込み</div>
              <div className="step-desc">
                このページ下部のフォームに必要事項を入力するだけ。24時間以内に担当者からご連絡します。完全無料・しつこい営業は一切なし。
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-left">
              <div className="step-dot">2</div>
              <div className="step-line" />
            </div>
            <div className="step-content">
              <div className="step-label">STEP 02</div>
              <div className="step-icon">📋</div>
              <div className="step-title">メニュー登録・端末設定</div>
              <div className="step-desc">
                専任スタッフがメニューの登録をサポート。無料貸出の専用タブレットをお届けし、その場で設定まで完了します。
              </div>
            </div>
          </div>
          <div className="step">
            <div className="step-left">
              <div className="step-dot">3</div>
              <div className="step-line" />
            </div>
            <div className="step-content">
              <div className="step-label">STEP 03</div>
              <div className="step-icon">🚀</div>
              <div className="step-title">掲載完了・開店！</div>
              <div className="step-desc">
                設定完了後、アプリへの掲載が完了し、すぐにデリバリー受付がスタート。注文が入り始めたらいよいよ開店です！
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">よくある質問</h2>
        <p className="section-desc">
          加盟をご検討中のオーナー様からよくいただく質問をまとめました。
        </p>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq-item${openFaq === i ? " open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span>Q. {item.q}</span>
                <div className="faq-icon">+</div>
              </button>
              <div className="faq-a">A. {item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FORM */}
      <section id="contact" className="cta-form-section">
        <div className="section-label">CONTACT</div>
        <h2 className="section-title">
          まずはお気軽に<br /><em>ご相談ください</em>
        </h2>
        <p className="section-desc">
          資料請求・ご相談はすべて無料です。<br />
          24時間以内に担当者からご連絡いたします。
        </p>
        <div className="form-card">
          {submitted ? (
            <div className="success-box">
              <span className="success-icon">🎉</span>
              <div className="success-title">お申込みありがとうございます！</div>
              <div className="success-text">
                24時間以内に担当者からご連絡いたします。<br />
                しばらくお待ちください。
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  店舗名 <span>必須</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="例：ラーメン大将 名古屋駅前店"
                  value={formData.storeName}
                  onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  担当者名 <span>必須</span>
                </label>
                <input
                  className="form-input"
                  type="text"
                  placeholder="例：田中 太郎"
                  value={formData.contactName}
                  onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  電話番号 <span>必須</span>
                </label>
                <input
                  className="form-input"
                  type="tel"
                  placeholder="例：052-XXX-XXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  メールアドレス <span style={{background:'#ddd',color:'#888',fontSize:'0.62rem',padding:'1px 6px',borderRadius:'4px',marginLeft:'6px'}}>任意</span>
                </label>
                <input
                  className="form-input"
                  type="email"
                  placeholder="例：info@restaurant.jp"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">
                  お問い合わせ種別 <span>必須</span>
                </label>
                <select
                  className="form-input"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                >
                  <option value="">選択してください</option>
                  <option>加盟のご相談・資料請求</option>
                  <option>手数料・料金について</option>
                  <option>タブレット・端末について</option>
                  <option>対応エリアについて</option>
                  <option>その他</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">
                  お問い合わせ内容 <span style={{background:'#ddd',color:'#888',fontSize:'0.62rem',padding:'1px 6px',borderRadius:'4px',marginLeft:'6px'}}>任意</span>
                </label>
                <textarea
                  className="form-input"
                  placeholder="ご質問・ご要望などをご自由にお書きください"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{minHeight:'100px',resize:'vertical'}}
                />
              </div>
              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", marginTop: "8px" }}
              >
                🚀 無料で資料請求・相談する
              </button>
              <p className="form-note">
                ※ 個人情報は適切に管理し、第三者への提供は行いません。<br />
                しつこい営業電話は一切行いません。
              </p>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <span className="footer-logo">🚀 Rocket Now</span>
        <div className="footer-links">
          <Link href="/terms" scroll={false}>利用規約</Link>
          <Link href="/privacy" scroll={false}>プライバシーポリシー</Link>
          <Link href="/store-terms" scroll={false}>加盟店規約</Link>
          <Link href="/tokushoho" scroll={false}>特定商取引法</Link>
          <Link href="/contact" scroll={false}>お問い合わせ</Link>
        </div>
        <p>© {new Date().getFullYear()} Rocket Now Inc. All rights reserved.</p>

      </footer>

      {/* FLOATING CTA (mobile only) */}
      <div className="floating-cta">
        <span className="floating-cta-text">🚀 無料で始める</span>
        <a href="#contact">今すぐ資料請求</a>
      </div>
    </>
  );
}
