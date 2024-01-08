'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import PageHeader from '../../ui/PageHeader/PageHeader.js'
import 'public/assets/css/poa.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import aboutsdhImage from 'public/assets/images/services/poa-img.png'
import jpFlag from 'public/assets/images/flags/jpFlag.svg'
import paskitanFlag from 'public/assets/images/flags/paskitanFlag.svg'
import globalFlag from 'public/assets/images/flags/globalFlag.svg'
import Calltoaction from '../../ui/CalltoAction/calltoaction.js'

export default function PoaPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div>
			<PageHeader title='POA：Pakistan Offshore Augmentation' subtext='パキスタンオフショア開発' />
			<section className='aboutsdh-section'>
				<Container>
					<Row>
						<Col xs={{ order: 'last', span: 12 }} md={{ order: 'last', span: 12 }} lg={{ order: 'first', span: 6 }}>
							<div className='box-left'>
								<h2 className='aboutsdh-h2'>
									パキスタン発のオフショア開発
									<br />
									「お値段以上、POA」を本気で提供
								</h2>
								<p className='aboutsdh-p'>
									IDENBRIDでは自社のパキスタンオフィスにてもエンジニアを多数雇用しており、日本そしてグローバル企業の開発を日々支えています。
									<br />
									エンジニア採用を自社でする必要がなくなるだけでなく、自社のエンジニアと併用することで開発にスピード向上と事業規模拡大に大きく寄与します。
								</p>
								<div className='sdhcountry-flags'>
									<p className='flag-text'>事業展開エリア</p>
									<div className='sdh-country-flags'>
										<div className='flag jp'>
											<Image loading='lazy' src={jpFlag} alt='flagImage' />
										</div>
										<div className='flag pk'>
											<Image loading='lazy' src={paskitanFlag} alt='pakistanFlag' />
										</div>
										<div className='flag global'>
											<Image loading='lazy' src={globalFlag} alt='globalFlag' />
										</div>
									</div>
								</div>
							</div>
						</Col>
						<Col
							sm={12}
							xs={{ order: 'first', span: 12 }}
							md={{ order: 'first', span: 12 }}
							lg={{ order: 'last', span: 6 }}>
							<Image loading='lazy' className='aboutsdh-image' src={aboutsdhImage} alt='' />
						</Col>
					</Row>
				</Container>
			</section>

			<section className='idenbrid-developement-section'>
				<Container fluid className='p-0'>
					<Row>
						<Col md={12}>
							<div className='developement-above-sec'>
								<h2 className='dev-h2'>アイデンブリッドのこだわり</h2>
								<p className='dev-p'>
									日本ではベトナムのオフショア開発などが大きくマーケットシェアを獲得しており、パキスタンはまだ聞き馴染みが少ないも国かもしれません。
									<br />
									しかしアメリカやヨーロッパのトップ企業はパキスタン、インド企業から多くのエンジニアに仕事を外注しており、
									<br />
									IT事業支えるなくてはならない存在となっています。
								</p>
								<p className='dev-p mb-0'>
									このサービスでは日本人のブリッジをつけることができるだけでなく、
									<br />
									パキスタン市場にいる最高レイヤーのエンジニアをお客様に届けるため採用にも力を入れています。
								</p>
							</div>
						</Col>
					</Row>
				</Container>
				<Container fluid className='p-0'>
					<Row>
						<Col md={12} className='p-0'>
							<div className='silder-item'>
								<Swiper
									slidesPerView={1.6}
									spaceBetween={40}
									loop={true}
									autoplay={{
										delay: 2500,
										disableOnInteraction: false,
									}}
									modules={[Autoplay]}
									speed={1000}
									breakpoints={{
										320: {
											slidesPerView: 1.1,
											spaceBetween: 16,
										},
										640: {
											slidesPerView: 1.3,
											spaceBetween: 20,
										},
										768: {
											slidesPerView: 1.18,
											spaceBetween: 40,
										},
										1440: {
											slidesPerView: 1.6,
											spaceBetween: 40,
										},
										1800: {
											slidesPerView: 2.6,
											spaceBetween: 40,
										},
									}}
									className='devSlider'>
									<SwiperSlide>
										<div className='slider-box'>
											<div className='count-no'>01</div>
											<h3 className='slider-h3'>
												エンジニアの自社採用にSTOP
												<br />
												オフショア外注で開発に集中へ
											</h3>
											<p className='slider-p'>
												優秀なエンジニアの争奪戦はより激しくなっており、人材採用は大変になってきています。そんな採用にコストや時間をかけることなく、外注することで開発を止めることなく事業展開を行えます。
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='slider-box'>
											<div className='count-no'>02</div>
											<h3 className='slider-h3'>
												日本人PMの参画により
												<br />
												コミュニケーション不安を解消
											</h3>
											<p className='slider-p'>
												細かいニュアンスが伝わらないなどのフラストレーションを解消することはもちろんのこと、返信のスピードや打ち合わせの円滑さを徹底し、プロジェクト進行がスムーズにいく仕組みを導入しています。
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='slider-box'>
											<div className='count-no'>03</div>
											<h3 className='slider-h3'>
												仕事の進捗を可視化することで
												<br />
												プロジェクト管理を一歩先へ
											</h3>
											<p className='slider-p'>
												定例やチャットなどでの仕事の進捗報告だけではなく、プロジェクト管理ツールや開発ツールを用いて日々の仕事ぶりをお客様にシンクアップしています。
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='slider-box'>
											<div className='count-no'>04</div>
											<h3 className='slider-h3'>
												独自の仕組みにてオフショア
												<br />
												最高品質をご提供
											</h3>
											<p className='slider-p'>
												AWSを用いて、マイクロサービスアーキテクチャにてアプリ構築を行い、DevOps（CI/CD, Four
												Keys）を始めとした高い開発生産性を実現しています。またAI技術を用いることで開発の高品質を標準化することを実現しています。
											</p>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
			<section>
				<Calltoaction />
			</section>
		</div>
	)
}
