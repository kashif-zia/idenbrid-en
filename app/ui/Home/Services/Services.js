import { React } from 'react';
import './services.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import jpFlag from '../../../../public/assets/images/flags/jpFlag.svg';
import Dsp from '../../../../public/assets/images/homeServices/dsp.png';
import SDH from '../../../../public/assets/images/homeServices/sdh.png';
import Link from 'next/link';

import { ReactSVG } from 'react-svg';
import Image from 'next/image';

export default function Services() {
  return (
    <section className='section-home-services'>
      <Container className=''>
        <Row>
          <Col sm={12} xs={{ order: 'last', span: 12 }} md={{ order: 'first', span: 5 }} className=''>
            <div className='home-services-col-left-content'>
              <div className='home-services-title'>
                <h1>受託開発サービス</h1>
              </div>
              <div className='home-services-heading'>
                <p>DSP : Data Solution Program</p>
              </div>
              <div className='home-services-country-flags'>
                <div className='flag jp'>
                  <Image loading='lazy' src={jpFlag} alt='flagImage' />
                </div>
                <div className='flag pk'>
                  <ReactSVG src='/assets/images/flags/paskitanFlag.svg' alt='pakistanFlag' />
                </div>
                <div className='flag global'>
                  <ReactSVG src='/assets/images/flags/globalFlag.svg' alt='globalFlag' />
                </div>
              </div>
              <div className='home-services-desc'>
                <p>
                  受託開発「DSP」はお客様のユーザーペインつまりはビジネス課題に寄り添い、ITソリューションを通じてデータ・数値を改善する観点よりシステムやアプリの開発をします。
                </p>
              </div>
              <div className='view-more-services-button'>
                <Link href='/services/dsp'>View More</Link>
              </div>
            </div>
          </Col>
          <Col sm={12} mb={5} xs={{ order: 'first', span: 12 }} md={{ order: 'last', span: 7 }} className=''>
            <div className='home-services-col-right-content'>
              <Image loading='lazy' src={Dsp} alt='ServiceImage' width='100%' />
            </div>
          </Col>
        </Row>
        <hr className='home-services-divider' />
        <Row>
          <Col sm={12} xs={{ order: 'last', span: 12 }} md={{ order: 'first', span: 5 }} className=''>
            <div className='home-services-col-left-content'>
              <div className='home-services-title'>
                <h1>パキスタンオフショア開発</h1>
              </div>
              <div className='home-services-heading'>
                <p>POA : Pakistan Offshore Augmentation</p>
              </div>
              <div className='home-services-country-flags'>
                <div className='flag jp'>
                  <ReactSVG src='/assets/images/flags/jpFlag.svg' alt='flagImage' />
                </div>
                <div className='flag global'>
                  <ReactSVG src='/assets/images/flags/globalFlag.svg' alt='globalFlag' />
                </div>
              </div>
              <div className='home-services-desc'>
                <p>
                  オフショア開発「POA」は弊社のパキスタンにおける最高峰ITエンジニアをご提供し、システムからアプリ開発まで企業の開発の加速をお手伝いします。
                </p>
              </div>
              <div className='view-more-services-button'>
                <Link href='/services/poa'>View More</Link>
              </div>
            </div>
          </Col>
          <Col sm={12} mb={5} xs={{ order: 'first', span: 12 }} md={{ order: 'last', span: 7 }} className=''>
            <div className='home-services-col-right-content'>
              <Image loading='lazy' src={SDH} alt='ServiceImage' width='100%' />
            </div>
          </Col>
        </Row>
        <hr className='home-services-divider' />
        <div className='services-social-buttons'>
          <div className='service-line-link social-link line'>
            <a href='https://lin.ee/VXTRVnC' target='_blank' rel='noreferrer'>
              <ReactSVG src='/assets/images/socialicons/icon_LINE.svg' alt='lineIcon' /> LINEでお問い合わせ
            </a>
          </div>
          <div className='service-mail-link social-link mail'>
            <Link href='/contactus'>
              <ReactSVG src='/assets/images/socialicons/mail.svg' alt='lineIcon' /> お問い合わせフォーム
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
