'use client'
import Image from 'next/image'
import Accordion from 'react-bootstrap/Accordion'
import PageHeader from '../ui/PageHeader/PageHeader'
import 'public/assets/css/careerfaq.scss'
import iconQA from 'public/assets/images/icon-Q.svg'
import iconA from 'public/assets/images/icon-A.svg'

export default function FAQ() {
	return (
		<>
			<section className='section-careerfaq-page'>
				{/* <div className='career-faq-bg'></div> */}
				<PageHeader title='FAQ' subtext='よくあるご質問' />
				<div className='container p-0'>
					<div className='faq-form-content'>
						<Accordion flush defaultActiveKey='0'>
							<Accordion.Item eventKey='0'>
								<Accordion.Header className='First-accordian'>
									<div className='header-content-wrapper'>
										<Image loading='lazy' src={iconQA} alt='icon-QA' className='icon' />
										SEH：スタジオ型開発ハブとはなんですか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												アイデンブリッドが進めている開発サービスの総称です。当社では主にシステムやアプリの受託開発を受けております。また企業様からのリソースをベースとしたラボ型開発も受けてつけております。これからの開発サービスを当社ではSDHと呼んでいます。
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='1'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										開発において社内にITに詳しい者がいませんが大丈夫でしょうか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												当社のお客様は8割以上が社内に詳しい方がいないので私たちを頼って頂いておりますのでご安心ください。{' '}
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='2'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										ウェブのUIUXデザインはなんのツールを使って行いますか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>当社では基本的にAdobe XDそしてFigmaを使っています。 </p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='3'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										UIUXの修正は何回まで可能でしょうか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>当社では初稿をお出しして最大その後2回（初稿を含めて3回）まで対応しております。 </p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='4'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										アプリやシステムの開発期間はどれくらいになりますか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>規模や案件ごとに異なりますが通常2-6ヶ月規模のものが多いです。 </p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='5'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										開発開始するために、クライアントが準備すべき必要なものは何がありますか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												お客様がどこまで担当して頂けるかによりますが、RFPや実現されたいページや機能の仕様など書類に落とし込まれたものがあると助かります。{' '}
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='6'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										開発中にはどのようにプロジェクト管理をしますか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												ソースコードのバージョンコントロールはGitHubにて、進捗チケット管理はAsanaにて行っています。またその他、仕様要件などはGoogle
												Spreadsheetを使用しています。{' '}
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='7'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										開発中などはどのように定期的にコミュニケーションをとれますか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												開発中は定例や不定期の打ち合わせを設定させて頂き活発にコニュニケーションを取っています。
												<br />
												Slack、Zoom、LINE、Skype、メール等様々なコミュニケーションツールに対応します。
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='8'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										完成したシステムやアプリをどのタイミング確認できますか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												今回のプロジェクトに企画書や資料をご用意いただければ、当社の開発チームの理解が深まり少しでも早く設計や開発を開始することができます。企画書や書類が一切ない場合でも、どのようなことをしたいのかを説明して頂けましたらそれをベースにシステムの要件定義をサポートさせて頂きます。{' '}
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='9'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										納品後の製品の保証がありますか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												請負契約の場合には改正民法の瑕疵担保責任、また準委任契約の場合には契約書に沿って対応します。{' '}
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='10'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										請負型契約において、途中の費用追加がないか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												仕様の変更・追加がない限り、途中の追加費用はありません。それでなくスコープ変更や要件追加などによって、実際に作業が発生した場合には追加業務に応じた費用分を請求します。
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='11'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										人月単価を教えてください。
									</div>
								</Accordion.Header>

								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												作業場所とエンジニアのレベルによって異なりますが、参考価格を掲載いたします。
												パキスタンにいるエンジニアは30万円台 日本にいるエンジニアは70万円〜140万円
												詳細はお問い合わせください。
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>

							<Accordion.Item eventKey='12'>
								<Accordion.Header>
									<div className='header-content-wrapper'>
										<Image src={iconQA} alt='icon-QA' className='icon' />
										支払いのタイミングはいつですか？
									</div>
								</Accordion.Header>
								<Accordion.Body>
									<div className='desc-box'>
										<div className='block-desc'>
											<Image src={iconA} alt='icon-QA' className='icon' />
											<p>
												当社では契約時に50%の前金、そして作業マイルストーンの75%が終わった際に25%の支払い、そしてUAT終了後の納品前に残りの25%のお支払いをお願いしております。
											</p>
										</div>
									</div>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
					</div>
				</div>
			</section>
		</>
	)
}
