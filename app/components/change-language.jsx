import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'

export default function Language() {
	const { language, languages, handleChange } = useLanguage()
	return (
		<button
			onClick={handleChange}
			className='hidden self-center -rotate-90 text-xl items-end h-20  md:flex '
		>
			<span className='divide-x-2 divide-black overflow-hidden '>
				{languages.map(lang => {
					return (
						<span
							key={lang.lang}
							className={`p-4 ${lang.lang === language ? 'font-bold' : ''}`}
						>
							{lang.text}
						</span>
					)
				})}
			</span>
		</button>
	)
}
