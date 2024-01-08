'use client'
import { useEffect, React } from 'react'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'

export default function ContactUsModal({ handleFormShow }) {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
    <>
      <div className='confirmation-modal'>
        <div>
          <h1>送信が完了いたしました</h1>
        </div>
        <div className='confirmation-modal-desc'>
          <p>
            お送り頂きました内容を確認の上、折り返しご連絡させて頂きます。
            <br />
            また、ご記入頂いたメールアドレスへ、自動返信の確認メールをお送りしております。
          </p>
        </div>
        <Button onClick={handleFormShow} variant='primary'>
          トップへ戻る
        </Button>
      </div>
    </>
  );
}
