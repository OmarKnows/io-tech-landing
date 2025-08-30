'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

export default function Navbar() {
	const [servicesOpen, setServicesOpen] = useState(false);
	const [searchOpen, setSearchOpen] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [servicesMobileOpen, setServicesMobileOpen] = useState(false);

	const navItems: { label: string; href?: string; dropdown?: boolean }[] = [
		{ label: 'Home', href: '#home' },
		{ label: 'About us', href: '#about' },
		{ label: 'Services', dropdown: true },
		{ label: 'Blog', href: '#blog' },
		{ label: 'Our Team', href: '#team' },
		{ label: 'Contact us', href: '#contact' },
	];

	return (
		<nav
			className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
				servicesOpen ? 'bg-primary' : 'bg-transparent'
			}`}
		>
			<div className='max-w-7xl mx-auto px-6 py-9 flex items-center justify-center relative'>
				<div
					className={`hidden md:flex items-center space-x-6 transition-opacity duration-300 ${
						searchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
					}`}
				>
					{navItems.map((item) => {
						if (item.dropdown) {
							return (
								<Popover key={item.label} open={servicesOpen} onOpenChange={setServicesOpen}>
									<PopoverTrigger asChild>
										<button className='flex items-center gap-1 text-white hover:opacity-80 transition'>
											{item.label} <ChevronDown size={18} />
										</button>
									</PopoverTrigger>
									<PopoverContent className='w-full'>
										<ul className='space-y-2'>
											<li>
												<a href='#'>Service 1</a>
											</li>
											<li>
												<a href='#'>Service 2</a>
											</li>
											<li>
												<a href='#'>Service 3</a>
											</li>
										</ul>
									</PopoverContent>
								</Popover>
							);
						}
						return (
							<a key={item.label} href={item.href || '#'} className='text-white hover:opacity-80 transition'>
								{item.label}
							</a>
						);
					})}
				</div>

				<div className='absolute right-0 flex items-center space-x-4 md:space-x-6'>
					<div className='flex items-center'>
						<motion.div
							className='flex items-center overflow-hidden border border-white rounded-md bg-transparent backdrop-blur-md'
							animate={{
								width: searchOpen ? '25rem' : '2.5rem',
								paddingLeft: searchOpen ? 8 : 0,
								paddingRight: searchOpen ? 8 : 0,
								borderWidth: searchOpen ? 1 : 0,
							}}
							transition={{ duration: 0.4, ease: 'easeInOut' }}
						>
							<button className='p-2 text-white' onClick={() => setSearchOpen((prev) => !prev)}>
								<Search size={18} />
							</button>
							<AnimatePresence>
								{searchOpen && (
									<motion.input
										key='search-input'
										type='text'
										className='bg-transparent text-white outline-none ml-2 w-full'
										initial={{ opacity: 0, width: 0 }}
										animate={{ opacity: 1, width: '100%' }}
										exit={{ opacity: 0, width: 0 }}
										transition={{ duration: 0.3 }}
									/>
								)}
							</AnimatePresence>
						</motion.div>
					</div>
					<Button className='hidden md:inline-flex text-white p-3 rounded-md text-xs font-medium' variant='outline'>
						Book Appointment
					</Button>
					<button
						aria-label='Toggle menu'
						className='md:hidden p-2 rounded-md text-white hover:bg-white/10 transition'
						onClick={() => setMobileOpen((o) => !o)}
					>
						{mobileOpen ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>

				<AnimatePresence>
					{mobileOpen && (
						<motion.div
							key='mobile-menu'
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ duration: 0.25 }}
							className='md:hidden absolute top-full left-0 w-full px-6 pb-6 pt-4 flex flex-col gap-4 bg-primary/90 backdrop-blur-md border-b border-white/10'
						>
							<ul className='flex flex-col gap-3'>
								{navItems.map((item) => {
									if (item.dropdown) {
										return (
											<li key={item.label} className='flex flex-col'>
												<button
													onClick={() => setServicesMobileOpen((o) => !o)}
													className='flex items-center justify-between text-white hover:opacity-80 transition'
												>
													<span>{item.label}</span>
													<motion.span
														animate={{ rotate: servicesMobileOpen ? 180 : 0 }}
														transition={{ duration: 0.2 }}
													>
														<ChevronDown size={18} />
													</motion.span>
												</button>
												<AnimatePresence initial={false}>
													{servicesMobileOpen && (
														<motion.ul
															key='services-sub'
															initial={{ height: 0, opacity: 0 }}
															animate={{ height: 'auto', opacity: 1 }}
															exit={{ height: 0, opacity: 0 }}
															transition={{ duration: 0.25, ease: 'easeInOut' }}
															className='pl-4 mt-2 flex flex-col gap-2 text-sm'
														>
															<li>
																<a href='#' className='text-white/90 hover:opacity-80 transition'>
																	Service 1
																</a>
															</li>
															<li>
																<a href='#' className='text-white/90 hover:opacity-80 transition'>
																	Service 2
																</a>
															</li>
															<li>
																<a href='#' className='text-white/90 hover:opacity-80 transition'>
																	Service 3
																</a>
															</li>
														</motion.ul>
													)}
												</AnimatePresence>
											</li>
										);
									}
									return (
										<li key={item.label}>
											<a className='text-white block hover:opacity-80 transition' href={item.href || '#'}>
												{item.label}
											</a>
										</li>
									);
								})}
							</ul>
							<Button variant='outline'>Book Appointment</Button>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
}
