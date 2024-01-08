'use client';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import 'public/assets/css/work.scss';
import PageHeader from '../ui/PageHeader/PageHeader';
import CalltoAction from '../ui/CalltoAction/calltoaction';
import work from 'public/assets/images/blog.png';
import {API} from 'aws-amplify';
import {StorageImage} from '@aws-amplify/ui-react-storage';
import {listIdenbridWorks} from '../graphql/queries';

import ContentLoader from 'react-content-loader';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [works, setWorks] = useState([]);

  const getWorks = async () => {
    try {
      const getWorksApi = await API.graphql({
        query: listIdenbridWorks,
        variables: {
          limit: 10,
          sortDirection: 'DESC',
        },
      });
      const worksRes = getWorksApi.data.listIdenbridWorks.items;
      console.log('worksRes::', worksRes);
      setWorks(worksRes);
    } catch (error) {
      console.log(error.message, 'GET WORKS ERR', error);
    }
  };

  useEffect(() => {
    getWorks();
  }, []);

  return (
    <div>
      <section className='section-work-page'>
        <PageHeader title='Work' subtext='実績' />
        <div className='section-work-page-content'>
          <div className='container'>
            <div className='row flex-wrapper'>
              {works.length > 0 ? (
                works.map((work, index) => (
                  <Col key={index} className='work-page-col' sm={12} md={6} lg={4}>
                    <Card className='about-work-page-card '>
                      <Link href='/comingsoon'>
                        {/* <Image src={work} alt='work' className='card-img-top' /> */}
                        <StorageImage
                          className='card-img-top'
                          style={{
                            width: '100%',
                            height: 'auto',
                          }}
                          imgKey={work.thumbnail}
                          loading='lazy'
                          alt={work.title_jp}
                        />
                      </Link>

                      <Card.Body className='about-card-body'>
                        <Link href='/comingsoon'>
                          <Card.Title className='work-card-title'>{work.title_jp}</Card.Title>
                        </Link>
                        <Card.Text className='work-card-text'>{work.description_jp}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <>
                  <Col className='blog-page-col' sm={12} md={6} lg={4}>
                    <ContentLoader viewBox='0 0 500 280' height={280} width={500}>
                      <rect x='3' y='3' rx='10' ry='10' width='300' height='180' />
                      <rect x='6' y='190' rx='0' ry='0' width='292' height='20' />
                      <rect x='4' y='215' rx='0' ry='0' width='239' height='20' />
                      <rect x='4' y='242' rx='0' ry='0' width='274' height='20' />
                    </ContentLoader>
                  </Col>
                  <Col className='blog-page-col' sm={12} md={6} lg={4}>
                    <ContentLoader viewBox='0 0 500 280' height={280} width={500}>
                      <rect x='3' y='3' rx='10' ry='10' width='300' height='180' />
                      <rect x='6' y='190' rx='0' ry='0' width='292' height='20' />
                      <rect x='4' y='215' rx='0' ry='0' width='239' height='20' />
                      <rect x='4' y='242' rx='0' ry='0' width='274' height='20' />
                    </ContentLoader>
                  </Col>
                  <Col className='blog-page-col' sm={12} md={6} lg={4}>
                    <ContentLoader viewBox='0 0 500 280' height={280} width={500}>
                      <rect x='3' y='3' rx='10' ry='10' width='300' height='180' />
                      <rect x='6' y='190' rx='0' ry='0' width='292' height='20' />
                      <rect x='4' y='215' rx='0' ry='0' width='239' height='20' />
                      <rect x='4' y='242' rx='0' ry='0' width='274' height='20' />
                    </ContentLoader>
                  </Col>
                </>
              )}
            </div>
          </div>
        </div>
        <CalltoAction />
      </section>
    </div>
  );
}
