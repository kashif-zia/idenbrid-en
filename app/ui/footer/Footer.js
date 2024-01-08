import React from 'react';
import './footer.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Logo from '../../../public/assets/images/idenbrid-logo.svg';
import line from '../../../public/assets/images/white-line.svg';
import mail from '../../../public/assets/images/white-mail.svg';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='main-footer'>
      <Container fluid>
        <Row>
          <Col>
            <div className='footertop-area'>
              <div className='footer-logo'>
                <Link href='/' className='idenbrid-logo'>
                  <Image loading='lazy' src={Logo} alt='idenbrid-logo' width={186} />
                </Link>
              </div>
              <div className='socialbtn-group'>
                <a href='https://lin.ee/VXTRVnC' className='footer-btn' target='_blank' rel='noreferrer'>
                  <Image loading='lazy' src={line} alt='line-icon' width={20} />
                  LINEでお問い合わせ
                </a>
                <Link href='/contactus' className='footer-btn'>
                  <Image loading='lazy' src={mail} alt='mail-icon' width={20} />
                  お問い合わせフォーム
                </Link>
              </div>
            </div>
            <div className='footer-menu-list'>
              <div className='footer-menu'>
                <Link href='/services' className='nav-link'>
                  Services
                </Link>
              </div>
              <div className='footer-menu'>
                <Link href='/comingsoon' className='nav-link'>
                  Work
                </Link>
              </div>
              <div className='footer-menu'>
                <Link href='/aboutus/company' className='nav-link'>
                  Company
                </Link>
              </div>
              <div className='footer-menu'>
                <Link href='/comingsoon' className='nav-link'>
                  Blog
                </Link>
              </div>
              <div className='footer-menu'>
                <Link href='/comingsoon' className='nav-link'>
                  News
                </Link>
              </div>
              <div className='social-icons'>
                <div className='twitter-icon'>
                  <a href='https://twitter.com/idenbridinc' target='_blank' rel='noreferrer'>
                    <ReactSVG src='/assets/images/twitter.svg' width='20' alt='twitter-icon' />
                  </a>
                </div>
                <div className='youtube-icon'>
                  <a href='https://www.youtube.com/channel/UC5ENsxgAQIqVfBIMy-Fp-0w' target='_blank' rel='noreferrer'>
                    <ReactSVG src='/assets/images/youtube.svg' width='20' alt='youtube-icon' />
                  </a>
                </div>
                <div className='linkedin-icon'>
                  <a href='https://www.linkedin.com/company/idenbrid' target='_blank' rel='noreferrer'>
                    <ReactSVG src='/assets/images/linkedin.svg' width='20' alt='linkedin-icon' />
                  </a>
                </div>
                <div className='facebook-icon'>
                  <a href='https://www.facebook.com/idenbrid/' target='_blank' rel='noreferrer'>
                    <ReactSVG src='/assets/images/facebook.svg' width='20' alt='facebook-icon' />
                  </a>
                </div> 
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='copyright'>
              <p className='m-0'>©IDENBRID INC. , 2023. ALL RIGHTS RESERVED.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
