'use client'
import { useState } from 'react'
import HomeSection from './home'
import AboutSection from './about'
import SkillsSection from './skills'
import PortfolioSection from './portfolio'
import ContactSection from './contacts'
import Navbar from './navbar'
import Modal from './modal'

export default function MainComponent() {
	const [openModal, setOpenModal] = useState(false)

	function closeMenu() {
		setOpenModal(false)
	}

	function openMenu() {
		setOpenModal(true)
	}

	return (
		<>
			<div className='flex justify-center flex-col max-w-screen-xxl  text-black'>
				<Navbar openModal={openModal} closeMenu={closeMenu} />
				<HomeSection />
				<AboutSection />
				<SkillsSection />
				<PortfolioSection />
				<ContactSection />
				<Modal open={openModal} closeMenu={closeMenu} />
			</div>
		</>
	)
}
