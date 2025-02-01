import { text } from '../util/text'
import { useLanguage } from '../hooks/useLanguage'
export default function AboutSection() {
	const { language } = useLanguage()
	return (
		<section
			id='about'
			className='text-2xl flex flex-col justify-center items-center py-20 gap-6  text-black bg-neutral-100'
		>
			<h1 className='text-[34px] font-bold pt-12'>{text.me[language]}</h1>
			<div className='w-1/2 flex flex-col text-center gap-6 text-[18px]'>
				<p>{text.bb[language]}</p>
				<p>{text.vv[language]}</p>
				<p>{text.zz[language]}</p>
			</div>
		</section>
	)
}
