import React, { useState } from 'react'
import Image from 'next/image'
import pictur1 from '../assets/images/in.png'
import pictur2 from '../assets/images/inst.png'
import pictur3 from '../assets/images/be.png'
import pictur4 from '../assets/images/bask.png'
import { text } from '..//util/text'
import { useLanguage } from '../hooks/useLanguage'

export default function ContactSection() {
	const { language } = useLanguage()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [status, setStatus] = useState('')

	const sendEmail = async e => {
		e.preventDefault()

		const response = await fetch('/api/sendMail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, message }),
		})

		if (response.ok) {
			setStatus('Email sent successfully!')
			setName('')
			setEmail('')
			setMessage('')
		} else {
			setStatus('Error sending email.')
		}
	}

	return (
		<section id='contact' className='w-full text-center py-20 px-4'>
			<h1 className='text-4xl font-bold md:pt-10 pb-6 '>
				{text.contacts[language]}
			</h1>
			<p className='text-[18px] py-6'>{text.ct[language]}</p>

			<form onSubmit={sendEmail} className='col-md-6 border-left py-3'>
				<button
					type='submit'
					className='bg-black text-white text-[18px] rounded-full p-2 pr-5 pl-5'
				>
					{text.ff[language]}
				</button>
			</form>
			{status && <p className='pt-4'>{status}</p>}

			<div className='flex justify-center gap-12 pt-20 '>
				<Image src={pictur1} />
				<Image src={pictur2} />
				<Image src={pictur3} />
				<Image src={pictur4} />
			</div>
		</section>
	)
}
