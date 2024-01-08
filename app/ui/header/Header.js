'use client'
import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './header.scss'
import Logo from 'public/assets/images/idenbrid-logo.svg'
import Image from 'next/image'
import SideMenu from './SideMenu.js'

export default function Header() {
	const { t, i18n } = useTranslation('common')
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false)
	const [isEnglish, setIsEnglish] = useState(false)

	const pathname = usePathname()
	console.log(pathname, 'router.pathname')
	const color = pathname === '/digitalpeer' ? 'white' : ''

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > window.innerHeight * 0.5) {
				setIsVisible(true)
			} else {
				setIsVisible(true)
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const toggleTranslator = () => {
		if (isEnglish) {
			i18n.changeLanguage('jp')
			setIsEnglish(false)
		} else {
			setIsEnglish(true)
			i18n.changeLanguage('en')
		}
	}
	return (
		<header className={`main-header ${color}`}>
			<Navbar expand='lg' className='bg-body-tertiary'>
				<Container fluid>
					<Link href='/' className='idenbrid-logo'>
						<Image loading='lazy' src={Logo} width='186px' alt='idenbrid-logo' className='main-logo' />
					</Link>

					<SideMenu
						isOpen={isMenuOpen}
						closeNavbar={toggleMenu}
						toggleTranslator={toggleTranslator}
						isEnglish={isEnglish}
					/>
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ml-auto'>
							<Link href='/services' className='nav-link'>
								<div className='menu-item'>
									<span className='menu-name'>Services</span>
									<span className='jp-text'>事業紹介</span>
								</div>
							</Link>
							<Link href='/comingsoon' className='nav-link'>
								<div className='menu-item'>
									<span className='menu-name'>Work</span>
									<span className='jp-text'>実績</span>
								</div>
							</Link>
							<Link href='/aboutus' className='nav-link'>
								<div className='menu-item'>
									<span className='menu-name'>About</span>
									<span className='jp-text'>会社情報</span>
								</div>
							</Link>
							<Link href='/comingsoon' className='nav-link'>
								<div className='menu-item'>
									<span className='menu-name'>Blog</span>
									<span className='jp-text'>ブログ</span>
								</div>
							</Link>
							<Link href='/comingsoon' className='nav-link'>
								<div className='menu-item'>
									<span className='menu-name'>News</span>
									<span className='jp-text'>お知らせ</span>
								</div>
							</Link>
							<Link href='/careers' className='nav-link'>
								<div className='menu-item'>
									<span className='menu-name'>Careers</span>
									<span className='jp-text'>採用</span>
								</div>
							</Link>
							<div className='btns-group'>
								<Link href='/contactus' className='contact-btn'>
									{t('navbar.inquiry')}
								</Link>
								<button onClick={() => window.open('https://www.idenbrid.com', '_blank')} className='lang-button'>
									<span className={'lang-en ' + (isEnglish && 'active')}>EN </span>
									<span className='lang-slash'> / </span>
									<span className={'lang-jp ' + (!isEnglish && 'active')}> JA</span>
								</button>
							</div>
						</Nav>
					</Navbar.Collapse>
					{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
					<div className={`hamburger-menu ${isVisible ? 'visible' : ''}`}>
						<div className='humbger-btn' onClick={toggleMenu}>
							<div className='menu-icon'>
								<div className={isMenuOpen ? 'cross' : ''}>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Navbar>
		</header>
	)
}
