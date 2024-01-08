import { React, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import Image from 'next/image'
import './news.scss'
import { ReactSVG } from 'react-svg'
import ConstructionImage from '../../../../public/assets/images/under-construction-icon.png'
import Modal from 'react-bootstrap/Modal'
import { listIdenbridNews } from '../../../graphql/queries'
import { API } from 'aws-amplify'
import moment from 'moment'

export default function News() {
	const [show, setShow] = useState(false)
	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const [news, setNews] = useState([])

	const getNews = async () => {
		try {
			const getNewsAPI = await API.graphql({
				query: listIdenbridNews,
				variables: {
					limit: 6,
					sortDirection: 'DESC',
				},
			})
			const newsRes = getNewsAPI.data.listIdenbridNews.items
			setNews(newsRes)
			// console.log(newsRes, 'ALL News');
		} catch (error) {
			console.log(error.message, 'GET News ERR')
		}
	}
	useEffect(() => {
		getNews()
	}, [])
	return (
		<section className='news-section'>
			<Container>
				<Row>
					<Col xs={12} sm={12} md={3} lg={2} className='mb-sm-3'>
						<h2 className='news-h2'>News</h2>
						<div className='viewmore-button'>
							<Link href='/comingsoon' className='mt-0'>
								View More
								<ReactSVG className='right-arrow' src='/assets/images/right-arrow-icon.svg' alt='iconimage' />
							</Link>
						</div>
					</Col>
					<Col xs={12} sm={12} md={9} lg={10}>
						<Row>
							<div className='news-box'>
								{news.length > 0 &&
									news.map((item, index) => (
										<div key={index} className='news-item'>
											<div className='meta-info'>
												<span className='news-date'>{moment(item.createdAt).format('YYYY.MM.DD')}</span>
												<span className='news-category'>NEWS</span>
											</div>
											<Link href='/comingsoon'>
												<p className='news-text'>{item.title_jp}</p>
											</Link>
										</div>
									))}
							</div>
						</Row>
					</Col>
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
	)
}
