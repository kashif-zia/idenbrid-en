'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image.js';
import Link from 'next/link.js';
import { ReactSVG } from 'react-svg';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import 'public/assets/css/service.scss';
import DSP from 'public/assets/images/services/dsp-service.png';
import POA from 'public/assets/images/services/poa-service.png';
import jpFlag from 'public/assets/images/flags/jpFlag.svg';
import paskitanFlag from 'public/assets/images/flags/paskitanFlag.svg';
import globalFlag from 'public/assets/images/flags/globalFlag.svg';
import DigitalPeer from '../ui/DigitalPeer/DigitalPeer.js';
import CalltoAction from '../ui/CalltoAction/calltoaction.js';
import PageHeader from '../ui/PageHeader/PageHeader.js';
import ConstructionImage from 'public/assets/images/under-construction-icon.png';

export default function ServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section className='section-services'>
        <PageHeader title='Services' subtext='事業紹介' />
        <Container fluid className='p-0'>
          <div className='service-card'>
            <div className='services-card-content'>
              <div className='service-image'>
                <Image loading='lazy' className='img' src={DSP} alt='serviceimage' />
              </div>
              <Col md={12} lg={9} className='p-0'>
                <div className='about-service-left'>
                  <Row className='m-0'>
                    <Col md={5} className='p-0'>
                      <div className='about-service-left-content'>
                        <div className='business-name'>
                          <h3>受託開発サービス</h3>
                        </div>
                        <div className='business-title'>
                          <p>DSP：Data Solution Program</p>
                        </div>
                        <div className='country-flags'>
                          <div className='services-country-flags'>
                            <div className='flag jp'>
                              <Image loading='lazy' src={jpFlag} alt='flagImage' />
                            </div>
                            <div className='flag pk'>
                              <Image loading='lazy' src={paskitanFlag} alt='pakistanFlag' />
                            </div>
                            <div className='flag global'>
                              <Image loading='lazy' src={globalFlag} alt='globalFlag' />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={7} className='p-0'>
                      <div className='about-service-right-content'>
                        <div className='business-desc'>
                          <p>
                            受託開発「DSP」はお客様のユーザーペインつまりはビジネス課題に寄り添い、ITソリューションを通じてデータ・数値を改善する観点よりシステムやアプリの開発をします。
                          </p>
                          <div className='about-idenbrid-button'>
                            <Link href='/services/dsp'>
                              About Data Solution Program
                              <ReactSVG
                                className='right-arrow'
                                src='assets/images/right-arrow-icon.svg'
                                alt='iconimage'
                              />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>

            <div className='services-card-content p-0'>
              <div className='service-image'>
                <Image loading='lazy' className='img' src={POA} alt='serviceimage' />
              </div>
              <Row className='m-0'>
                <Col md={3} className='p-0'></Col>
                <Col md={12} lg={9} className='p-0'>
                  <div className='about-service-left about-service-right'>
                    <Row className='m-0'>
                      <Col md={5} className='p-0'>
                        <div className='about-service-left-content'>
                          <div className='business-name'>
                            <h3>パキスタンオフショア開発 </h3>
                          </div>
                          <div className='business-title'>
                            <p>POA：Pakistan Offshore Augmentation</p>
                          </div>
                          <div className='country-flags'>
                            <div className='services-country-flags'>
                              <div className='flag jp'>
                                <Image loading='lazy' src={jpFlag} alt='flagImage' />
                              </div>
                              <div className='flag pk'>
                                <Image loading='lazy' src={paskitanFlag} alt='pakistanFlag' />
                              </div>
                              <div className='flag global'>
                                <Image loading='lazy' src={globalFlag} alt='globalFlag' />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col md={7} className='p-0'>
                        <div className='about-service-right-content'>
                          <div className='business-desc'>
                            <p>
                              オフショア開発「POA」は弊社のパキスタンにおける最高峰ITエンジニアをご提供し、システムからアプリ開発まで企業の開発の加速をお手伝いします。
                            </p>
                            <div className='about-idenbrid-button'>
                              <Link href='/services/poa'>
                                About Pakistan Offshore Augmentation
                                <ReactSVG
                                  className='right-arrow'
                                  src='assets/images/right-arrow-icon.svg'
                                  alt='iconimage'
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
        <Container fluid className='space p-0'>
          <DigitalPeer />
        </Container>
        <CalltoAction />
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
        className='under-construction'
      >
        <Modal.Header closeButton className='closebtnModal'></Modal.Header>
        <Modal.Body>
          <div className='mb-3'>
            <Image loading='lazy' src={ConstructionImage} alt='iconimage' className='ConstructionImage' />
          </div>
          The page is currently under development. Please be patient and wait.
        </Modal.Body>
      </Modal>
    </div>
  );
}
