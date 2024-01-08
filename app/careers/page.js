'use client'
import { useCallback } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Accordion from 'react-bootstrap/Accordion'
import PageHeader from '../ui/PageHeader/PageHeader'
import 'public/assets/css/careerfaq.scss'

export default function Careerfaq() {
	const router = useRouter()
	const searchParams = useSearchParams()

	// Get a new searchParams string by merging the current
	// searchParams with a provided key/value pair
	const createQueryString = useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)

			return params.toString()
		},
		[searchParams]
	)

	return (
		<>
			<section className='section-careerfaq-page'>
				<PageHeader title='Careers' subtext='採用' />
				<div className='container p-0'>
					<div className='faq-form-content'>
						<Accordion defaultActiveKey='0' flush>
							<Accordion.Item eventKey='0'>
								<Accordion.Header className='First-accordian'>営業</Accordion.Header>
								<Accordion.Body className='career'>
									<div className='requirment-block-content bordr-bottom pt-0'>
										<div className='requirment-block-title'>
											<h6>募集要項</h6>
										</div>
										<div className='requirment-block-desc'>
											<p>
												【受託開発】システム開発エンジニア◆上流経験可／自社プロダクト開発※東証グロース上場／離職率1%台
											</p>
											<br />
											<p>
												【受託開発メインでの上流経験可／エンターテインメントソフトウェア開発サービス・ゲームサービスを展開／充実の研修教育制度あり・営業～エンジニアとたくさんの社員が参加／ワークライフバランスを重視／平均残業月17h／年休127日】
											</p>
											<br />
											<p>
												■業務概要：
												<br />
												受託開発部門にてお客様と共に新規サービスの仕様調整であったり、上流工程のシステム設計、開発など幅広く携わっていただきます。
												新規サービス以外にもすでにローンチしている既存サービスや自社プロダクトの追加開発であったり、運用保守も担当いただく場合もあります。
											</p>
											<br />
											<p>
												■当ポジションの魅力:
												<br />
												・お客様が求めることを単に提供するだけでなく、仕様や環境、技術動向に応じて適切な言語やプラットフォームを採用することを基本としているので、スキルアップにつながります。
												・受託開発がメインになりますので、チーム（プロジェクト単位）で仕事ができ、一体感を感じることができます。
												<br />
											</p>
											<p>
												■働く環境： <br />
												・当社は働き易い会社を目指して、休日休暇、各種福利厚生など社内環境を整備し、社員の産休、育休取得、復帰を応援しています。その成果もあり、社員の産育休取得率、復帰率は100％です。働き方改革を推進している会社で、スキルアップをしながらワークライフバランスを目指したい方にはマッチする環境です。
												・残業…月平均：17時間※各プロジェクト先によって異なります。
											</p>
											<br />
											<p className='margin-btm'>
												■当社について：
												<br />
												当社は各取引先に対して、デジタル人材事業、受託開発事業、コンテンツプロパティ事業を展開しています。デジタル人材事業では、
												登録型派遣会社とは異なり、タレント性や独独スキルを持った人材を柔軟に供給でき、競合他社が少ないです。受託開発事業では、
												EPARKなど主に大規模プラットフォームに関わる各種開発や保守を強みとし、安定的な稼働実績、
												ナショナルクライアントから直接取引しています。コンテンツプロパティ事業では、100タイトル超のゲームタイトルやキャラクターに関するIPを保有、
												利用したゲームサービスやライセンスサービスが強みです。
											</p>
										</div>
									</div>
									<div className='requirment-block-content bordr-bottom'>
										<div className='requirment-block-title'>
											<h6>対象となる方</h6>
										</div>
										<div className='requirment-block-desc'>
											<p>学歴不問</p>
											<br />
											<p>
												＜応募資格/応募条件＞ <br />
												■必須条件：
												<br />
												・上流工程のシステム設計経験3年以上 <br />
												・Web系、オープン系、インフラ系業務システム開発経験3年以上 <br />
												※PHP、Python、Go、Vue.jsのいずれかの経験
											</p>
											<br />
											<p className='margin-btm'>
												■歓迎条件： <br />
												AWSやGCPを使った経験
											</p>
										</div>
									</div>
									<div className='requirment-block-content bordr-bottom'>
										<div className='requirment-block-title'>
											<h6>勤務地 </h6>
										</div>
										<div className='requirment-block-desc'>
											<p>
												＜勤務地詳細＞ <br />
												本社 <br />
												住所：東京都豊島区西池袋1-11-1 メトロポリタンプラザビル21F <br />
												勤務地最寄駅：JR各線／池袋（メトロポリタン出口）駅 <br />
												受動喫煙対策：屋内喫煙可能場所あり
											</p>
											<br />
											<p>
												＜転勤＞ <br />
												無 <br />
												転居を伴う会社本位の転勤なし
											</p>
											<br />
											<p>
												＜在宅勤務・リモートワーク＞ <br />
												相談可（在宅）
											</p>
											<br />
											<p className='margin-btm'>
												＜オンライン面接＞ <br />可
											</p>
										</div>
									</div>
									<div className='requirment-block-content bordr-bottom'>
										<div className='requirment-block-title'>
											<h6>雇用形態</h6>
										</div>
										<div className='requirment-block-desc'>
											<p>正社員</p>
											<br />
											<p>
												＜雇用形態補足＞ <br />
												期間の定め：無 <br />
												正社員または契約社員（2～6ヶ月毎の更新、正社員登用の可能性あり）※希望と経験に応じて内定時に決定
											</p>
											<br />
											<p className='margin-btm'>
												＜試用期間＞ <br />
												6ヶ月 <br />
												正社員の場合（期間中の給与・待遇に変更はありません）
											</p>
										</div>
									</div>
									<div className='requirment-block-content bordr-bottom'>
										<div className='requirment-block-title'>
											<h6>給与</h6>
										</div>
										<div className='requirment-block-desc'>
											<p>
												＜予定年収＞ <br />
												500万円～700万円
											</p>
											<br />
											<p>
												＜賃金形態＞ <br />
												月給制
											</p>
											<br />
											<p>
												＜賃金内訳＞ <br />
												月額（基本給）：320,000円～ <br />
											</p>
											<br />
											<p>
												＜月給＞ <br />
												320,000円～
											</p>
											<br />
											<p>
												＜昇給有無＞ <br />有
											</p>
											<br />
											<p>
												＜残業手当＞ <br />有
											</p>
											<br />
											<p>
												＜給与補足＞ <br />
												※前職および経験・能力を優遇・考慮し、当社規定により決定します。 <br />
												■給与改定：年1回（5月）。 <br />
												■賞与：正社員のみ、年2回（7月、12月）※試用期間終了後から査定開始 <br />
											</p>
											<br />
											<p className='margin-btm'>
												賃金はあくまでも目安の金額であり、選考を通じて上下する可能性があります。
												<br />
												月給(月額)は固定手当を含めた表記です。
											</p>
										</div>
									</div>
									<div className='requirment-block-content bordr-bottom'>
										<div className='requirment-block-title'>
											<h6>待遇.福利厚生</h6>
										</div>
										<div className='requirment-block-desc'>
											<p>
												＜予定年収＞ <br />
												500万円～700万円
											</p>
											<br />
											<p>
												＜賃金形態＞ <br />
												月給制
											</p>
											<br />
											<p>
												＜賃金内訳＞ <br />
												月額（基本給）：320,000円～ <br />
											</p>
											<br />
											<p>
												＜月給＞ <br />
												320,000円～
											</p>
											<br />
											<p>
												＜昇給有無＞ <br />有
											</p>
											<br />
											<p>
												＜残業手当＞ <br />有
											</p>
											<br />
											<p>
												＜給与補足＞ <br />
												※前職および経験・能力を優遇・考慮し、当社規定により決定します。 <br />
												■給与改定：年1回（5月）。 <br />
												■賞与：正社員のみ、年2回（7月、12月）※試用期間終了後から査定開始 <br />
											</p>
											<br />
											<p className='margin-btm'>
												賃金はあくまでも目安の金額であり、選考を通じて上下する可能性があります。
												<br />
												月給(月額)は固定手当を含めた表記です。
											</p>
										</div>
									</div>
									<div className='requirment-block-content bordr-bottom'>
										<div className='requirment-block-title'>
											<h6>休日・休暇</h6>
										</div>
										<div className='requirment-block-desc'>
											<p>
												完全週休2日制（休日は土日祝日） <br />
												年間有給休暇10日～20日（下限日数は、入社半年経過後の付与日数となります）
												<br />
												年間休日日数127日
											</p>
											<br />
											<p className='margin-btm'>
												年末年始休暇、夏季休暇、慶弔休暇、有給休暇、産前・産後休暇、育児休暇（復帰率100％）、介護休{' '}
												<br />
												暇、設立記念日（5月6日）
											</p>
										</div>
									</div>
									<div className='faq-apply-button bordr-bottom border-0'>
										<button
											type='faq-apply-btn'
											onClick={() => router.push('careers/apply?' + createQueryString('type', '営業'))}>
											応募する
										</button>
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
