'use client';
import React, { useState, useEffect } from 'react';
import 'public/assets/css/blogdetail.scss';
import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Link from 'next/link';
import blogListImage from 'public/assets/images/blog-list.png';
import Calltoaction from '../../ui/CalltoAction/calltoaction.js';
import { ReactSVG } from 'react-svg';
import { API } from 'aws-amplify';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { getBlogsBySlug, listIdenbridBlogs } from '../../graphql/queries.js';
import moment from 'moment';

const BlogPage = ({ params }) => {
  //   const mainContent = `<p> 2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。</p>
  // <ul>
  // <li>代表メッセージ</li>
  // <li>経営理念</li>
  // <li>会社概要</li>
  // <li>メンバー</li>
  // <li>オフィス&アクセス</li>
  // </ul>
  //   <h2>
  // 日本人が創業したパキスタンから<br/>
  // 世界一必要とされるIT企業になる
  // </h2>
  // <p>
  // 2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。
  // それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
  // 毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
  // 私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
  // そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。
  // 皆様のご支援、応援、何卒引き続きよろしくお願いします。
  // </p>
  // <p>
  // 2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。
  // それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
  // 毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
  // 私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
  // そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。
  // 皆様のご支援、応援、何卒引き続きよろしくお願いします。
  // </p>
  // <h3>
  // 日本人が創業したパキスタンから<br/>
  // 世界一必要とされるIT企業になる
  // </h3>
  // <p>
  // 2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。
  // それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
  // 毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
  // 私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
  // そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。
  // 皆様のご支援、応援、何卒引き続きよろしくお願いします。</p>
  // <h4>
  // 日本人が創業したパキスタンから<br/>
  // 世界一必要とされるIT企業になる
  // </h4>
  // <p>
  // 2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。
  // それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
  // 毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
  // 私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
  // そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。
  // 皆様のご支援、応援、何卒引き続きよろしくお願いします。
  // </p>
  // <h4>
  // 日本人が創業したパキスタンから<br/>
  // 世界一必要とされるIT企業になる
  // </h4>
  // <p>
  // 2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。
  // それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
  // 毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
  // 私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
  // そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。
  // 皆様のご支援、応援、何卒引き続きよろしくお願いします。
  // </p>
  // <h5>
  // 日本人が創業したパキスタンから<br/>
  // 世界一必要とされるIT企業になる
  // </h5>
  // <p>
  // 2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。
  // それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
  // 毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
  // 私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
  // そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。
  // 皆様のご支援、応援、何卒引き続きよろしくお願いします。
  // </p>
  // <h6>
  // 日本人が創業したパキスタンから<br/>
  // 世界一必要とされるIT企業になる
  // </h6>
  // <p>
  // 2020年11月私たち日本人の手によってIDENBRIDがパキスタンに創設されました。
  // それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
  // 毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
  // 私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
  // そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。
  // 皆様のご支援、応援、何卒引き続きよろしくお願いします。
  // </p>
  // `;

  //   const articleList = [
  //     {
  //       id: 1,
  //       image: blogListImage,
  //       description:
  //         '記事タイトルダミー記事タイトルダミー記事タイトルダミー記事タイトルダミー記事タイトルダミー記事タイトルダミー ',
  //     },
  //     {
  //       id: 2,
  //       image: blogListImage,
  //       description: '記事タイトルダミー',
  //     },
  //     {
  //       id: 3,
  //       image: blogListImage,
  //       description: '記事タイトルダミー',
  //     },
  //     {
  //       id: 4,
  //       image: blogListImage,
  //       description:
  //         '記事タイトルダミー記事タイトルダミー記事タイトルダミー記事タイトルダミー記事タイトルダミー記事タイトルダミー',
  //     },
  //     {
  //       id: 5,
  //       image: blogListImage,
  //       description: '記事タイトルダミー記事タイトルダミ',
  //     },
  //     {
  //       id: 6,
  //       image: blogListImage,
  //       description:
  //         '記事タイトルダミー記事タイトルダミー記事タイトルダミー記事タイトルダミー記事タイトルダミー記事タイトルダミー',
  //     },
  //   ];
  //   const date = '2023.10.01';
  //   const writeBy = '中村 奏画';
  //   const title = 'Googleアナリティクスとはどんなツール?';

  const [blogDetails, setBlogDetails] = useState(null);

  const getBlogDetails = async () => {
    try {
      const getBlogDetailsApi = await API.graphql({
        query: getBlogsBySlug,
        variables: {
          slug: params.slug,
        },
      });
      const blogDetailRes = getBlogDetailsApi.data.getBlogsBySlug.items[0];

      setBlogDetails(blogDetailRes);
      console.log(blogDetailRes, 'ALL BLOGS');

      const getBlogsApi = await API.graphql({
        query: listIdenbridBlogs,
        variables: {
          filter: { not: { id: { eq: blogDetailRes.id } } },
          limit: 10,
          sortDirection: 'DESC',
        },
      });
      const blogsRes = getBlogsApi.data.listIdenbridBlogs.items;
      console.log(blogsRes);

      setBlogs(blogsRes);
    } catch (error) {
      console.log(error.message, 'GET BLOGS ERR', error);
    }
  };

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    getBlogDetails();
  }, []);

  return (
    <div className='blog-page-wrapper'>
      <Container fluid>
        {blogDetails && (
          <div className='section-blog-detail-page'>
            <div className='section-blog-content'>
              <div className='flex-wrapper'>
                <div className='blog-detail-card'>
                  <div className='p-0'>
                    <h1 className='article-title'>{blogDetails.title}</h1>

                    <div className='d-flex  justify-content-between article-by'>
                      <div>{moment(blogDetails.createdAt).format('YYYY.MM.DD')}</div>
                      <div>{blogDetails.owner.name}</div>
                    </div>
                    <StorageImage
                      className='blog-header-image'
                      imgKey={blogDetails.thumbnail}
                      loading='lazy'
                      alt={blogDetails.title}
                    />
                    <div className='body-content' dangerouslySetInnerHTML={{ __html: blogDetails.body }} />
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
                              alt={data.title}
                              height='63px'
                              width='90px'
                            />

                            <Link className='list-item-description' href={`/comingsoon`} scroll={false}>
                              {data.title}
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