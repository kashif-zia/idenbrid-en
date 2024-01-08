'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'public/assets/css/about.scss';
import PageHeader from '../ui/PageHeader/PageHeader';
import CalltoAction from '../ui/CalltoAction/calltoaction';
// import ConstructionImage from 'public/assets/images/under-construction-icon.png';
// import Modal from 'react-bootstrap/Modal';
// import Image from 'next/image';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <section className='section-about-page'>
        <PageHeader title='About' subtext='企業情報' />
        <div className='section-about-page-content'>
          <div className='container'>
            <div className='row'>
              <Col className='about-page-col' sm={12} md={6} lg={4}>
                <Link href='/aboutus/message'>
                  <Card className='about-page-card'>
                    <Card.Img variant='top' src='assets/images/aboutpage/image_about_message.png' />
                    <Card.Body className='about-card-body'>
                      <Card.Title className='about-card-title'>代表メッセージ</Card.Title>
                      <Card.Text className='about-card-text'>弊社CEO中村のメッセージをお伝えします。</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col className='about-page-col' sm={12} md={6} lg={4}>
                <Link href='/aboutus/business'>
                  <Card className='about-page-card'>
                    <Card.Img variant='top' src='assets/images/aboutpage/image_about_philosophy.png' />
                    <Card.Body className='about-card-body'>
                      <Card.Title className='about-card-title'>経営理念</Card.Title>
                      <Card.Text className='about-card-text'>IDENBRIDの経営理念をご紹介します。</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col className='about-page-col' sm={12} md={6} lg={4}>
                <Link href='/aboutus/company'>
                  <Card className='about-page-card'>
                    <Card.Img variant='top' src='assets/images/aboutpage/image_about_company.png' />
                    <Card.Body className='about-card-body'>
                      <Card.Title className='about-card-title'>会社概要</Card.Title>
                      <Card.Text className='about-card-text'>IDENBRIDの基本的な情報をご紹介します。</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col className='about-page-col' sm={12} md={6} lg={4}>
                <Link href='/aboutus/member'>
                  <Card className='about-page-card'>
                    <Card.Img variant='top' src='assets/images/aboutpage/image_about_member.png' />
                    <Card.Body className='about-card-body'>
                      <Card.Title className='about-card-title'>メンバー</Card.Title>
                      <Card.Text className='about-card-text'>IDENBRIDの社員をご紹介します。</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>

              <Col className='about-page-col' sm={12} md={6} lg={4}>
                <Link href='/aboutus/officeaccess'>
                  <Card className='about-page-card'>
                    <Card.Img variant='top' src='assets/images/aboutpage/IMG_3177.png' />
                    <Card.Body className='about-card-body'>
                      <Card.Title className='about-card-title'>オフィス&アクセス</Card.Title>
                      <Card.Text className='about-card-text'>
                        弊社のオフィス、会社アクセスについてご紹介します。
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            </div>
          </div>
        </div>
        <CalltoAction />
      </section>
    </div>
  );
}
