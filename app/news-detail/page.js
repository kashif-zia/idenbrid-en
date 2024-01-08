'use client';
// import Image from 'next/image';
import {useEffect} from 'react';
import 'public/assets/css/newsdetail.scss';
import Calltoaction from '../ui/CalltoAction/calltoaction.js';
import Link from 'next/link';
import {ReactSVG} from 'react-svg';

export default function NewsDetail() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <section className='section-news-detail-page'>
        <div className='container p-0'>
          <div className='news-detail-form-content'>
            <div className='new-detail-title'>
              <h1>H1 Article Title </h1>
            </div>
            <div className='new-detail-sub-title'>
              <p>年末年始の稼働について</p>
            </div>
            <div className='news-date'>
              <p>2023.12.20</p>
            </div>
            <div className='news-desc'>
              <p>
                IDENBRID INC.（本社：パキスタン
                ラホール市、CEO：中村奏画、以下、アイデンブリッド社）は2023年12月27日から2024年1月10日まで休みとなっております。
                <br />
                <br />
                皆様にはご迷惑をお掛けしますが、何卒ご理解のほどよろしくお願いします。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='section-news-detail-pagination'>
  <div className='container p-0'>
    <div className='pagination-buttons'>
      <div className='about-idenbrid-button next-btn'>
        <Link href='/'>
          <ReactSVG src='/assets/images/left-arrow.svg' alt='icon' className='arrowright-svg arrow-left' />
          Next
        </Link>
      </div>
      <div className='about-idenbrid-button brdr-right'>
        <Link href='/'>Index</Link>
      </div>
      <div className='about-idenbrid-button prev-btn'>
        <Link href='/'>
          Prev
          <ReactSVG src='/assets/images/right-arrow-icon.svg' alt='icon' className='arrowright-svg arrow-right' />
        </Link>
      </div>
    </div>
  </div>
</section>
      <section>
        <Calltoaction />
      </section>
    </>
  );
}
