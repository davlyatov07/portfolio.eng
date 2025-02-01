import Image from 'next/image'
import picture1 from '../assets/images/Group 6-1.png'
import picture2 from '../assets/images/Group 6-2.png'
import picture3 from '../assets/images/Group 6.png'
import picture4 from '../assets/images/Group 7.png'
import { text } from '../util/text'
import { useLanguage } from '../hooks/useLanguage'

export default function SkillsSection() {
	const { language } = useLanguage()
	return (
		<section
			id='skills'
			className='bg-[#ffffff] w-full text-center  text-black md:py-20 px-4'
		>
			<h1 className='text-4xl font-bold md:py-20 py-10'>{text.sk[language]}</h1>
			<p className='text-[18px]'>{text.mm[language]}</p>
			<div className='py-12 flex justify-center md:flex-row flex-col gap-20 items-center'>
				<Image src={picture1} />
				<Image src={picture2} />
				<Image src={picture3} />
				<Image src={picture4} />
			</div>
		</section>
	)
}
