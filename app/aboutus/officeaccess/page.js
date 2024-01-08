'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import 'public/assets/css/officeaccess.scss';
import PageHeader from '../../ui/PageHeader/PageHeader.js';
import AboutMenu from '../../ui/AboutMenu/aboutmenu.js';
import Calltoaction from '../../ui/CalltoAction/calltoaction.js';
import officeimage01 from 'public/assets/images/office/office-01.png';
import officeimage02 from 'public/assets/images/office/office-02.png';
import officeimage03 from 'public/assets/images/office/office-03.png';
import officeimage04 from 'public/assets/images/office/office-04.png';
import officeimage05 from 'public/assets/images/office/office-05.png';
import officeimage06 from 'public/assets/images/office/office-06.png';
import officeimage07 from 'public/assets/images/office/office-07.png';
import officeimage08 from 'public/assets/images/office/office-08.png';
import officeimage09 from 'public/assets/images/office/office-09.png';

export default function OfficeAccess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeader title='Office & Access' subtext='オフィス&アクセス' />
      <section className='office-environment-section'>
        <Container>
          <Row>
            <Col md={6} lg={6}>
              <div className='office-environment-section-content'>
                <p className='office-subtext'>大切なのは、チームが働きたい環境構築</p>
                <h2 className='office-h2'>Office Environment</h2>
                <div className='office-text'>
                  <p>
                    私たちIDENBRID
                    INC.は、パキスタンのラホール及び日本の東京にオフィス拠点を構えるグローバルIT企業です。
                  </p>
                  <p>
                    当社はオフィスでの仕事を推奨しており、チームが一体となって仕事に取り組み、コミュニケーションを活発にとる事によって1人では解決できないような課題を全社一体となり乗り越えています。
                  </p>
                  <p>
                    そのためスタッフが心地よく仕事できるスペースづくりを大切にしており、チーム規模の拡張に合わせて日々オフィスも進化しています。
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row>
            <Col md={12} lg={12} className='p-0'>
              <Swiper
                spaceBetween={32}
                speed={1000}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  320: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                  },
                  1600: {
                    slidesPerView: 2.5,
                    spaceBetween: 50,
                  },
                }}
                // pagination={{
                //   clickable: true,
                // }}

                modules={[Autoplay]}
                className='mySwiper'
              >
                <SwiperSlide>
                  <Image loading='lazy' className='office-img' src={officeimage01} alt='officeimage'  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image loading='lazy' className='office-img' src={officeimage02} alt='officeimage'  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image loading='lazy' className='office-img' src={officeimage03} alt='officeimage'  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image loading='lazy' className='office-img' src={officeimage04} alt='officeimage' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image loading='lazy' className='office-img' src={officeimage05} alt='officeimage' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image loading='lazy' className='office-img' src={officeimage06} alt='officeimage' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image loading='lazy' className='office-img' src={officeimage07} alt='officeimage' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image loading='lazy' className='office-img' src={officeimage08} alt='officeimage' />
                </SwiperSlide>
                <SwiperSlide>
                  <Image loading='lazy' className='office-img' src={officeimage09} alt='officeimage' />
                </SwiperSlide>
              </Swiper>
            </Col>
          </Row>
        </Container>
        <Container className='officemap-area'>
          <Row>
            <Col lg={6}>
              <div className='office-environment-section-content'>
                <p className='access-subtext'>アクセス</p>
                <h2 className='access-h2'>Access</h2>
                <div className='access-p'>
                  <p className='point13'>パキスタン本社</p>
                  <p className='access-address'>
                  〒54000
                    <br />
                    B1F, 176 Y-Block, DHA Phase 3, Lahore
                  </p>
                  <p className='access-tel'>
                    TEL : <a href='tel:+923064041221'> (+92)3064041221</a>
                  </p>
                  <p className='access-mail'>
                    MAIL :<a href='mailto:contact@idenbrid.jp'> contact@idenbrid.jp</a>
                  </p>
                  <p className='access-info'>
                  ラホール空港より車にて15分
                    <br />
                    グルバーグ市内より車にて20分
                  </p>

                  <p className='access-map'>
                   <a href='https://www.google.com/maps/place/IDENBRID+INC.+%2F+%E5%90%88%E5%90%8C%E4%BC%9A%E7%A4%BE%E3%82%A2%E3%82%A4%E3%83%87%E3%83%B3%E3%83%96%E3%83%AA%E3%83%83%E3%83%89,+Basement+1+Floor+176,+DHA+Y-block+Lahore,+54000,+Pakistan/@31.471922,74.3773809,15z/data=!4m6!3m5!1s0x391907530d966bf3:0x99ab6b175fc81d7d!8m2!3d31.471922!4d74.3773809!16s%2Fg%2F11r_xrnc9g'>
                    GOOGLE MAP
                   </a>


                  </p>
                  <p className='point13'>日本支社</p>
           
                  <p className='access-address'>
                    〒140-0011
                    <br />
                    東京都品川区東大井3-22-3-315
                  </p>

                  <p className='access-info'>
                    JR大井町駅より徒歩5分
                    <br />
                    羽田空港より20分
                  </p>
                </div>
              </div>
            </Col>

            <Col lg={6}>
              <div className='office-environment-section-content'>
                <iframe
                  title='office Map'
                  src= "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.890468767711!2d74.37413857636987!3d31.472199074236123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907530d966bf3%3A0x99ab6b175fc81d7d!2zSURFTkJSSUQgSU5DLiAvIOWQiOWQjOS8muekvuOCouOCpOODh-ODs-ODluODquODg-ODiQ!5e0!3m2!1sen!2s!4v1702371842383!5m2!1sen!2s"
                  width='100%'
                  height='336'
                  style={{ border: 0 }}
                  allowFullScreen=''
                  aria-hidden='false'
                  tabIndex='0'
                  className='map-iframe'
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <AboutMenu />
      <Calltoaction />
    </div>
  );
}
