'use client'
import { createContext, useContext, useState } from 'react'

export const LanguageContext = createContext(undefined)
const languages = [
	{
		lang: 'en',
		text: 'ENG',
	},

	{
		lang: 'ru',
		text: 'RU',
	},
]
export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(languages[0].lang)

	function handleChange() {
		if (language === 'en') {
			setLanguage(languages.filter(lang => lang.lang === 'ru')[0].lang)
		} else {
			setLanguage(languages.filter(lang => lang.lang === 'en')[0].lang)
		}
	}
	return (
		<LanguageContext.Provider value={{ language, languages, handleChange }}>
			{children}
		</LanguageContext.Provider>
	)
}
export const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) return console.log('Use context at the main jsx file')

	return context
}

// export const LanguageProvider = ({ children }) => {
// 	return (
// 		<LanguageContext.Provider value={{}}>{children}</LanguageContext.Provider>
// 	)
// }
// export const useLanguage = () => {
// 	const context = useContext(LanguageContext)
// }
