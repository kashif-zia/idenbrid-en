'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'public/assets/css/dsp.scss'
import aboutsdhImage from 'public/assets/images/services/dsp-service-page-img.png'
import jpFlag from 'public/assets/images/flags/jpFlag.svg'
import paskitanFlag from 'public/assets/images/flags/paskitanFlag.svg'
import globalFlag from 'public/assets/images/flags/globalFlag.svg'
import PageHeader from '../../ui/PageHeader/PageHeader.js'
import Calltoaction from '../../ui/CalltoAction/calltoaction.js'

export default function PoaPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div>
			<PageHeader title='DSP：Data Solution Program' subtext='受託開発サービス' />
			<section className='aboutsdh-section'>
				<Container>
					<Row>
						<Col xs={{ order: 'last', span: 12 }} md={{ order: 'last', span: 12 }} lg={{ order: 'first', span: 6 }}>
							<div className='box-left'>
								<h2 className='aboutsdh-h2'>スマートフォンアプリ、クラウドシステム、 システム開発、UIUX設計をする</h2>
								<p className='aboutsdh-p'>
									IDENBRIDではワンストップにて、ウェブシステムとスマホアプリ開発を得意とするソフトウェア開発会社です。{' '}
									<br />
									要件定義からシステム設計、UIUXデザインそして開発、またウェブからスマホそしてクラウドまで一社で完結開発致します。
								</p>
								<div className='sdhcountry-flags'>
									<p className='flag-text'>事業展開エリア</p>
									<div className='sdh-country-flags'>
										<div className='flag jp'>
											<Image loading='lazy' src={jpFlag} sizes='100vw, 100vh' alt='flagImage' />
										</div>
										<div className='flag pk'>
											<Image loading='lazy' src={paskitanFlag} sizes='100vw, 100vh' alt='pakistanFlag' />
										</div>
										<div className='flag global'>
											<Image loading='lazy' src={globalFlag} sizes='100vw, 100vh' alt='globalFlag' />
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
							<Image loading='lazy' className='aboutsdh-image' sizes='100vw, 100vh' src={aboutsdhImage} alt='' />
						</Col>
					</Row>
				</Container>
			</section>

			<section className='idenbrid-developement-section'>
				<Container fluid className='p-0'>
					<Row>
						<Col md={12}>
							<div className='developement-above-sec'>
								<h2 className='dev-h2'>アイデンブリッドの開発主義</h2>
								<p className='dev-p'>
									IDENBRIDではワンストップにて、ウェブシステムとスマホアプリ開発を得意とするソフトウェア開発会社です。
									要件定義からシステム設計、UIUXデザインそして開発、またウェブからスマホそしてクラウドまで一社で完結開発致します
								</p>
								<p className='dev-p mb-0'>
									要件定義、基本設計など他社が見切り発車しがちな開発の基礎となる設計・書類作成フェーズを丁寧に行い、お客様が実現されたいシステムとの乖離がないようにきちんと対応します。そして単純にソフトウェアの開発だけではなく、お客さまが何に困られているのかつまり「ユーザーペイン」をきちんとヒアリングし、その課題の解消を得意としています。
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
												AWSクラウド環境にて
												<br />
												最先端の開発から運用
											</h3>
											<p className='slider-p'>
												私たちはAWSのクラウド技術を中心に設計、開発、運用保守を行っており、従来型の開発と一線を画す技術にてお客様のシステムを支えます。
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='slider-box'>
											<div className='count-no'>02</div>
											<h3 className='slider-h3'>
												お客様のビジネスビジョンを
												<br />
												アプリ、システムにて改善解決
											</h3>
											<p className='slider-p'>
												お客様が抱えられている事業の課題や向き合おうとされている社会課題を乗り越えるためにITソルーションを提供するだけではなく、そのビジョンに寄り添います。
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='slider-box'>
											<div className='count-no'>03</div>
											<h3 className='slider-h3'>
												洗練されたモダンなUI
												<br />
												直感的にも使いやすいUXの実現
											</h3>
											<p className='slider-p'>
												デザインはユーザーとアプリ・システムの接点であり非常に大切です。当社では利用されるユーザーが使いやすいことはもちろんのこと、初めて利用される方にも高い利便性を実現したデザインをお届けします。
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='slider-box'>
											<div className='count-no'>04</div>
											<h3 className='slider-h3'>
												ご予算、品質、そして納期
												<br />
												お客様の優先事項に合わせた提案
											</h3>
											<p className='slider-p'>
												プロジェクトの費用そしてアプリケーションの品質、そしてリリースのための納期などお客様には譲れない要件があります。弊社ではお客様のニーズに合わせて、プロジェクトを成功させるためにユーザーファーストを徹底します。
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
