'use client';
import { useEffect, React } from 'react';
import 'public/assets/css/privacy.scss';
import PageHeader from '../ui/PageHeader/PageHeader';

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className='section-privacy-page'>
        {/* <PageHeader title='Privacy Policy' subtext='プライバシーポリシー' /> */}
        <PageHeader title='Privacy Policy' subtext='プライバシー' subTitle='ポリシー' />
        <div className='container p-0'>
          <div className='privacy-form-content'>
            <div className='privacy-desc'>
              <p>
                合同会社アイデンブリッド及びIDENBRID
                INC.（以下「当社」といいます。）は、個人情報の重要性を認識し、個人情報の保護のために、以下の方針を定めて運用します。
              </p>
            </div>
            <div className='privacy-title'>
              <h6>1.適用範囲</h6>
            </div>
            <div className='privacy-desc'>
              <p>
                このプライバシーポリシーは、当社がお客様の個人情報を取得・利用する場合に適用されます。なお、当社が個人情報の取得等をする際に、個人情報の取り扱いについて、別途お知らせする場合には、その内容が優先的に適用されます。
              </p>
            </div>
            <div className='privacy-title'>
              <h6>2.法令等の遵守</h6>
            </div>
            <div className='privacy-desc'>
              <p>
                当社は、個人情報の保護に関する法律、その他の関連する法令及び行政庁が定めるガイドラインを遵守し、個人情報を適正に取り扱います。
              </p>
            </div>
            <div className='privacy-title'>
              <h6>3.個人情報の取得</h6>
            </div>
            <div className='privacy-desc list-heading'>
              <p>当社は、次の場合に、適法かつ公正に、個人情報を取得します。 </p>
            </div>
            <div className='privacy-desc-list'>
              <ul className='mb-0'>
                <li className='privacy-list-item'>お客様から書面、電子データ等により、直接個人情報を取得する場合</li>

                <li className='privacy-list-item'>
                  お客様による当社Webサイト、サービス、広告等の閲覧・利用等に伴う情報を自動的に取得する場合
                </li>

                <li className='privacy-list-item'>お客様の同意を得た第三者から提供を受ける場合</li>
                <li className='privacy-list-item'>その他、適法かつ公正な手段による場合</li>
              </ul>
            </div>
            <div className='privacy-title'>
              <h6>4.利用目的</h6>
            </div>
            <div className='privacy-desc'>
              <p className='mb-2'>
                <strong>4-1.</strong>{' '}
                当社は、個人情報の利用目的がお客さまにとって自明である場合を除いて、利用目的を公表または通知します。
                <br />
                <strong>4-2.</strong> 当社は、関連法令に定める場合を除き、個人情報を次の目的のために利用します。
              </p>
              <div className='privacy-desc-list'>
                <ul className='mb-0'>
                  <li className='privacy-list-item'>
                    当社及び当社の関係会社・提携先等（以下、あわせて「当社等」といいます。）の商品・サービスの提供、運営
                  </li>

                  <li className='privacy-list-item'>当社等の商品・サービス等に関する情報提供</li>

                  <li className='privacy-list-item'>当社等の商品・サービスの開発、改善、マーケティング</li>
                  <li className='privacy-list-item'>問い合わせへの対応</li>
                  <li className='privacy-list-item'>その他、当社が必要に応じて別途通知する目的</li>
                </ul>
              </div>
            </div>
            <div className='privacy-title'>
              <h6>5.第三者への提供制限</h6>
            </div>
            <div className='privacy-desc list-heading'>
              <p>当社は、次の場合を除き、お客様から取得した個人情報を第三者に提供しません。 </p>
            </div>
            <div className='privacy-desc-list'>
              <ul className='mb-0'>
                <li className='privacy-list-item'>お客様本人が同意した場合</li>

                <li className='privacy-list-item'>
                  生命、身体、財産の保護のために必要で、お客様本人の同意を得ることが困難な場合
                </li>

                <li className='privacy-list-item'>当社に対し守秘義務を負う業務委託先に提供する場合</li>
                <li className='privacy-list-item'>当社の関係会社・提携先等と共同利用する場合</li>
                <li className='privacy-list-item'>
                  公的機関から法令に基づいて提供を求められた場合、その他、法令に定める場合
                </li>
                <li className='privacy-list-item'>統計情報等、特定の個人を識別できない形式に加工して提供する場合</li>
              </ul>
            </div>
            <div className='privacy-title'>
              <h6>6.管理体制</h6>
            </div>
            <div className='privacy-desc list-heading'>
              <p>
                <strong>6-1.</strong> 当社は、個人情報を適切に管理するために、次のセキュリティ対策を実施します。{' '}
              </p>
            </div>
            <div className='privacy-desc-list'>
              <ul className='mb-0'>
                <li className='privacy-list-item'>
                  個人情報の管理責任者の設置、管理方法等に関する内規の制定とその遵守体制の整備
                </li>

                <li className='privacy-list-item'>
                  個人情報へのアクセス制限、個人情報を保存する媒体の盗難・紛失等の防止措置等、個人情報への不正アクセス、個人情報の漏えい、滅失、き損等を防止するための合理的な対策
                </li>

                <li className='privacy-list-item'>従業員等に対する個人情報保護に関する研修の実施</li>
                <li className='privacy-list-item'>定期的な点検</li>
              </ul>
              <div className='privacy-desc'>
                <p>
                  <strong>6-2.</strong>{' '}
                  当社は、保有する必要のなくなった個人情報については、遅滞なく削除するように努めます。
                </p>
              </div>
            </div>
            <div className='privacy-title'>
              <h6>7.プライバシーポリシーの見直し</h6>
            </div>
            <div className='privacy-desc'>
              <p>当社は、社会情勢・経営環境などを変化を踏まえて、随時プライバシーポリシーを見直します。</p>
            </div>
            <div className='footer-copyright'>
              <p>最終更新日：2023年11月1日</p>
              <p>合同会社アイデンブリッド　代表社員　池田飛鳥</p>
              <p>IDENBRID INC. CEO 中村奏画</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
