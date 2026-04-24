"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    storeName: "",
    contactName: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

        /* HEADER */
        .contact-header {
          position: sticky; top: 0; z-index: 100;
          background: rgba(255,255,255,0.97); backdrop-filter: blur(8px);
          border-bottom: 2px solid var(--flame);
          padding: 12px 20px; display: flex; align-items: center; justify-content: space-between;
        }
        .contact-logo {
          font-family: 'Montserrat', sans-serif; font-weight: 900; font-size: 1.2rem;
          color: var(--flame); display: flex; align-items: center; gap: 6px; text-decoration: none;
        }
        .contact-logo-sub {
          font-family: 'Noto Sans JP', sans-serif; font-size: 0.58rem; font-weight: 700;
          color: var(--flame-deep); background: #fff3e0; border: 1px solid #ffcc80;
          border-radius: 4px; padding: 2px 6px; margin-left: 4px;
        }
        .contact-back {
          font-size: 0.78rem; font-weight: 700; color: var(--flame);
          text-decoration: none; display: flex; align-items: center; gap: 4px;
          padding: 6px 14px; border: 2px solid var(--flame); border-radius: 50px;
          transition: background 0.2s, color 0.2s;
        }
        .contact-back:hover { background: var(--flame); color: white; }

        /* HERO */
        .contact-hero {
          background: linear-gradient(145deg, #fff8f5 0%, #fff3e0 50%, #ffe0b2 100%);
          padding: 48px 20px 40px; border-bottom: 1px solid #ffe0c8;
          position: relative; overflow: hidden;
        }
        .contact-hero::before {
          content: ''; position: absolute; width: 300px; height: 300px;
          top: -100px; right: -100px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,87,34,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-hero-label {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 2px; color: var(--flame);
          text-transform: uppercase; margin-bottom: 10px;
        }
        .contact-hero-title {
          font-size: clamp(1.5rem, 4vw, 2.2rem); font-weight: 900; color: var(--dark);
          margin-bottom: 10px; line-height: 1.3;
        }
        .contact-hero-title em { font-style: normal; color: var(--flame); }
        .contact-hero-desc { font-size: 0.88rem; color: var(--mid); line-height: 1.75; }

        /* BODY */
        .contact-body {
          max-width: 680px; margin: 0 auto; padding: 48px 20px 80px;
        }

        /* INFO CARDS */
        .contact-info-cards {
          display: flex; flex-direction: column; gap: 14px; margin-bottom: 40px;
        }
        .contact-info-card {
          display: flex; align-items: flex-start; gap: 14px;
          background: var(--soft); border-radius: 14px; padding: 18px 20px;
        }
        .contact-info-icon {
          font-size: 1.6rem; flex-shrink: 0; margin-top: 2px;
        }
        .contact-info-title {
          font-size: 0.82rem; font-weight: 900; color: var(--dark); margin-bottom: 3px;
        }
        .contact-info-text { font-size: 0.78rem; color: var(--mid); line-height: 1.7; }

        /* DIVIDER */
        .contact-divider {
          display: flex; align-items: center; gap: 12px; margin-bottom: 32px;
        }
        .contact-divider::before, .contact-divider::after {
          content: ''; flex: 1; height: 1px; background: #e0d8d0;
        }
        .contact-divider span {
          font-size: 0.72rem; font-weight: 700; color: var(--flame);
          letter-spacing: 1.5px; text-transform: uppercase; white-space: nowrap;
        }

        /* FORM */
        .contact-form-card {
          background: white; border-radius: 24px; padding: 32px 24px;
          box-shadow: 0 8px 48px rgba(255,87,34,0.1);
          border: 1px solid rgba(255,87,34,0.08);
        }
        .form-group { margin-bottom: 18px; }
        .form-label {
          display: block; font-size: 0.8rem; font-weight: 700; color: var(--mid);
          margin-bottom: 6px; letter-spacing: 0.3px;
        }
        .form-label .badge-required {
          background: var(--flame); color: white;
          font-size: 0.62rem; padding: 1px 6px; border-radius: 4px;
          margin-left: 6px; vertical-align: middle;
        }
        .form-label .badge-optional {
          background: #ddd; color: #888;
          font-size: 0.62rem; padding: 1px 6px; border-radius: 4px;
          margin-left: 6px; vertical-align: middle;
        }
        .form-input, .form-select, .form-textarea {
          width: 100%; border: 2px solid #ebebeb; border-radius: 12px;
          padding: 13px 16px; font-family: 'Noto Sans JP', sans-serif;
          font-size: 0.92rem; color: var(--dark); outline: none;
          transition: border-color 0.2s, box-shadow 0.2s; background: #fafafa;
        }
        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: var(--flame); box-shadow: 0 0 0 3px rgba(255,87,34,0.1); background: white;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: #c0c0c0; }
        .form-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 16px center; padding-right: 40px; }
        .form-textarea { resize: vertical; min-height: 120px; line-height: 1.7; }
        .btn-submit {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px;
          background: linear-gradient(135deg, var(--flame), var(--flame-deep));
          color: white; border: none; border-radius: 14px; padding: 18px;
          font-family: 'Noto Sans JP', sans-serif; font-size: 1rem; font-weight: 700;
          cursor: pointer; box-shadow: 0 8px 24px rgba(255,87,34,0.35);
          transition: transform 0.15s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.15s; margin-top: 8px;
          letter-spacing: 0.3px;
        }
        .btn-submit:hover { transform: scale(1.06); box-shadow: 0 12px 32px rgba(255,87,34,0.5); }
        .btn-submit:active { transform: scale(0.97); }
        .form-note { font-size: 0.72rem; color: #aaa; margin-top: 14px; line-height: 1.7; text-align: center; }

        /* SUCCESS */
        .success-box { text-align: center; padding: 32px 20px; }
        .success-icon { font-size: 3rem; display: block; margin-bottom: 12px; }
        .success-title { font-size: 1.1rem; font-weight: 900; color: var(--dark); margin-bottom: 6px; }
        .success-text { font-size: 0.82rem; color: var(--mid); line-height: 1.7; margin-bottom: 20px; }
        .success-actions { display: flex; flex-direction: column; gap: 10px; }
        .success-action-btn {
          display: flex; align-items: center; gap: 12px;
          border-radius: 12px; padding: 14px 16px; text-decoration: none;
          text-align: left; transition: transform 0.15s, box-shadow 0.15s;
        }
        .success-action-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.1); }
        .success-action-btn span { font-size: 1.6rem; flex-shrink: 0; }
        .success-action-tel { background: linear-gradient(135deg, var(--flame), #D84315); color: white; }
        .success-action-line { background: #06C755; color: white; }
        .success-action-mail { background: var(--soft); color: var(--dark); border: 2px solid #e8e0d8; }
        .success-action-label { font-size: 0.85rem; font-weight: 900; margin-bottom: 2px; }
        .success-action-sub { font-size: 0.7rem; opacity: 0.82; }

        /* FOOTER */
        .contact-footer {
          background: #1A1A1A; color: rgba(255,255,255,0.45);
          padding: 32px 20px; text-align: center; font-size: 0.75rem; line-height: 1.9;
        }
        .contact-footer-logo {
          font-family: 'Montserrat', sans-serif; font-size: 1rem; font-weight: 900;
          color: var(--flame); margin-bottom: 10px; display: block;
        }
        .contact-footer-links {
          display: flex; justify-content: center; gap: 16px; margin-bottom: 12px; flex-wrap: wrap;
        }
        .contact-footer-links a { color: rgba(255,255,255,0.4); text-decoration: none; font-size: 0.72rem; }
        .contact-footer-links a:hover { color: var(--flame); }

        @media (min-width: 640px) {
          .contact-info-cards { flex-direction: row; }
          .contact-info-card { flex: 1; }
        }
        @media (min-width: 768px) {
          .contact-header { padding: 12px 40px; }
          .contact-hero { padding: 64px 40px 52px; }
          .contact-body { padding: 64px 40px 100px; }
        }
      `}</style>

      {/* HEADER */}
      <header className="contact-header">
        <Link href="/" className="contact-logo">
          <span>🚀</span>
          Rocket Now
          <span className="contact-logo-sub">加盟店申請専用サイト</span>
        </Link>
        <Link href="/" className="contact-back">← トップへ戻る</Link>
      </header>

      {/* HERO */}
      <div className="contact-hero">
        <div className="contact-hero-label">CONTACT</div>
        <h1 className="contact-hero-title">
          まずはお気軽に<br /><em>ご相談ください</em>
        </h1>
        <p className="contact-hero-desc">
          加盟のご相談・資料請求・ご質問など、何でもお気軽にどうぞ。<br />
          24時間以内に担当者からご連絡いたします。
        </p>
      </div>

      <div className="contact-body">
        {/* INFO CARDS */}
        <div className="contact-info-cards">
          <div className="contact-info-card">
            <span className="contact-info-icon">✉️</span>
            <div>
              <div className="contact-info-title">メールでのお問い合わせ</div>
              <div className="contact-info-text">
                support@rocketnow-kameiten.com<br />
                24時間受付
              </div>
            </div>
          </div>
          <div className="contact-info-card">
            <span className="contact-info-icon">⏱️</span>
            <div>
              <div className="contact-info-title">返信目安</div>
              <div className="contact-info-text">
                お問い合わせから<br />
                24時間以内にご連絡
              </div>
            </div>
          </div>
        </div>

        <div className="contact-divider">
          <span>WEB FORM</span>
        </div>

        {/* FORM */}
        <div className="contact-form-card">
          {submitted ? (
            <div className="success-box">
              <span className="success-icon">🎉</span>
              <div className="success-title">お問い合わせありがとうございます！</div>
              <div className="success-text">
                内容を確認のうえ、担当者よりご連絡いたします。<br />
                お急ぎの方は以下からもご連絡いただけます。
              </div>
              <div className="success-actions">
              <a href="mailto:support@rocketnow-kameiten.com" className="success-action-btn success-action-mail">
                  <span>✉️</span>
                  <div>
                    <div className="success-action-label">メールで資料を受け取る</div>
                    <div className="success-action-sub">support@rocketnow-kameiten.com</div>
                  </div>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">
                  店舗名 <span className="badge-required">必須</span>
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
                  担当者名 <span className="badge-required">必須</span>
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
                  電話番号 <span className="badge-required">必須</span>
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
                  メールアドレス <span className="badge-optional">任意</span>
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
                  お問い合わせ種別 <span className="badge-required">必須</span>
                </label>
                <select
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                >
                  <option value="">選択してください</option>
                  <option value="join">加盟のご相談・資料請求</option>
                  <option value="fee">手数料・料金について</option>
                  <option value="tablet">タブレット・端末について</option>
                  <option value="area">対応エリアについて</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">
                  お問い合わせ内容 <span className="badge-optional">任意</span>
                </label>
                <textarea
                  className="form-textarea"
                  placeholder="ご質問・ご要望などをご自由にお書きください"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-submit">
                🚀 送信する
              </button>
              <p className="form-note">
                ※ 個人情報は適切に管理し、第三者への提供は行いません。<br />
                しつこい営業電話は一切行いません。
              </p>
            </form>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="contact-footer">
        <span className="contact-footer-logo">🚀 Rocket Now</span>
        <div className="contact-footer-links">
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
