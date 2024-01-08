'use client'
import { useEffect } from 'react'
import Image from 'next/image.js'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import PageHeader from '../../ui/PageHeader/PageHeader.js'
import 'public/assets/css/company.scss'
import AboutMenu from '../../ui/AboutMenu/aboutmenu.js'
import Calltoaction from '../../ui/CalltoAction/calltoaction.js'
import policy from 'public/assets/images/aboutpage/image_about_philosophy.svg'
import aboutImage01 from 'public/assets/images/image-01.png'
import aboutImage02 from 'public/assets/images/image-02.png'
import aboutImage03 from 'public/assets/images/image-03.png'

export default function CompanyPage() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
    <div>
      {/* <div className='aboutcomapany-bgimg'></div> */}
      <PageHeader title='About' subtext='経営理念' />
      <section id='company' className='about-company-section'>
        <div className='aboutcompany-box'>
          <Container>
            <Row>
              <Col xs={{order: 'last', span: 12}} md={{order: 'last', span: 12}} lg={{order: 'first', span: 6}}>
                <h2 className='about-company-h2'>
                  パキスタンと日本から世界一の
                  <br />
                  ソフトウェア企業を目指すグローバルITベンチャー
                </h2>
                <div className='about-company-text'>
                  <p>私たちアイデンブリッドは東京とパキスタンのラホールを拠点とするグローバルIT企業です。</p>
                  <p>
                    社名は「Identity」と「Hybrid」を組み合わせて名付けられたもので、世界中から求められる企業となるため優秀な国際色豊かな人材のそれぞれの良さを引き出し、そして共存していくという意味が込められています。
                  </p>
                  <p className='mb-0'>
                    日本人が海外の地で創業した会社がITを通じて世界中の人々に価値を提供し、日々直線する課題を当社のソリューションを持って改善することが大きな目標です。
                  </p>
                </div>
              </Col>
              <Col xs={{order: 'first', span: 12}} md={{order: 'first', span: 12}} lg={{order: 'first', span: 6}}>
                <Image loading='lazy' className='policy-img' height='auto' src={policy} alt='' />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className='mission-vision-section'>
        <div className='mission-vision-box'>
          <Container>
            <Row className='row-first'>
              <Col md={4}>
                <p className='about-idenbrid-subtext'>私たちの目指す道</p>
                <h2 className='about-idenbrid-h2'>
                  IDENBRIDの
                  <br />
                  ミッション / ビジョン / バリュー
                </h2>
              </Col>
              <Col md={8}>
                <p className='idenbrid-intro'>
                  私たちは世界一の企業になるため会社のミッション、ビジョンそしてバリューをしっかりと定めています。そしてこのMVVとともに日々の業務を行うとともに成長するための基礎としています。これらと共に当社の成長はあります。
                </p>
              </Col>
            </Row>
            <Row className='olp-row'>
              <Col md={4}>
                <h3 className='about-opl-h3'>Mission</h3>
                <p className='about-olp-p'>ミッション</p>
              </Col>
              <Col md={8}>
                <div className='olp-h2'>Update the future in style</div>
                <p className='olp-text'>
                  テクノロジーで未来をかっこよくアップデート
                  <br />
                  ITを通じて私たちが未来を変えるって本気で信じてます
                </p>
              </Col>
            </Row>
            <Row className='olp-row'>
              <Col md={4}>
                <h3 className='about-opl-h3'>Vision</h3>
                <p className='about-olp-p'>ビジョン</p>
              </Col>
              <Col md={8}>
                <div className='olp-h2'>Client User Pain Resolution</div>
                <p className='olp-text'>
                  ユーザーペインを解決する
                  <br />
                  私たちはお客様の課題を解決することをビジョンに掲げ、クライアントに向き合います。
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <h3 className='about-opl-h3'>Value</h3>
                <p className='about-olp-p'>バリュー</p>
              </Col>
              <Col md={8}>
                <div className='olp-h2'>Our Leadership Philosophy</div>
                <p className='olp-text'>
                  当社では10ヵ条からなるOLPを通じてどのような人と働きたいのか、
                  <br />
                  どんな人に成長するべきなのか、そしてどのように判断するべきなのかを明確にしています。
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className='aboutcompany-card-section'>
        <div className='aboutcompany-card-box'>
          <Container>
            <Row>
              <Col md={6} lg={4}>
                <div className='business-card-content'>
                  <Image loading='lazy' className='aboutcard-img' src={aboutImage01} alt='' />
                  <div className='aboutcard-h2'>2053年に売上1兆円を達成する</div>
                  <p className='aboutcard-p'>
                    当社は創業から33年目の2053年にグローバルにて売上1兆円突破を明確な目標に置いています。
                  </p>
                </div>
              </Col>
              <Col md={6} lg={4}>
				<div className='business-card-content'>
                <Image loading='lazy' className='aboutcard-img' src={aboutImage02} alt='' />
                <div className='aboutcard-h2'>2032年にグローバル売上が逆転</div>
                <p className='aboutcard-p'>
                  当社は世界で戦い抜くことを宣言しており、2032年までにグローバルの営業利益が日本市場の売上を超えるよう成長します。
                </p>
				</div>
              </Col>
              <Col md={6} lg={4}>
				<div className='business-card-content'>
                <Image loading='lazy' className='aboutcard-img' src={aboutImage03} alt='' />
                <div className='aboutcard-h2'>パキスタンにおけるサービス提供</div>
                <p className='aboutcard-p mb-0'>
                  受託開発にて蓄えた経験と技術を用いてパキスタン国内におけるエコシステム構築を行うため最大限の投資を進めていきます。
                </p>
				</div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <AboutMenu />
      <Calltoaction />
    </div>
  );
}
