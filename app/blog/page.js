'use client';

import {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {API} from 'aws-amplify';
import {StorageImage} from '@aws-amplify/ui-react-storage';
import {Card, Col, Accordion, Pagination, Button} from 'react-bootstrap';
import 'public/assets/css/blog.scss';
import PageHeader from '../ui/PageHeader/PageHeader';
import CalltoAction from '../ui/CalltoAction/calltoaction';
import ContentLoader from 'react-content-loader';
import iconSearch from 'public/assets/images/search.svg';
import restart from 'public/assets/images/restart.svg';
import {listIdenbridBlogs} from '../graphql/queries';
import moment from 'moment';

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState([]);
  const [nextToken, setNextToken] = useState(null);

  useEffect(() => {
    const getBlogs = async (tag = null, token = null) => {
      setLoading(true);
      try {
        const getBlogsApi = await API.graphql({
          query: listIdenbridBlogs,
          variables: {
            limit: 10,
            sortDirection: 'DESC',
            nextToken: token,
          },
        });
        if (getBlogsApi) {
          const blogsRes = getBlogsApi.data.listIdenbridBlogs.items;
          setNextToken(getBlogsApi.data.listIdenbridBlogs.nextToken);
          const blogArray = token ? [...blogs, ...blogsRes] : blogsRes;
          const blogIds = blogArray.map((data) => data.slug);
          localStorage.setItem('blogid', JSON.stringify(blogIds));
          setBlogs((prevState) => (token ? [...prevState, ...blogsRes] : blogsRes));
          setLoading(false);
        }
      } catch (error) {
        console.log(error.message, 'GET BLOGS ERR', error);
        setLoading(false);
      }
    };
    getBlogs();
  }, []);

  const filteredBlogs = async (tag = null, token = null) => {
    try {
      setLoading(true);
      const getBlogsApi = await API.graphql({
        query: listIdenbridBlogs,
        variables: {
          filter: tag && {tags_jp: {contains: tag}},
          limit: 10,
          sortDirection: 'DESC',
          nextToken: token,
        },
      });
      if (getBlogsApi) {
        const blogsRes = getBlogsApi.data.listIdenbridBlogs.items;
        setNextToken(getBlogsApi.data.listIdenbridBlogs.nextToken);
        const blogArray = token ? [...blogs, ...blogsRes] : blogsRes;
        const blogIds = blogArray.map((data) => data.slug);
        localStorage.setItem('blogid', JSON.stringify(blogIds));
        setBlogs((prevState) => (token ? [...prevState, ...blogsRes] : blogsRes));
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message, 'GET BLOGS ERR', error);
      setLoading(false);
    }
  };

  const resetBlogs = async (token = null) => {
    setLoading(true);

    try {
      const getBlogsApi = await API.graphql({
        query: listIdenbridBlogs,
        variables: {
          limit: 10,
          sortDirection: 'DESC',
          nextToken: token,
        },
      });
      if (getBlogsApi) {
        const blogsRes = getBlogsApi.data.listIdenbridBlogs.items;
        setNextToken(getBlogsApi.data.listIdenbridBlogs.nextToken);
        const blogArray = token ? [...blogs, ...blogsRes] : blogsRes;
        const blogIds = blogArray.map((data) => data.slug);
        localStorage.setItem('blogid', JSON.stringify(blogIds));
        setBlogs((prevState) => (token ? [...prevState, ...blogsRes] : blogsRes));
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message, 'GET BLOGS ERR', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <section className='section-blog-page'>
        <PageHeader title='Blog' subtext='ブログ' />
        <div className='section-blog-page-content'>
          <div className='container'>
            <div className='blog-categories-accordion'>
              <Accordion defaultActiveKey='0'>
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div className='header-content-wrapper'>
                      <Image loading='lazy' src={iconSearch} alt='iconsearch' className='icon' />
                      絞り込み
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className='desc-box'>
                      <div className='block-desc'>
                        <div className='blog-ctgry'>
                          <button
                            onClick={() => {
                              setTags('UI/UX');
                              filteredBlogs('UI/UX');
                            }}
                            className={tags === 'UI/UX' ? 'btnActive' : ''}>
                            UI/UX
                          </button>
                        </div>
                        <div className='blog-ctgry'>
                          <button
                            onClick={() => {
                              setTags('オフショア開発');
                              filteredBlogs('オフショア開発');
                            }}
                            className={tags === 'オフショア開発' ? 'btnActive' : ''}>
                            オフショア開発
                          </button>
                        </div>
                        <div className='blog-ctgry'>
                          <button
                            onClick={() => {
                              setTags('アプリ開発');
                              filteredBlogs('アプリ開発');
                            }}
                            className={tags === 'アプリ開発' ? 'btnActive' : ''}>
                            アプリ開発
                          </button>
                        </div>
                      </div>
                      <button 
                      disabled={!tags}
                        onClick={() => {
                          setTags(null);
                          resetBlogs();
                        }}
                        className='refresh-button'>
                        <div className='refresh-btn'>
                          <div className='refresh-img'>
                            <Image src={restart} alt='iconrestart' className='refresh-icon' />
                          </div>
                          <div className='refresh-btn-text'>
                            <p>リセット</p>
                          </div>
                        </div>
                      </button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>

            <div className='row'>
              {loading ? (
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
              ) : (
                <>
                  {blogs.length > 0 ? (
                    <>
                      {blogs.map((x, index) => {
                        return (
                          <Col key={index} className='blog-page-col' sm={12} md={6} lg={4}>
                            <Card className='about-work-page-card '>
                              <Link href={`/comingsoon`}>
                                <StorageImage
                                  className='card-img-top'
                                  style={{width: '100%'}}
                                  imgKey={x.thumbnail}
                                  alt={x.title_jp}
                                />
                              </Link>
                              <Card.Body className='about-card-body'>
                                <div className='blog-category'>
                                  <div className='blog-date'>
                                    <p>{moment(x.createdAt).format('YYYY.MM.DD')}</p>
                                  </div>
                                  <div className='blog-type'>
                                    <p>{x.tags_jp.join(', ')}</p>
                                  </div>
                                </div>
                                <Link href={`/comingsoon`}>
                                  <Card.Title className='work-card-title'>{x.title_jp}</Card.Title>
                                </Link>
                              </Card.Body>
                            </Card>
                          </Col>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      {loading ? (
                        ''
                      ) : (
                        <div className='container no-found'>
                          <p>No Blogs Found!</p>
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
            <div className='row'>
              {nextToken && (
                <div className='blog-pagination'>
                  <div className='view-more-services-button'>
                    <Link href='javascript:void(0)' onClick={() => getBlogs(null, nextToken)}>
                      Load More
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <CalltoAction />
      </section>
    </div>
  );
}
