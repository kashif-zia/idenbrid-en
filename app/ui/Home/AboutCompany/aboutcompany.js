import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import Image from 'next/image'
import 'swiper/css'
import './aboutcompany.scss'

import ceoimage from '../../../../public/assets/images/memebers/ceosouga.png'
import cdoimage from '../../../../public/assets/images/memebers/cdo-image.png'
import profileimage from '../../../../public/assets/images/memebers/profile-image.png'
import profileimage2 from '../../../../public/assets/images/memebers/profileimage2.png'
import Hamzaishfaq from '../../../../public/assets/images/memebers/devhamza.png'
import Azeem from '../../../../public/assets/images/memebers/devazeem.png'
import Faizan from '../../../../public/assets/images/memebers/bdfaizan.png'
import Arshia from '../../../../public/assets/images/memebers/hrarshia.png'
import Snobar from '../../../../public/assets/images/memebers/hrsnobar.png'
import Hira from '../../../../public/assets/images/memebers/bdhira.png'
import Bushra from '../../../../public/assets/images/memebers/hrbushra.png'
import Shan from '../../../../public/assets/images/memebers/officeshan.png'
import Shahnwaz from '../../../../public/assets/images/memebers/officeshahnawaz.png'
import Ahmad from '../../../../public/assets/images/memebers/pmahmad.png'
import Kashif from '../../../../public/assets/images/memebers/devkashif.png'
import Waleed from '../../../../public/assets/images/memebers/waleed.png'
import AhmadZahid from '../../../../public/assets/images/memebers/Ahmad.png'
import hmzaSiddique from '../../../../public/assets/images/memebers/hmzaSiddique.png'
import Zain from '../../../../public/assets/images/memebers/Zain.png'

export default function aboutcompany() {
	return (
		<section className='aboutcompany-section'>
			<Container>
				<Row>
					<Col xs={12} sm={12} md={4} lg={5}>
						<span className='about-subtext'>IDENBRIDについて</span>
						<h2 className='about-h2'>About IDENBRID</h2>
						<div className='divider'></div>
						<p className='about-text'>
							IDENBRIDについての企業情報、 <br />
							方針・取り組みなどを掲載しています。
						</p>
						<Link href='/aboutus' className='about-viewbtn'>
							View More
						</Link>
					</Col>

					<Col xs={12} sm={12} md={8} lg={7}>
						<div className='top-cards'>
							<Card className='custom-card-left'>
								<Link href='/aboutus/message'>
									<Card.Img
										loading='lazy'
										variant='top'
										src='/assets/images/iden_0065.png'
										className='cardImage-left'
										alt='About Company'
									/>
									<Card.Body>
										<Card.Title>トップメッセージ</Card.Title>
										<Card.Text>当社のめざす経営方針をお伝えします</Card.Text>
									</Card.Body>
								</Link>
							</Card>
							<Card className='custom-card-right'>
								<Link href='/aboutus/business'>
									<Card.Img
										loading='lazy'
										variant='top'
										src='/assets/images/office-access.png'
										className='cardImage-right'
										alt='About Company'
									/>
									<Card.Body>
										<Card.Title>経営理念</Card.Title>
										<Card.Text>IDENBRIDの「ミッション」「ビジョン」「バリュー」をご紹介します。</Card.Text>
									</Card.Body>
								</Link>
							</Card>
						</div>
						<div className='bottom-cards'>
							<Card className='bg-dark text-white border-0 bottom-card'>
								<Link href='/aboutus/company'>
									<Card.Img
										loading='lazy'
										src='/assets/images/company-profile.png'
										alt='Card image'
										className='company-img'
										style={{
											width: '100%',
											height: '100%',
										}}
									/>
									<Card.ImgOverlay className='company-img-overlay'>
										<Card.Title className='imageover-text'>会社概要</Card.Title>
									</Card.ImgOverlay>
								</Link>
							</Card>
							<Card className='bg-dark text-white border-0 bottom-card'>
								<Link href='/aboutus/member'>
									<Card.Img
										loading='lazy'
										src='/assets/images/member.png'
										style={{
											width: '100%',
											height: '100%',
										}}
										alt='Card image'
										className='member-img'
									/>
									<Card.ImgOverlay className='member-img-overlay'>
										<Card.Title className='imageover-text'>メンバー</Card.Title>
									</Card.ImgOverlay>
								</Link>
							</Card>
							<Card className='bg-dark text-white border-0 bottom-card'>
								<Link href='/aboutus/officeaccess'>
									<Card.Img
										loading='lazy'
										src='/assets/images/office-access-1.png'
										style={{
											width: '100%',
											height: '100%',
										}}
										alt='Card image'
										className='office-img'
									/>
									<Card.ImgOverlay className='office-img-overlay'>
										<Card.Title className='imageover-text'>オフィス&アクセス</Card.Title>
									</Card.ImgOverlay>
								</Link>
							</Card>
						</div>
					</Col>
				</Row>
			</Container>
			<div className='member-slider-section'>
				<Container>
					<Row>
						<Col md={12}>
							<div className='member-heading-box'>
								<div className='member-heading'>
									<h2 className='member-h2'>IDENBRID Member</h2>
									<p className='member-subtext'>メンバー紹介</p>
								</div>
								<div className='viewmore-lightbtn'>
									<Link href='/aboutus/member'>
										View More
										<ReactSVG className='right-arrow' src='/assets/images/right-arrow-icon.svg' alt='iconimage' />
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
				<Container fluid className='slider-container'>
					<Row>
						<Col>
							<Swiper
								spaceBetween={0}
								loop={true}
								speed={1000}
								autoplay={{
									delay: 2500,
									disableOnInteraction: false,
								}}
								breakpoints={{
									320: {
										slidesPerView: 2.4,
										spaceBetween: 0,
									},
									640: {
										slidesPerView: 3.5,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 3.5,
										spaceBetween: 20,
									},
									1024: {
										slidesPerView: 4.2,
										spaceBetween: 10,
									},
									1600: {
										slidesPerView: 5.2,
										spaceBetween: 10,
									},
								}}
								// pagination={{
								//   clickable: true,
								// }}

								modules={[Autoplay]}
								className='mySwiper'>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={ceoimage}
											alt='memberimage'
											// quality={100}

											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={cdoimage}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={profileimage2}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={profileimage}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Ahmad}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Bushra}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Arshia}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Waleed}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Hira}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Kashif}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={hmzaSiddique}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Hamzaishfaq}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Zain}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={AhmadZahid}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Faizan}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Azeem}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Snobar}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Shan}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
								<SwiperSlide>
									<Link href='/aboutus/member' className='member-img-link'>
										<Image
											loading='lazy'
											className='member-img'
											src={Shahnwaz}
											alt='memberimage'
											style={{ width: '100%', height: 'auto' }}
										/>
									</Link>
								</SwiperSlide>
							</Swiper>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	)
}
