import MainComponent from './components/main'

export default function Main() {
	return (
		<div>
			<MainComponent />
		</div>
	)
}

// 'use client'
// import picture1 from './images/Group 6-1.png'
// import picture2 from './images/Group 6-2.png'
// import picture3 from './images/Group 6.png'
// import picture4 from './images/Group 7.png'
// import Image from 'next/image'
// import person from './assets/person.jpeg'
// import picture5 from './images/picture5.png'
// import picture6 from './images/reebok_web1.png'
// import picture7 from './images/reebok_web.png'
// import pictur1 from './images/in.png'
// import pictur2 from './images/inst.png'
// import pictur3 from './images/be.png'
// import pictur4 from './images/bask.png'
// import { Transition, Dialog } from '@headlessui/react'
// import { Fragment, useState } from 'react'
// import Link from 'next/link'

// const links = [
// 	{`
// 		url: '#home',
// 		text: 'Home',
// 	},
// 	{
// 		url: '#about',
// 		text: 'About',
// 	},
// 	{
// 		url: '#skills',
// 		text: 'Skills',
// 	},
// 	{
// 		url: '#portfolio',
// 		text: 'Portfolio',
// 	},
// 	{
// 		url: '#contact',
// 		text: 'Contact',
// 	},
// ]

// export default function Main() {
// 	const [openModal, setOpenModal] = useState(false)

// 	function closeMenu() {
// 		setOpenModal(false)
// 	}

// 	function openMenu() {
// 		setOpenModal(true)
// 	}

// 	return (
// 		<>
// 			<style jsx global>{
// 				html {
// 					scroll-behavior: smooth;
// 				}
// 			}</style>
// 			<div className=' h- container mx-auto max-w-screen-xl pr-3 pl-3'>
// 				<nav className='w-full '>
// 					<ul className='w-full hidden justify-between font-bold text-lg py-6 border-b-2 md:flex'>
// 						{links.map((link, index) => {
// 							return (
// 								<li key={index}>
// 									<Link href={link.url}>{link.text}</Link>
// 								</li>
// 							)
// 						})}
// 					</ul>

// <div className='flex md:hidden justify-end z-50 absolute top-14 right-5 '>
// 	{openModal ? (
// 		<button
// 			className='flex md:hidden justify-end z-50 absolute  right-5'
// 			onClick={closeMenu}
// 		>
// 			<svg
// 				xmlns='http://www.w3.org/2000/svg'
// 				fill='none'
// 				viewBox='0 0 24 24'
// 				strokeWidth={1.5}
// 				stroke='currentColor'
// 				className='size-10'
// 			>
// 				<path
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 					d='M6 18 18 6M6 6l12 12'
// 				/>
// 			</svg>
// 		</button>
// 	) : (
// 		<div className=' '>
// 			<button onClick={openMenu}>
// 				<svg
// 					width={33}
// 					height={20}
// 					xmlns='http://www.w3.org/2000/svg'
// 					fill='none'
// 					viewBox='0 0 24 24'
// 					strokeWidth={1.5}
// 					stroke='currentColor'
// 					className='size-10'
// 				>
// 					<path
// 						strokeLinecap='round'
// 						strokeLinejoin='round'
// 						d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
// 					/>
// 				</svg>
// 			</button>
// 		</div>
// 	)}
// </div>
// 				</nav>

// 				{/* Home */}

// 				<section
// 					id='home'
// 					className='pt-10 mb-8 flex flex-col justify-start md:items-end md:flex-row items-start md:justify-between w-full relative '
// 				>
// 					<h1 className='text-[47px] md:text-5xl font-bold   '>
// 						Davlyatov <br /> Firdavs
// 					</h1>
// 					<p className='md:text-x1 md:self-end self-start text-[18px]	font-Gilroy-Medium'>
// 						Frontend developer <br /> 18 years old, Dushanbe
// 					</p>
// 					<button className='hidden self-center -rotate-90 text-xl  gap-2 items-end h-20  md:flex '>
// 						<span>RU|</span>
// 						<span className='font-bold'>ENG</span>
// 					</button>
// 				</section>
// 				<Image
// 					src={person}
// 					className='w-full h-[600px] object-cover pb-24 md:block hidden'
// 				></Image>
// 				<Image
// 					src={person}
// 					className='w-full h-full md:hidden pb-28 px-2 '
// 				></Image>
// 			</div>

// 			{/* About */}
// 			<section
// 				id='about'
// 				className='text-2xl flex flex-col justify-center items-center py-20 gap-6 bg-neutral-100'
// 			>
// 				<h1 className='text-[34px] font-bold pt-12 '>About Me</h1>
// 				<div className='w-1/2 flex flex-col text-center gap-6 text-[18px] '>
// 					<p>
// 						Hi, I'm Denis – Frontend developer from Dushanbe. <br /> I'm
// 						interested in design and everything connected <br /> with it.
// 					</p>
// 					<p>
// 						I'm studying at courses "Introduction to Frontend" in <br />{' '}
// 						Re-Skilss.
// 					</p>
// 					<p>
// 						Ready to implement excellent projects <br /> with wonderful people.
// 					</p>
// 				</div>
// 			</section>

// 			{/* Skills */}
// 			<section id='skills' className='bg-[#ffffff] w-full text-center py-20 '>
// 				<h1 className='text-4xl font-bold py-20'>Skills</h1>
// 				<p className='text-[18px] '>I work in such programs as</p>
// 				<div className='py-12 flex justify-center md:flex-row flex-col gap-20 items-center'>
// 					<Image src={picture1}></Image>
// 					<Image src={picture2}></Image>
// 					<Image src={picture3}></Image>
// 					<Image src={picture4}></Image>
// 				</div>
// 			</section>

// 			{/* Portfolio */}
// 			<section
// 				id='portfolio'
// 				className='bg-neutral-100 w-full text-center py-20'
// 			>
// 				<h1 className='text-4xl font-bold pt-10 '>Portfolio</h1>
// 				<div className='flex justify-center items-center flex-col gap-12 px-10	'>
// 					<Image className='pt-14' src={picture5}></Image>
// 					<a href='' className=' pb-11 text-[18px] '>
// 						Online fashion store - Homepage
// 					</a>
// 					<Image src={picture6}></Image>
// 					<a href='' className='pb-11 text-[18px]'>
// 						Reebok Store - Concept
// 					</a>
// 					<Image src={picture7}></Image>
// 					<a href='' className='pb-11 text-[18px]'>
// 						Braun Landing Page - Concept
// 					</a>
// 				</div>
// 			</section>

// 			{/* Contacts */}
// 			<section id='contact' className='w-full text-center py-20  '>
// 				<h1 className='text-4xl font-bold pt-10 pb-6'>Contacts</h1>
// 				<p className='text-[18px] pb-6'>
// 					Want to know more or just chat? You are welcome!
// 				</p>
// 				<button className=' bg-black text-white text-[18px] rounded-full p-2 pr-5 pl-5'>
// 					Send message
// 				</button>
// 				<div className='flex justify-center gap-12 pt-20 '>
// 					<Image src={pictur1}></Image>
// 					<Image src={pictur2}></Image>
// 					<Image src={pictur3}></Image>
// 					<Image src={pictur4}></Image>
// 				</div>
// 			</section>

// 			<Transition appear show={openModal} as={Fragment}>
// 				<Dialog
// 					as='div'
// 					className='relative z-40 md:hidden'
// 					onClose={closeMenu}
// 				>
// 					<Transition.Child
// 						as={Fragment}
// 						enter='transition ease-in-out transform'
// 						enterFrom='-translate-x-full'
// 						enterTo='translate-x-0'
// 						leave='transition ease-in-out transform'
// 						leaveFrom='translate-x-0'
// 						leaveTo='-translate-x-full'
// 					>
// 						<div className='fixed inset-0 bg-black/25' />
// 					</Transition.Child>

// 					<div className='fixed inset-0 overflow-y-auto min-h-screen bg-white bg-opacity-70 w-full h-screen'>
// 						<Transition.Child
// 							as={Fragment}
// 							enter='transition ease-in-out duration-200 transform'
// 							enterFrom='translate-x-full'
// 							enterTo='translate-x-0'
// 							leave='transition ease-in-out duration-200 transform'
// 							leaveFrom='translate-x-0'
// 							leaveTo='translate-x-full'
// 						>
// 							<div className='w-full h-full bg-white bg-opacity-80 relative p-4'>
// 								<Dialog.Panel>
// 									<div className='w-full h-full flex flex-col pt-10'>
// 										{links.map((link, index) => (
// 											<Link key={index} href={link.url} onClick={closeMenu}>
// 												<h1 className='text-[34px] font-bold text-start pl-3 mb-8'>
// 													{link.text}
// 												</h1>
// 											</Link>
// 										))}
// 									</div>
// 									{/* Кнопка выбора языка */}
// 									<div className='text-[34px] flex md:hidden justify-end z-50 absolute bottom-16 pb-12 right-0'>
// 										<button className='rotate-90 pl-5'>
// 											<span>RU|</span>
// 											<span className='font-bold'>ENG</span>
// 										</button>
// 									</div>
// 								</Dialog.Panel>
// 							</div>
// 						</Transition.Child>
// 					</div>
// 				</Dialog>
// 			</Transition>
// 		</>
// 	)
