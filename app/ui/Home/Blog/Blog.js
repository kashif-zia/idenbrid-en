import {React, useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './blog.scss';
import Link from 'next/link';
import {ReactSVG} from 'react-svg';
import Image from 'next/image';

import ConstructionImage from '../../../../public/assets/images/under-construction-icon.png';
import Modal from 'react-bootstrap/Modal';
import {API} from 'aws-amplify';
import {listIdenbridBlogs} from '../../../graphql/queries';
import {StorageImage} from '@aws-amplify/ui-react-storage';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const getBlogs = async () => {
    try {
      const getBlogsApi = await API.graphql({
        query: listIdenbridBlogs,
        variables: {
          limit: 3,
          sortDirection: 'DESC',
        },
      });
      const blogsRes = getBlogsApi.data.listIdenbridBlogs.items;
      setBlogs(blogsRes);
      // console.log(blogsRes, 'ALL BLOGS');
    } catch (error) {
      console.log(error.message, 'GET BLOGS ERR', error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <section className='section-blog-listing'>
      <Container>
        <div className='blog-section-header'>
          <div className='blog-title'>
            <p> IDENBRID BLOG </p>
            <div className='blog-heading'>
              <h3> ブログ </h3>
            </div>
          </div>
          <div className='blog-view-more-button'>
            <Link href='/comingsoon'>
              View More <ReactSVG className='right-arrow' src='/assets/images/right-arrow-icon.svg' alt='iconimage' />
            </Link>
          </div>
        </div>
        <Row>
          {blogs.length > 0 &&
            blogs.map((item, index) => (
              <Col key={index} sm={12} md={6} lg={4}>
                <Card className='blog-card'>
                  <Link href={`/comingsoon`}>
                    <StorageImage
                      className='card-img-top'
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                      }}
                      imgKey={item.thumbnail}
                      loading='lazy'
                      alt={item.title_jp}
                    />
                  </Link>
                  <Card.Body className='blog-card-body'>
                    <Card.Text>
                      <Link href={`/comingsoon`}>{item.title_jp}</Link>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    {item.tags_jp &&
                      item.tags_jp.map((tag, i) => (
                        <div key={i} className='blog-category-btn'>
                          <Link href='javascript:void(0)'>{tag}</Link>
                        </div>
                      ))}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='under-construction'>
        <Modal.Header closeButton className='closebtnModal'></Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <Image loading='lazy' className='ConstructionImage' height={150} src={ConstructionImage} alt='iconimage' />
          </div>
          The page is currently under development. Please be patient and wait.
        </Modal.Body>
      </Modal>
    </section>
  );
}
