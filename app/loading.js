'use client'
import { useState, useEffect } from 'react'
import LoaderImg from '../public/assets/images/logo_introduction.png'
import Image from 'next/image'

function Loading() {
	return (
		<div className='overlay'>
			<div className='spinnerContainer'>
				<div className='spinner'>
					<Image src={LoaderImg} alt='logo' />
				</div>
			</div>
		</div>
	)
}

export default Loading
