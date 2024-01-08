'use client';
import React, { useState, useEffect } from 'react';
import 'public/assets/css/blogdetail.scss';
import Container from 'react-bootstrap/Container';
import Link from 'next/link';
import Calltoaction from '../../ui/CalltoAction/calltoaction.js';
import { ReactSVG } from 'react-svg';
import { API } from 'aws-amplify';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { getBlogsBySlug, listIdenbridBlogs } from '../../graphql/queries.js';
import moment from 'moment';

const BlogPage = ({ params }) => {
  const [blogDetails, setBlogDetails] = useState(null);
  const [blogIds, setBlogIds] = useState(null);

  const getBlogDetails = async (slugData = null) => {
    try {
      const getBlogDetailsApi = await API.graphql({
        query: getBlogsBySlug,
        variables: {
          slug: slugData || params.slug,
        },
      });
      const blogDetailRes = getBlogDetailsApi.data.getBlogsBySlug.items[0];

      setBlogDetails(blogDetailRes);

      const getBlogsApi = await API.graphql({
        query: listIdenbridBlogs,
        variables: {
          filter: { not: { id: { eq: blogDetailRes.id } } },
          limit: 10,
          sortDirection: 'DESC',
        },
      });
      const blogsRes = getBlogsApi.data.listIdenbridBlogs.items;

      setBlogs(blogsRes);
    } catch (error) {
      console.log(error.message, 'GET BLOGS ERR', error);
    }
  };

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    if (!blogDetails) {
      setBlogIds(JSON.parse(localStorage.getItem('blogid')));
      getBlogDetails();
    }
  }, []);

  const nextPage = () => {
    const index = blogIds.findIndex((slug) => blogDetails.slug === slug);
    if (index < blogIds.length - 1) {
      window.location.replace(window.location.origin + `/blog/${blogIds[index + 1]}`);
    }
  };
  const prevPage = () => {
    const index = blogIds.findIndex((slug) => blogDetails.slug === slug);
    if (index !== 0) {
      window.location.replace(window.location.origin + `/blog/${blogIds[index - 1]}`);
    }
  };

  return (
    <div className='blog-page-wrapper'>
      <Container fluid>
        {blogDetails && (
          <div className='section-blog-detail-page'>
            <div className='section-blog-content'>
              <div className='flex-wrapper'>
                <div className='blog-detail-card'>
                  <div className='p-0'>
                    <h1 className='article-title'>{blogDetails.title_jp}</h1>

                    <div className='d-flex  justify-content-between article-by'>
                      <div>{moment(blogDetails.createdAt).format('YYYY.MM.DD')}</div>
                      <div>{blogDetails.owner.name}</div>
                    </div>
                    <StorageImage
                      className='blog-header-image'
                      imgKey={blogDetails.thumbnail}
                      loading='lazy'
                      alt={blogDetails.title_jp}
                    />
                    <div className='body-content' dangerouslySetInnerHTML={{ __html: blogDetails.body_jp }} />
                  </div>
                </div>
                <div className='article-list'>
                  <div className='blog-detail-card blog-list'>
                    <h3 className='list-header'>関連記事</h3>
                    <div className='side-article-list-wrapper'>
                      {blogs &&
                        blogs.map((data) => (
                          <div key={data.id} className='d-flex'>
                            <StorageImage
                              className='list-item-image'
                              imgKey={data.thumbnail}
                              loading='lazy'
                              alt={data.body_jp}
                              height='63px'
                              width='90px'
                            />

                            <Link className='list-item-description' href={`/blog-detail/${data.slug}`} scroll={false}>
                              {data.body_jp}
                            </Link>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
      <section className='section-news-detail-pagination'>
        <Container fluid>
          <div className='section-blog-content'>
            <div className='pagination-buttons'>
              <div className='about-idenbrid-button next-btn'>
                <Link href='javascript:void(0)' onClick={() => nextPage()}>
                  <ReactSVG src='/assets/images/left-arrow.svg' alt='icon' className='arrowright-svg arrow-left' />
                  Next
                </Link>
              </div>
              <div className='about-idenbrid-button brdr-right'>
                <Link href='javascript:void(0)'>Index</Link>
              </div>
              <div className='about-idenbrid-button prev-btn'>
                <Link href='javascript:void(0)' onClick={() => prevPage()}>
                  Prev
                  <ReactSVG
                    src='/assets/images/right-arrow-icon.svg'
                    alt='icon'
                    className='arrowright-svg arrow-right'
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Calltoaction />
      </section>
    </div>
  );
};

export default BlogPage;
