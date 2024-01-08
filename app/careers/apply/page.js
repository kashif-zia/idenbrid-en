'use client'
import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import { toast } from 'react-toastify'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ColorRing } from 'react-loader-spinner'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { PhoneInput } from 'react-international-phone'
import PageHeader from '../../ui/PageHeader/PageHeader'
import 'public/assets/css/careerpage.scss'
import CareerFormModal from '../../ui/ConfirmationModal'
import { useRouter } from 'next/navigation'

export default function CareerPage() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [isLoading, setLoading] = useState(false)
	const [isCareerFormShow, setIsCareerFormShow] = useState(true)

	const [careerData, setCareerData] = useState({
		applicationType: searchParams.get('type') || '',
		username: '',
		email: '',
		phoneNo: '',
		jp: true
	})
	const [errors, setErrors] = useState({
		applicationType: '',
		username: '',
		email: '',
		phoneNo: '',
	})

	const validateForm = () => {
		let newErrors = {
			applicationType: '',
			username: '',
			email: '',
			phoneNo: '',
		}

		// Perform form validation
		let isValid = true

		if (!careerData.applicationType) {
			newErrors.applicationType = '必須項目の入力をお願いします。'
			isValid = false
		}

		if (!careerData.username) {
			newErrors.username = '必須項目の入力をお願いします。'
			isValid = false
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(careerData.email)) {
			newErrors.email = 'メールアドレスが無効です。'
			isValid = false
		}

		if (!careerData.email) {
			newErrors.email = '必須項目の入力をお願いします。'
			isValid = false
		}

		if (!careerData.phoneNo) {
			newErrors.phoneNo = '必須項目の入力をお願いします。'
			isValid = false
		}

		setErrors(newErrors)

		return isValid
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
		setCareerData({ ...careerData, [name]: value })
	}
	const postCareerSubmission = async (e) => {
		e.preventDefault()
		if (!validateForm()) {
			return
		}
		try {
			setLoading(true)
			let { message } = await API.post('idenbridjpcareerapi', '/career', {
				body: careerData,
			})
			// toast.success(message);
			setIsCareerFormShow(false)
			setLoading(false)
			setCareerData({
				applicationType: '',
				username: '',
				email: '',
				phoneNo: '',
			})
		} catch (error) {
			setLoading(false)
			console.log('error', error.message)
			toast.error('Submission failed. Please retry.')
		}
	}
	const handleCareerFormShow = () => {
		setIsCareerFormShow(true)
		router.push('/careers')
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<>
			<section className='section-career-page'>
				<PageHeader className='mx-auto' title='Careers' subtext='採用 応募フォーム' />
				<div className='container p-0'>
					{isCareerFormShow ? (
						<div className='career-form-content'>
							<div className='career-title'>
								<h1>以下のフォームにご入力の上、送信をお願いします。</h1>
							</div>
							<div className='career-form'>
								<Form>
									<div className='career-form-input'>
										<div className='input-label'>
											<label htmlFor='application-type'>応募職種</label>
								
										</div>
										<div className='form-input'>
										{searchParams.get('type')}
										</div>
									</div>
									<div className='career-form-input'>
										<div className='input-label'>
											<label htmlFor='applicant-name'>名前</label>
											<span className='label-tag'>必須</span>
										</div>
										<div className='form-input'>
											<input
												type='text'
												id='applicant-name'
												value={careerData.username}
												name='username'
												onChange={handleChange}
												className={errors.username ? 'error-validation' : ''}
											/>
											<span className='error'>{errors.username}</span>
										</div>
									</div>
									<div className='career-form-input'>
										<div className='input-label'>
											<label htmlFor='applicant-email'>メール</label>
											<span className='label-tag'>必須</span>
										</div>
										<div className='form-input'>
											<input
												type='email'
												id='applicant-email'
												value={careerData.email}
												name='email'
												onChange={handleChange}
												className={errors.email ? 'error-validation' : ''}
											/>
											<span className='error'>{errors.email}</span>
										</div>
									</div>
									<div className='career-form-input'>
										<div className='input-label'>
											<label htmlFor='applicant-phone-number'>電話番号</label>
											<span className='label-tag'>必須</span>
										</div>
										<div className='form-input'>
											<input
												type='text'
												value={careerData.phoneNo}
												id='applicant-phone-number'
												onChange={(e) => setCareerData({ ...careerData, phoneNo: e.target.value })}
												className={errors.phoneNo ? 'error-validation' : ''}
											/>
											<span className='error'>{errors.phoneNo}</span>
										</div>
									</div>
								</Form>
							</div>
							<div className='career-agree-title'>
								<p>
									次の「送信する」ボタンをクリックすることで、
									<Link href='/privacypolicy' target='_blank' className='privacy-link'>
										プライバシーポリシー{' '}
									</Link>
									に同意したことになります。
								</p>
							</div>
							<Button
								className='career-form-submit-btn'
								variant='primary'
								disabled={isLoading}
								onClick={postCareerSubmission}>
								{!isLoading ? (
									'送信する'
								) : (
									<ColorRing
										visible={true}
										height='40'
										width='40'
										ariaLabel='blocks-loading'
										wrapperStyle={{}}
										wrapperClass='blocks-wrapper'
										colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
									/>
								)}
							</Button>
						</div>
					) : (
						<CareerFormModal handleFormShow={handleCareerFormShow} />
					)}
				</div>
			</section>
		</>
	)
}
