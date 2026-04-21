import LegalLayout from "../_components/LegalLayout";

export default function TokushohoPage() {
  return (
    <LegalLayout title="特定商取引法に基づく表記" lastUpdated="2025年1月1日">
      <div className="legal-section">
        <p>
          特定商取引法第11条に基づき、以下の事項を表記いたします。
          本サービスは個人事業主が運営しております。
        </p>
      </div>

      <div className="legal-section">
        <table className="legal-table">
          <tbody>
            <tr>
              <th>屋号</th>
              <td>Rocket Now（ロケットナウ）</td>
            </tr>
            <tr>
              <th>運営者氏名</th>
              <td>大村 悠</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                公表しておりません。<br />
                ご請求があった場合には、遅滞なく開示いたします。<br />
                開示をご希望の方は下記メールアドレスまでご連絡ください。
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>
                公表しておりません。<br />
                ご請求があった場合には、遅滞なく開示いたします。<br />
                まずは下記メールアドレスにてお問い合わせください。
              </td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>support@rocketnow-kameiten.com</td>
            </tr>
            <tr>
              <th>サービス名</th>
              <td>Rocket Now デリバリーサービス（加盟店向け）</td>
            </tr>
            <tr>
              <th>サービスの内容</th>
              <td>飲食店・レストラン向けのデリバリー仲介・配送サービス。注文管理システム（タブレット）の提供を含みます。</td>
            </tr>
            <tr>
              <th>料金</th>
              <td>
                ・初期費用：無料（0円）<br />
                ・月額費用：無料（0円）<br />
                ・手数料：注文金額の30%（注文成立時のみ発生）<br />
                ・タブレットレンタル料：無料（0円）
              </td>
            </tr>
            <tr>
              <th>支払方法</th>
              <td>銀行振込（月次精算）</td>
            </tr>
            <tr>
              <th>支払時期</th>
              <td>毎月末締め、翌月末払い</td>
            </tr>
            <tr>
              <th>サービス提供時期</th>
              <td>申込み承認後、最短1週間でサービス開始</td>
            </tr>
            <tr>
              <th>解約について</th>
              <td>
                解約費用：無料（0円）<br />
                解約のお申し出は、support@rocketnow-kameiten.comまたは担当者へご連絡ください。<br />
                解約申請後、所定の手続き完了をもって解約となります。
              </td>
            </tr>
            <tr>
              <th>返品・キャンセル</th>
              <td>サービスの性質上、注文成立後のキャンセルはできません。ただし、システム障害等による不具合が認められた場合は個別対応いたします。</td>
            </tr>
            <tr>
              <th>動作環境</th>
              <td>当社提供の専用タブレット端末（Android）。Wi-Fi環境が必要です。</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="legal-section">
        <h2>開示請求について</h2>
        <p>
          運営者氏名・所在地・電話番号の開示をご希望の方は、以下のメールアドレスまでご連絡ください。
          本人確認のうえ、遅滞なく（原則7日以内）開示いたします。
        </p>
        <ul>
          <li>メールアドレス：support@rocketnow-kameiten.com</li>
          <li>件名：「特定商取引法に基づく開示請求」とご記入ください</li>
        </ul>
      </div>
    </LegalLayout>
  );
}
