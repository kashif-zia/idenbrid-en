'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'public/assets/css/digitalpeer.scss'
import Calltoaction from '../ui/CalltoAction/calltoaction'
import carbanner from 'public/assets/images/inhouseproducts/carimport.jpg'
import itorchard from 'public/assets/images/inhouseproducts/itorchard.jpg'
import realestate from 'public/assets/images/inhouseproducts/realestate.jpg'
import logo1 from 'public/assets/images/digitalPeerIcons/logo1.svg'
import logo2 from 'public/assets/images/digitalPeerIcons/logo2.svg'
import logo3 from 'public/assets/images/digitalPeerIcons/logo3.svg'
import logo4 from 'public/assets/images/digitalPeerIcons/logo4.svg'
import logo5 from 'public/assets/images/digitalPeerIcons/logo5.svg'
import logo6 from 'public/assets/images/digitalPeerIcons/logo6.svg'
import logo7 from 'public/assets/images/digitalPeerIcons/logo7.svg'
import logo8 from 'public/assets/images/digitalPeerIcons/logo8.svg'
import logo9 from 'public/assets/images/digitalPeerIcons/logo9.svg'
import logo10 from 'public/assets/images/digitalPeerIcons/logo10.svg'
import logo11 from 'public/assets/images/digitalPeerIcons/logo11.svg'

export default function DigitalPeerByIdenbrid() {
	return (
		<div>
			<div className='sdh-bg'></div>
			<section className='idenbrid-digitalpeer-section'>
				<div className='sdh-bg'></div>
				<div className='sdh-bg-im'></div>
				<div className='silder-item'>
					<Swiper
						slidesPerView={9}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						modules={[Autoplay]}
						speed={1000}
						breakpoints={{
							320: {
								slidesPerView: 4,
								spaceBetween: 16,
							},
							375: {
								slidesPerView: 5,
								spaceBetween: 16,
							},
							640: {
								slidesPerView: 6,
								spaceBetween: 16,
							},
							768: {
								slidesPerView: 8,
								spaceBetween: 32,
							},
							1440: {
								slidesPerView: 10,
								spaceBetween: 32,
							},
							1800: {
								slidesPerView: 10,
								spaceBetween: 32,
							},
							2560: {
								slidesPerView: 10,
								spaceBetween: 32,
							},
						}}
						className='devSlider'>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo1} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo2} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo3} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo4} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo5} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo6} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo7} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo8} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo9} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo10} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='slider-box'>
								<Image loading='lazy' src={logo11} alt='logo' className='icon-logo' />
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className='container '>
					<div className='digitalpeer-above-sec'>
						<h2 className='heading-pc'>
							DigitalPeer<span> by IDENBRID</span>
						</h2>
						<h2 className='heading-sp'>
							DigitalPeer
							<br/>
							<span> by IDENBRID</span>
						</h2>
						<div className='mbl-connect'>
							<h4>Connect Everywhere <br/>with our IT Ecosystem</h4>
						</div>
						<div>
							<h4 className='desktop-connect'>Connect Everywhere with our IT Ecosystem</h4>
							<h5>パキスタンのITサービスインフラをIDENBRIDが構築します</h5>
						</div>
						
						<p className='dev-p'>
							IDENBRIDはパキスタンに住む人々の生活をアプリやシステムなどのITソリューションによってより便利にすると共にIDENBRIDが提供するID一つあればどのようなサービスもシームレスに享受できる経済圏の構築を目指しています。企業にとっては当社のプラットフォームを利用する事でより多くの人々にサービスを安価に提供でき、ユーザーからすると安心できるサービスを納得できるレベルにて受けることができます。人々の生活になくてはならないサービスを「Connect
							Everywhere」を合言葉に実現していきます。
						</p>
					</div>
				</div>
				<div className='products-section'>
					<div className='container'>
						{/* <div className='products'> */}
						<div className='digtal-peer-products'>
							<div className='row'>
								<div className='col-12 col-md-12 col-lg-7'>
									<Image loading='lazy' src={carbanner} alt='carbanner' className='icon' />
								</div>
								<div className='col-12 col-md-12 col-lg-5'>
									<div className='product-desc'>
										<div>
											<h3>Car Import App</h3>
											<h5>車輸入アプリ</h5>
										</div>
										<p>
											パキスタンでも大変人気のある日本の中古車を輸入するためには現在、ディーラーによるオークションに参加することが一般的です。しかし当社では日本の中古車在庫をアプリ上で可視化することによって、誰でも安心して車の購入ができるプラットフォームを構築しました。アプリを通じて日本の販売したいお店と購入したいパキスタンのお客様を「Connect」します。
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* </div> */}

						<div className='digtal-peer-products'>
							<div className='row'>
								<div className='col-12 col-md-12 col-lg-7'>
									<Image loading='lazy' src={realestate} alt='realestate' className='icon' />
								</div>
								<div className='col-12 col-md-12 col-lg-5'>
									<div className='product-desc'>
										<div>
											<h3>Real Estate</h3>
											<h5>不動産売買ポータル</h5>
										</div>
										<p>
											当社は、パキスタン全域の賃貸住宅、分譲住宅、商業施設の情報を提供する総合的な不動産ポータルサイトを開発しています。当サイトは、利便性と包括性を重視しており、様々な不動産ニーズに応えるための豊富なリスティングを提供しています。多様な物件情報として最新の賃貸物件から高級分譲住宅また戦略的な立地における投資を目的とした建物や商業施設まで幅広く掲載しています。また高度な検索機能により探したい情報を簡単に見つけられる工夫がされているのみでなく、専門家によるサポートや市場動向などのデータも取り入れ、ユーザー間のマッチングを促進します。
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='digtal-peer-products last-product'>
							<div className='row'>
								<div className='col-12 col-md-12 col-lg-7'>
									<Image loading='lazy' src={itorchard} alt='itorchard' className='icon' />
								</div>
								<div className='col-12 col-md-12 col-lg-5'>
									<div className='product-desc'>
										<div>
											<h3>IT Orchard</h3>
											<h5>南アジアIT開発ポータル</h5>
										</div>
										<p>
											当社は、IT
											Orchardに南アジアにおける多数のIT企業を一堂に集め掲載することで包括的なキュレーションサイトを構築しています。このプラットフォームは、地域のIT業界の多様性とイノベーションを反映し、各企業のビジネス展開と顧客基盤の拡大を目指しています。当サイトでは厳選された基準に基づき選ばれ、それぞれの専門分野における最先端の技術とサービス例えばソフトウェア開発、システム統合、クラウドソリューション、モバイルアプリケーション、AI技術、データ分析といったサービスを提供する企業をリスティングしています。ユーザーは、特定のニーズやプロジェクト要件に応じて、最適なITソリューションプロバイダーを簡単に検索し、見つけることができ当社ではマッチングの加速のためより多くの情報をユーザーへ提供することでプラットフォームの価値を高めていきます。{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<Calltoaction />
			</section>
		</div>
	)
}
