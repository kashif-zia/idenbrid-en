'use client'
import { useEffect, useState } from 'react'
import { API } from 'aws-amplify'
import { toast } from 'react-toastify'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Link from 'next/link'
import { PhoneInput } from 'react-international-phone'
import { ColorRing } from 'react-loader-spinner'
import 'public/assets/css/contactus.scss'
import PageHeader from '../ui/PageHeader/PageHeader'
import ContactUsModal from '../ui/ConfirmationModal'

export default function Contactus() {
	const [isLoading, setLoading] = useState(false)
	const [isContactFormShow, setIsContactFormShow] = useState(true)
	const [contactData, setContactData] = useState({
		inquiryMatter: '',
		companyName: '',
		inchargePerson: '',
		email: '',
		phoneNo: '',
		description: '',
		jp: true
	})

	const [errors, setErrors] = useState({
		inquiryMatter: '',
		companyName: '',
		inchargePerson: '',
		email: '',
		description: '',
	})

	const validateForm = () => {
		let newErrors = {
			inquiryMatter: '',
			companyName: '',
			inchargePerson: '',
			email: '',
			description: '',
		}

		// Perform form validation
		let isValid = true

		if (!contactData.inquiryMatter) {
			newErrors.inquiryMatter = '必須項目の入力をお願いします。'
			isValid = false
		}

		if (!contactData.companyName) {
			newErrors.companyName = '必須項目の入力をお願いします。'
			isValid = false
		}

		if (!contactData.inchargePerson) {
			newErrors.inchargePerson = '必須項目の入力をお願いします。'
			isValid = false
		}

		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) {
			newErrors.email = 'メールアドレスが無効です。'
			isValid = false
		}

		if (!contactData.email) {
			newErrors.email = '必須項目の入力をお願いします。'
			isValid = false
		}

		if (!contactData.description) {
			newErrors.description = '必須項目の入力をお願いします。'
			isValid = false
		}

		setErrors(newErrors)

		return isValid
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
		setContactData({ ...contactData, [name]: value })
	}
	const postContactSubmission = async (e) => {
		e.preventDefault()
		if (!validateForm()) {
			return
		}
		try {
			setLoading(true)
			let { message } = await API.post('idenbridjpcontactus', '/contactus', {
				body: contactData,
			})
			// toast.success(message)
			setIsContactFormShow(false)
			setLoading(false)
			setContactData({
				inquiryMatter: '',
				companyName: '',
				inchargePerson: '',
				email: '',
				phoneNo: '',
				description: '',
			})
		} catch (error) {
			setLoading(false)
			console.log('error', error.message)
			toast.error('Submission failed. Please retry.')
		}
	}
	const handleContactFormShow = () => {
		setIsContactFormShow(true)
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<section className='section-contact-us-page'>
				{/* <div className='contact-us-bg-img'></div> */}
				<PageHeader className='mx-auto' title='Contact US' subtext='お問い合わせ' />
				<div className='container p-0'>
					{isContactFormShow ? (
						<div className='contact-form-content'>
							<div className='company-title'>
								<h1>以下のフォームにご入力の上、送信をお願いします。</h1>
							</div>
							<div className='contact-form'>
								<Form>
									<div className='contact-form-input'>
										<div className='input-label'>
											<label htmlFor='inquiry-info'>お問い合わせ用件</label>
											<span className='label-tag'>必須</span>
										</div>
										<div className='form-input'>
											<Form.Control
												as='select'
												id='inquiry-info'
												name='inquiryMatter'
												value={contactData.inquiryMatter}
												onChange={handleChange}
												className={errors.inquiryMatter ? 'error-validation' : ''}
												style={{
									
													WebkitAppearance: 'none',
													MozAppearance: 'none',
													appearance: 'none',
													background: 'url(/assets/images/icon_select.svg) no-repeat center right',
													backgroundSize: '24px 24px',
													position: 'relative',
												  }}

											>
												<option value='' disabled>
													選択してください
												</option>
												<option value='開発サービスに関するお問い合わせ'>開発サービスに関するお問い合わせ</option>
												<option value='見積もり依頼に関するお問い合わせ'>見積もり依頼に関するお問い合わせ</option>
												<option value='新卒、中途採用に関するお問い合わせ'>新卒、中途採用に関するお問い合わせ</option>
												<option value='インターンシップに関するお問い合わせ'>インターンシップに関するお問い合わせ</option>
												<option value='取材に関するお問い合わせ'>取材に関するお問い合わせ</option>
												<option value='協業に関するお問い合わせ'>協業に関するお問い合わせ</option>
												<option value='弊社事業に関するお問い合わせ'>弊社事業に関するお問い合わせ</option>
												<option value='その他お問い合わせ'>その他お問い合わせ</option>
											</Form.Control>
											<span className='error'>{errors.inquiryMatter}</span>
										</div>
									</div>
									<div className='contact-form-input'>
										<div className='input-label'>
											<label htmlFor='business-name'>企業名</label>
											<span className='label-tag'>必須</span>
										</div>
										<div className='form-input'>
											<input
												type='text'
												value={contactData.companyName}
												name='companyName'
												id='business-name'
												onChange={handleChange}
												className={errors.companyName ? 'error-validation' : ''}
											/>
											<span className='error'>{errors.companyName}</span>
										</div>
									</div>
									<div className='contact-form-input'>
										<div className='input-label'>
											<label htmlFor='name-of-person'>ご担当者名</label>
											<span className='label-tag'>必須</span>
										</div>
										<div className='form-input'>
											<input
												type='text'
												value={contactData.inchargePerson}
												name='inchargePerson'
												id='name-of-person'
												onChange={handleChange}
												className={errors.inchargePerson ? 'error-validation' : ''}
											/>
											<span className='error'>{errors.inchargePerson}</span>
										</div>
									</div>
									<div className='contact-form-input'>
										<div className='input-label'>
											<label htmlFor='Email'>メール</label>
											<span className='label-tag'>必須</span>
										</div>
										<div className='form-input'>
											<input
												type='email'
												value={contactData.email}
												name='email'
												id='Email'
												onChange={handleChange}
												className={errors.email ? 'error-validation' : ''}
											/>
											<span className='error'>{errors.email}</span>
										</div>
									</div>
									<div className='contact-form-input'>
										<div className='input-label'>
											<label htmlFor='phone-number'>電話番号</label>
										</div>
										<div className='form-input'>
											<input
												type='tel'
												value={contactData.phoneNo}
												id='phone-number'
												onChange={(e) => setContactData({ ...contactData, ['phoneNo']: e.target.value })}
											/>
										</div>
									</div>
									<div className='contact-form-input'>
										<div className='input-label'>
											<label htmlFor='message'>お問い合わせ内容</label>
											<span className='label-tag'>必須</span>
										</div>
										<div className='form-input'>
											<textarea
												type='text'
												value={contactData.description}
												name='description'
												id='message'
												onChange={handleChange}
												className={errors.description ? 'error-validation' : ''}
											/>
											<span className='error'>{errors.description}</span>
										</div>
									</div>
								</Form>
							</div>
							<div className='contact-agree-title'>
								<p>
									次の「送信する」ボタンをクリックすることで、
									<Link href='/privacypolicy' target='_blank' className='privacy-link'>
										プライバシーポリシー{' '}
									</Link>
									に同意したことになります。
								</p>
							</div>
							<Button
								className='contact-form-submit-btn'
								variant='primary'
								disabled={isLoading}
								onClick={postContactSubmission}>
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
						<ContactUsModal handleFormShow={handleContactFormShow} />
					)}
				</div>
			</section>
		</>
	)
}
