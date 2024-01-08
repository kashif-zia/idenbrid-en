import React from 'react'
import Container from 'react-bootstrap/Container'
import { StorageImage } from '@aws-amplify/ui-react-storage'
import { useTranslation } from 'react-i18next'
import './banner.scss'
import Link from 'next/link'

export default function Banner() {
	const { t } = useTranslation('common')
	return (
		<section className='main-banner'>
			<Container>
				<div className='custom-row'>
					<div className='text-col'>
						<div className='banner-h1'>
							<h1 className='mb-0'>Update</h1>
							<h1 className='mb-0'>the future</h1>
							<h1>in style</h1>
						</div>
						<div className='banner-text'>
							<p>
							当社は『Innovation × Strategy × Growth』を結びつけた <br/>
							【ビジネスソリューションの究極の実現】企業です。
							</p>
						</div>
						<div className='banner-text-sp'>
							<p>
							当社は『Innovation × Strategy × Growth』を結びつけた
							【ビジネスソリューションの究極の実現】企業です。
							</p>
						</div>
						<div className='banner-btn'>
							<Link href='/contactus' className='contact-btn'>
								{t('banner.inquiry')}
							</Link>
						</div>
					</div>
					<div className='video-col'>
						<StorageImage alt='' imgKey='main_visual-movie.webp' className='banner-video' accessLevel='guest' />
					</div>
				</div>
			</Container>
		</section>
	)
}
