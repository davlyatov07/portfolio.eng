import { Transition, Dialog } from '@headlessui/react'
import { Fragment } from 'react'
import Link from 'next/link'
import { text } from '../util/text'
import { useLanguage } from '../hooks/useLanguage'

export default function Modal({ open, closeMenu }) {
	const { language } = useLanguage()
	const links = [
		{ url: '#home', text: text.homs[language] },
		{ url: '#about', text: 'About' },
		{ url: '#skills', text: 'Skills' },
		{ url: '#portfolio', text: 'Portfolio' },
		{ url: '#contact', text: 'Contact' },
	]
	return (
		<Transition appear show={open} as={Fragment}>
			<Dialog as='div' className='relative z-40 md:hidden' onClose={closeMenu}>
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
						<div className='w-full h-full bg-white bg-opacity-80 relative p-4'>
							<Dialog.Panel>
								<div className='w-full h-full flex flex-col pt-10'>
									{text.homs[language]}
									{links.map((link, index) => (
										<Link key={index} href={link.url} onClick={closeMenu}>
											<h1 className='text-[34px] font-bold text-start pl-3 mb-8'>
												{link.text}
											</h1>
										</Link>
									))}
								</div>
							</Dialog.Panel>
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition>
	)
}
