import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './about.scss'
import AboutIdenbrid from '../../../../public/assets/images/about-section-idenbrid.svg'
import SpAboutIdenbrid from '../../../../public/assets/images/mbl-view-img.svg'
import { ReactSVG } from 'react-svg'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
	return (
		<section className='section-about'>
			<Container>
				<Row>
					<Col sm={12} xs={{ order: 'last', span: 12 }} md={{ order: 'first', span: 8 }}>
						<div className='about-left-col-content'>
							<div className='about-section-title'>
								<h1>
									IdentityとHybridを由来とする<br/>
									グローバルな会社名”アイデンブリッド”
								</h1>
							</div>

							<div className='about-section-desc'>
								<p>
									IDENBRIDではお客様のユーザーペインを
									<br />
									解決するをモットーに日々お仕事をしています。
								</p>
								<p>
									日本そしてグローバルのクライアント様が困っている事業課題やビジネスビジョンに
									<br />
									徹底的に向き合い、アプリやシステムにてその改善をご提案します。
								</p>
							</div>
							<div className='about-idenbrid-button'>
								<Link href='/aboutus'>
									About IDENBRID
									<ReactSVG src='/assets/images/right-arrow-icon.svg' alt='icon' className='arrowright-svg' />
								</Link>
							</div>
						</div>
					</Col>
					<Col sm={12} mb={5} xs={{ order: 'first', span: 12 }} md={{ order: 'last', span: 4 }} className='my-md-auto'>
						<div className='about-right-col-content'>
							<Image loading='lazy' src={AboutIdenbrid} alt='idenbridImage' className='aboutidenbrid-icon desktop-img' />
							<Image loading='lazy' src={SpAboutIdenbrid} alt='idenbridImage' className='spaboutidenbrid-icon sp-img' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}
