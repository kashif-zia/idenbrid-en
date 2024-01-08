'use client'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import { Amplify } from 'aws-amplify'
import 'react-toastify/dist/ReactToastify.css'
import 'public/assets/css/main.scss'
import Header from './header/Header'
import Footer from './footer/Footer'
import awsExports from '../aws-exports'

import common_jp from '../translations/jp/common.json'
import common_en from '../translations/en/common.json'

i18next.init({
	interpolation: { escapeValue: false },
	lng: 'jp',
	resources: {
		en: {
			common: common_en,
		},
		jp: {
			common: common_jp,
		},
	},
})

Amplify.configure({...awsExports, ssr:true})

const PageLayout = ({ children }) => {
	return (
		<I18nextProvider i18n={i18next}>
			<main className='main-body'>
				<Header />
				<main className='route-wrapper'>{children}</main>
				<div className='main-body-bg'></div>
				<Footer />
			</main>
		</I18nextProvider>
	)
}

export default PageLayout
