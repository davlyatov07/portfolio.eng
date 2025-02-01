import Image from 'next/image'
import picture5 from '../assets/images/ss.png'
import picture6 from '../assets/images/dd.png'
import picture7 from '../assets/images/jj.png'
import { text } from '../util/text'
import { useLanguage } from '../hooks/useLanguage'

export default function PortfolioSection() {
	const { language } = useLanguage()
	return (
		<section
			id='portfolio'
			className='bg-neutral-100 w-full text-center  text-black py-8 md:py-20 px-4'
		>
			<h1 className='text-4xl font-bold py-10'>{text.po[language]}</h1>
			<div className='flex justify-center items-center flex-col gap-12 px-10 pt-7'>
				<Image className='pt- rounded-lg border ' src={picture5} />
				<a
					href='https://davlyatov07.github.io/wetherworld/'
					className='pb-11 text-[18px]'
				>
					{text.fp[language]}
				</a>
				<Image src={picture6} className='rounded-lg border ' />
				<a
					href='https://davlyatov07.github.io/calculator/'
					className='pb-11 text-[18px]'
				>
					{text.fc[language]}
				</a>
				<Image src={picture7} className='rounded-lg border' />
				<a
					href='https://davlyatov07.github.io/Todo-App/'
					className='pb-11 text-[18px]'
				>
					{text.fl[language]}
				</a>
			</div>
		</section>
	)
}
