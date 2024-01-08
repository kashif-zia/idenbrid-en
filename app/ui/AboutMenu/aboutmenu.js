import React from 'react';
import Container from 'react-bootstrap/Container';
import './aboutmenu.scss';
import {ReactSVG} from 'react-svg';
import Link from 'next/link';
import Image from 'next/image';

export default function aboutmenu() {
  return (
    <Container fluid>
      <div className='about-idenbrid-box'>
        <Container>
        <Link href='/aboutus'>
          <div>
            <h2 className='heading-box'>
              <span className='about-h2'>About IDENBRID</span>
            
              <Image
                className='right-arrowimg'
                src='/assets/images/right-arrow-icon.svg'
                alt=''
                width={32}
                height={32}
              />
            </h2>
          </div></Link>
          <div>
            <ul className='menu-idenbrid'>
              <li>
                <Link href='/aboutus/message'>代表メッセージ</Link>
              </li>
              <li>
                <Link href='/aboutus/business'>経営理念</Link>
              </li>
              <li>
                <Link href='/aboutus/company'>会社概要</Link>
              </li>
              <li>
                <Link href='/aboutus/member'>メンバー</Link>
              </li>
              <li>
                <Link href='/aboutus/officeaccess'>オフィス&アクセス</Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </Container>
  );
}
