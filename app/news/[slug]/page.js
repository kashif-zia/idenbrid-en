'use client'
import { useEffect, useState } from 'react'
import 'public/assets/css/newsdetail.scss'
import Calltoaction from '../../ui/CalltoAction/calltoaction.js'
import Link from 'next/link'
import { ReactSVG } from 'react-svg'
import { API } from 'aws-amplify'
import { getNewsBySlug } from '../../graphql/queries'
import moment from 'moment'

export default function NewsDetail({ params }) {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const [newDetails, setNewDetails] = useState(null)

	const [newIds, setNewIds] = useState(null)

	const getNewDetails = async () => {
		try {
			const getNewDetailsApi = await API.graphql({
				query: getNewsBySlug,
				variables: {
					slug: params.slug,
				},
			})
			const newDetailRes = getNewDetailsApi.data.getNewsBySlug.items[0]

			setNewDetails(newDetailRes)
		} catch (error) {
			console.log(error.message, 'GET NEWS ERR', error)
		}
	}
	useEffect(() => {
		if (!newDetails) {
			setNewIds(JSON.parse(localStorage.getItem('newIds')))
			getNewDetails()
		}
	}, [])

	const nextPage = () => {
		const index = newIds.findIndex((slug) => newDetails.slug === slug)
		if (index < newIds.length - 1) {
			window.location.replace(window.location.origin + `/news/${newIds[index + 1]}`)
		}
	}
	const prevPage = () => {
		const index = newIds.findIndex((slug) => newDetails.slug === slug)
		if (index !== 0) {
			window.location.replace(window.location.origin + `/news/${newIds[index - 1]}`)
		}
	}

	return (
		<>
			<section className='section-news-detail-page'>
				{newDetails && (
					<div className='container p-0'>
						<div className='news-detail-form-content'>
							<div className='new-detail-sub-title'>
								<h1>{newDetails.title_jp} </h1>
							</div>
							<div className='news-date'>
								<p>{moment(newDetails.createdAt).format('YYYY.MM.DD')}</p>
							</div>
							<div className='news-desc' dangerouslySetInnerHTML={{ __html: newDetails.body_jp }}></div>
						</div>
					</div>
				)}
			</section>
			<section className='section-news-detail-pagination'>
				<div className='container p-0'>
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
								<ReactSVG src='/assets/images/right-arrow-icon.svg' alt='icon' className='arrowright-svg arrow-right' />
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section>
				<Calltoaction />
			</section>
		</>
	)
}
