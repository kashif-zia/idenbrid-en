'use client';
import {React, useState, useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {ReactSVG} from 'react-svg';
import {Modal , Container , Row , Col, Nav , Tab} from 'react-bootstrap';
import Carimport from 'public/assets/images/inhouseproducts/carimport.jpg';
import Itorchard from 'public/assets/images/inhouseproducts/itorchard.jpg';
import realestate from 'public/assets/images/inhouseproducts/realestate.jpg';
import ConstructionImage from 'public/assets/images/under-construction-icon.png';
import './digitalpeer.scss';

export default function DigitalPeer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

	return (
		<>
			<section className='section-digital-peer'>
				<div className='section-digital-peer-content'>
					<Container>
						<Row className='digitalpeer-above m-0'>
							<Col sm={12} md={12} lg={3} className='mb-3 custom-padding pl-0'>
								<div className='digital-peer-title'>
									<h3>DigitalPeer</h3>
									<span>by IDENBRID</span>
								</div>
							</Col>
							<Col sm={12} md={12} lg={9} className='mb-3 custom-padding right-images-container'>
								<div className='inhouse-product-heading'>
									<h3>Connect Everywhere with our IT Ecosystem</h3>
								</div>
								<div className='inhouse-product-desc'>
									<p>
										弊社IDENBRIDでは成長著しいパキスタン市場において、生活に必要な様々なサービスがDPBIのID一つでなんでも利用できるというエコシステムを構築しています。人口増加が急速に進むパキスタンにおいて人々の生活を支えるITインフラサービス開発を進めています。
									</p>
								</div>
								<div className='inhouse-product-view-more-button'>
									<Link href='/digitalpeer'>
										View More
										<ReactSVG src='/assets/images/right-arrow-icon.svg' alt='icon' className='rightarrow-svg' />
									</Link>
								</div>
							</Col>
						</Row>
						<Row className='m-0'>
							<Tab.Container id='left-tabs-example' defaultActiveKey='first'>
								<Col
									sm={12}
									xs={{ order: 'last', span: 12 }}
									md={{ order: 'first', span: 12 }}
									lg={3}
									className='mb-3 custom-padding pl-0'>
									<Nav variant='pills' className='flex-column'>
										<Nav.Item>
											<Nav.Link eventKey='first'>
												<div className='tab-label'>
												<div className='tab-main-label'>Car Import</div> 
												<div className='tab-sub-label'>車輸入アプリ</div>
												</div>
												<ReactSVG src='/assets/images/inhouseproducts/product-right-arr-icon.svg' alt='' />
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey='second'>
												<div className='tab-label'>
												<div className='tab-main-label'>Real Estate</div> 
												<div className='tab-sub-label'>不動産売買ポータル</div>
												</div>
												<ReactSVG src='/assets/images/inhouseproducts/product-right-arr-icon.svg' alt='' />
											</Nav.Link>
										</Nav.Item>
										<Nav.Item>
											<Nav.Link eventKey='third'>
												<div className='tab-label'>
												<div className='tab-main-label'>IT Orchard</div> 
												<div className='tab-sub-label'>南アジアIT開発ポータル</div>
												</div>
												<ReactSVG src='/assets/images/inhouseproducts/product-right-arr-icon.svg' alt='' />
											</Nav.Link>
										</Nav.Item>
									</Nav>
								</Col>
								<Col
									sm={12}
									xs={{ order: 'first', span: 12 }}
									md={{ order: 'first', span: 12 }}
									lg={9}
									className='mb-3 custom-padding right-images-container'>
									<Tab.Content>
										<Tab.Pane eventKey='first'>
											<Image
												loading='lazy'
												src={Carimport}
												style={{
													width: '100%',
													height: 'auto',
												}}
												alt='img'
												className='product-img'
											/>
										</Tab.Pane>
										<Tab.Pane eventKey='second'>
											<Image
												loading='lazy'
												src={realestate}
												style={{
													width: '100%',
													height: 'auto',
												}}
												alt='img'
												className='product-img'
											/>
										</Tab.Pane>
										<Tab.Pane eventKey='third'>
											<Image
												loading='lazy'
												src={Itorchard}
												style={{
													width: '100%',
													height: 'auto',
												}}
												alt='img'
												className='product-img'
											/>
										</Tab.Pane>
									</Tab.Content>
								</Col>
							</Tab.Container>
						</Row>
					</Container>
				</div>
				<Modal
					show={show}
					onHide={handleClose}
					aria-labelledby='contained-modal-title-vcenter'
					centered
					className='under-construction'>
					<Modal.Header closeButton className='closebtnModal'></Modal.Header>
					<Modal.Body>
						<div className='mb-3'>
							<Image
								loading='lazy'
								className='ConstructionImage'
								height={150}
								src={ConstructionImage}
								alt='iconimage'
							/>
						</div>
						The page is currently under development. Please be patient and wait.
					</Modal.Body>
				</Modal>
			</section>
		</>
	)
}
