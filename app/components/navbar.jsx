import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Transition, Dialog } from '@headlessui/react'

import { text } from '../util/text'
import { useLanguage } from '../hooks/useLanguage'

export default function Navbar({ openModal, closeMenu }) {
	const { language, handleChange, languages } = useLanguage()
	const links = [
		{ url: '#home', text: text.homs[language] },
		{ url: '#about', text: text.about[language] },
		{ url: '#skills', text: text.skills[language] },
		{ url: '#portfolio', text: text.portfolio[language] },
		{ url: '#contact', text: text.contacts[language] },
	]
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<nav className='w-full px-16 text-black'>
			<ul className='w-full hidden justify-between font-bold text-lg py-6 border-b-2 md:flex '>
				{links.map((link, index) => (
					<li key={index}>
						<Link href={link.url}>{link.text}</Link>
					</li>
				))}
			</ul>

			<div className='flex md:hidden justify-end z-50 absolute top-14 right-5'>
				<button onClick={toggleMenu}>
					{isOpen ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-10'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					) : (
						<svg
							width={33}
							height={20}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='size-10'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Mobile Menu */}
			<Transition show={isOpen} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-40 md:hidden'
					onClose={toggleMenu}
				>
					<Transition.Child
						as={Fragment}
						enter='transition ease-in-out transform'
						enterFrom='-translate-x-full'
						enterTo='translate-x-0'
						leave='transition ease-in-out transform'
						leaveFrom='translate-x-0'
						leaveTo='-translate-x-full'
					>
						<div className='fixed inset-0 bg-black/25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto min-h-screen bg-white bg-opacity-70 w-full h-screen'>
						<Transition.Child
							as={Fragment}
							enter='transition ease-in-out duration-200 transform'
							enterFrom='translate-x-full'
							enterTo='translate-x-0'
							leave='transition ease-in-out duration-200 transform'
							leaveFrom='translate-x-0'
							leaveTo='translate-x-full'
						>
							<div className='w-full h-full bg-white  bg-opacity-80 relative p-4'>
								<Dialog.Panel>
									<div className='w-full h-full flex flex-col pt-10'>
										{links.map((link, index) => (
											<Link key={index} href={link.url} onClick={toggleMenu}>
												<h1 className='text-[34px] font-bold text-start pl-3 mb-8'>
													{link.text}
												</h1>
											</Link>
										))}
									</div>
									<button
										onClick={handleChange}
										className='text-[34px] flex md:hidden justify-end z-50 absolute bottom-28	  -right-14 rotate-90 '
									>
										<span className='divide-x-2 divide-black overflow-hidden '>
											{languages.map(lang => {
												return (
													<span
														key={lang.lang}
														className={`p-4 ${
															lang.lang === language ? 'font-bold' : ''
														}`}
													>
														{lang.text}
													</span>
												)
											})}
										</span>
									</button>
									{/* <div className='text-[34px] flex md:hidden justify-end z-50 absolute bottom-16 pb-12 right-0'>
										<button onClick={handleChange} className='rotate-90 pl-5'>
											<span>RU|</span>
											<span className=''>ENG</span>
										</button> */}
									{/* </div> */}
								</Dialog.Panel>
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</nav>
	)
}
