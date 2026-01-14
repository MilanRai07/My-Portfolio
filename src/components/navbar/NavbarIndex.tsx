'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavbarItems } from '@/localData/NavbarItems'
import Appearance from './Appearance'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import HamburgerMenu from './HamburgerMenu'

const NavbarIndex = () => {
    const [active, setActive] = useState<String>('Home');
    const [showHam, setShowHam] = useState<boolean>(false);

    const location = usePathname();

    useEffect(() => {
        if (location == "/" || location == "Home") {
            setActive('Home')
        } else if (location.startsWith('/about')) {
            setActive("About Me")
        } else if (location.startsWith('/projects')) {
            setActive('Projects')
        } else {
            setActive("Contact Me")
        }
    }, [location])
    return (
        <nav className={`w-full flex justify-between items-center px-20 py-4 max-lg:px-14 max-md:px-10 max-sm:px-0 relative`}>
            {/* my logo */}
            <div>
                <Image
                    alt="milan's portfolio"
                    src='/logo.svg'
                    width={100}
                    height={100}
                    className='w-16 max-lg:w-14 max-sm:hidden'

                />
            </div>
            {/* navbar listes */}
            <ul className='flex justify-between items-center gap-10 text-sm max-lg:text-xs max-lg:gap-6 font-semibold font-sans max-sm:hidden'>
                {
                    NavbarItems.map((item, index) => {
                        return (
                            <Link key={index} href={item.href}>
                                <li className="flex gap-2 items-center cursor-pointer relative">
                                    <item.icon className="w-5" />
                                    <p>{item.title}</p>

                                    {active == item.title && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute -bottom-1 left-0 h-[2.5px] w-[40%] bg-black rounded-lg"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>

            {/* appearance mode */}
            <div className='max-sm:hidden'>
                <Appearance />
            </div>

            {/* in small screen below with hamburger */}
            <div className='hidden max-sm:flex w-1/3 ml-5'>
                <Appearance />
            </div>

            {/* my logo */}
            <div className='w-1/3 hidden max-sm:flex justify-center'>
                <Image
                    alt="milan's portfolio"
                    src='/logo.svg'
                    width={100}
                    height={100}
                    className='w-14'

                />
            </div>
            {/* hamburger */}
            <div className='hidden max-sm:flex w-1/3 justify-end mr-5'
                onClick={() => setShowHam(true)}
            >
                <Menu
                    className='w-5 h-5'
                />
            </div>

            {/* hanburger menu */}
            <AnimatePresence mode="wait">
                {
                    showHam && (
                        <HamburgerMenu setShowHam={setShowHam} />
                    )
                }
            </AnimatePresence>
        </nav>
    )
}

export default NavbarIndex
