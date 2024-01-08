'use client';
// import Image from 'next/image';
import { useEffect, useState } from 'react';
import PageHeader from '../ui/PageHeader/PageHeader';
import 'public/assets/css/news.scss';
import { Pagination } from 'react-bootstrap';
import forwordArrow from 'public/assets/images/arrow-forward.svg';
import Image from 'next/image';
import Calltoaction from '../ui/CalltoAction/calltoaction.js';
import Link from 'next/link';
import { API } from 'aws-amplify';
import { listIdenbridNews } from '../graphql/queries';
import moment from 'moment';

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [news, setNews] = useState(null);
  const [nextToken, setNextToken] = useState(null);

  const getNews = async (token = null) => {
    try {
      const getNewsApi = await API.graphql({
        query: listIdenbridNews,
        variables: {
          limit: 10,
          sortDirection: 'DESC',
          nextToken: token,
        },
      });
      const newRes = getNewsApi.data.listIdenbridNews.items;
      setNextToken(getNewsApi.data.listIdenbridNews.nextToken);

      const newArray = token ? [...news, ...newRes] : newRes;
      const newIds = newArray.map((data) => data.slug);
      localStorage.setItem('newIds', JSON.stringify(newIds));

      setNews((prevState) => (token ? [...prevState, ...newRes] : newRes));
    } catch (error) {
      console.log(error.message, 'GET NEWS ERR', error);
    }
  };
  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <section className='section-news-page'>
        {/* <div className='news-bg'></div> */}
        <PageHeader title='News' subtext='お知らせ' />
        <div className='container p-0'>
          <div className='news-form-content'>
            {news &&
              news.map((newData, index) => (
                <Link key={newData.id} href={`/comingsoon`}>
                  <div className={`news-item ${index === 0 ? 'first' : ''}`}>
                    <div className='about-news'>
                      <div className='news-date'>
                        <p className='date'>{moment(newData.createdAt).format('YYYY.MM.DD')}</p>
                        <div className='news-tag'>
                          <p>NEWS</p>
                        </div>
                      </div>
                      <div className='news-title'>
                        <p>{newData.title_jp}</p>
                      </div>
                    </div>
                    <div className='news-item-arrow'>
                      <Image src={forwordArrow} alt='iconforword' className='icon-forword' />
                    </div>
                  </div>
                </Link>
              ))}
            <div className='row'>
              {nextToken && (
                <div className='blog-pagination'>
                  <div className='view-more-services-button'>
                    <Link href='javascript:void(0)' onClick={() => getNews(nextToken)}>
                      Load More
                    </Link>
                  </div>
                </div>
              )}
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
