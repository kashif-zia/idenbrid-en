'use client'
import { useEffect } from 'react'
import '../../../public/assets/css/aboutcompany.scss'
import PageHeader from '../../ui/PageHeader/PageHeader'
import CalltoAction from '../../ui/CalltoAction/calltoaction'
import AboutMenu from '../../ui/AboutMenu/aboutmenu'

export default function AboutCompany() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div>
			<section className='section-about-company-page'>
				<PageHeader title='Company' subtext='会社概要' />
				<div className='about-company-page-content'>
					<div className='container p-0'>
						<div className='about-company-content'>
							<div className='about-japan-company-content'>
								<div className='company-title'>
									<h1>日本法人</h1>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>社名</h3>
									</div>
									<div className='about-company-desc'>
										<h4>アイデンブリッド合同会社</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>設立</h3>
									</div>
									<div className='about-company-desc'>
										<h4>2023年8月1日</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>資本金</h3>
									</div>
									<div className='about-company-desc'>
										<h4>100万円</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>代表者</h3>
									</div>
									<div className='about-company-desc'>
										<h4>池田　飛鳥 / Aska Ikeda</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>住所</h3>
									</div>
									<div className='about-company-desc'>
										<h4>〒140-0011 東京都品川区東大井3丁目22番3-315</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>電話</h3>
									</div>
									<div className='about-company-desc'>
										<h4>050-1791-9216</h4>
									</div>
								</div>
							</div>

							<div className='about-pakistan-company-content'>
								<div className='company-title'>
									<h1>パキスタン本社</h1>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>社名</h3>
									</div>
									<div className='about-company-desc'>
										<h4>IDENBRID INC.</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>設立</h3>
									</div>
									<div className='about-company-desc'>
										<h4>2020年11月</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>資本金</h3>
									</div>
									<div className='about-company-desc'>
										<h4>100万円</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>代表者</h3>
									</div>
									<div className='about-company-desc'>
										<h4>中村　奏画 / Souga Nakamura</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>住所</h3>
									</div>
									<div className='about-company-desc'>
										<h4>B1F Building No.176 Y block, Street 11, DHA Phase 3, Lahore, Pakistan</h4>
									</div>
								</div>
								<div className='company-item'>
									<div className='about-company-label'>
										<h3>電話</h3>
									</div>
									<div className='about-company-desc'>
										<h4>(+92)3064041221</h4>
									</div>
								</div>
							</div>

							<div className='main-business-content'>
								<div className='company-title business-title'>
									<h1>主な事業内容</h1>
								</div>
								<div className='business-desc'>
									<ul>
										<li>
											{' '}
											DSP：Webシステム開発 / スマートフォン・タブレット向けアプリケーション開発 /
											クラウドコンピューティング・インフラ構築・運用 / システムITアーキテクチャ設計 /
											クリエイティブデザイン・UIUX設計 / システム及びサービスの運用保守サービス
										</li>
										<li> POA：IT開発オフショア人材提供</li>
										<li> DigitalPeer by IDENBRIDのアプリケーション企画・開発・運営</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<AboutMenu />
				<CalltoAction />
			</section>
		</div>
	)
}
