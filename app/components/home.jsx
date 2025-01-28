'use client'
import Image from 'next/image'
import person from '../assets/person.jpeg'
import Language from './change-language'
import { text } from '../util/text'
import { useLanguage } from '../hooks/useLanguage'

export default function HeroSection() {
	const { language } = useLanguage()
	return (
		<section id='home' className='md:px-16 px-3 '>
			<div className='pt-10 mb-8 flex flex-col justify-start md:items-end md:flex-row items-start md:justify-between w-full relative '>
				<h1 className='text-[47px] md:text-5xl font-bold'>
					{text.name[language]}
					<br /> {text.lastname[language]}
				</h1>
				<p className='md:text-x1 md:self-end self-start text-[18px]	font-Gilroy-Medium'>
					{text.status[language]} <br /> {text.age[language]}
				</p>
				<Language />
			</div>
			<Image
				src={person}
				className='w-full h-[600px] object-cover pb-24 md:block hidden'
				alt='image'
			/>
			<Image
				src={person}
				className='w-full h-full md:hidden pb-28 px-2 '
				alt='image'
			/>
		</section>
	)
}
