'use client'
import { useEffect, useState } from 'react'
import Banner from './ui/Home/Banner/Banner.js'
import About from './ui/Home/About/About.js'
import Services from './ui/Home/Services/Services'
import DigitalPeer from './ui/DigitalPeer/DigitalPeer.js'
import Calltoaction from './ui/CalltoAction/calltoaction.js'
import Aboutcompany from './ui/Home/AboutCompany/aboutcompany.js'
import News from './ui/Home/News/News.js'
import Blog from './ui/Home/Blog/Blog.js'
import UpdateFutureMarquee from './ui/Home/UpdateFuture/updatefuture.js'
import Container from 'react-bootstrap/Container'
import Loading from './loading.js'

export default function LandingPage() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false)
		}, 2000)
		return () => clearTimeout(timeout)
	}, [])

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div>
			{loading ? (
				<Loading />
			) : (
				<section className='home-page'>
					<div className='home-bg'></div>
					<Banner />
					<About />
					<Services />
					<Container fluid>
						<div className='lp-digitalpeer-wrapper'>
							<DigitalPeer />
						</div>
					</Container>
					<section className='marque-mobile'>
						<UpdateFutureMarquee />
					</section>
					<Aboutcompany />
					<section className='marque-desktop'>
						<UpdateFutureMarquee />
					</section>
					<Blog />
					<News />
					<Calltoaction />
				</section>
			)}
		</div>
	)
}
