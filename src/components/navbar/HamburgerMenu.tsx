import { NavbarItems } from '@/localData/NavbarItems'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { X } from 'lucide-react'
import {easeInOut, motion} from "framer-motion"

type props = {
    setShowHam: React.Dispatch<React.SetStateAction<boolean>>
}

const HamburgerMenu: React.FC<props> = ({ setShowHam }) => {
    return (
        <motion.div className='w-full absolute z-10 pt-4 top-0 bg-white'
        initial={{
            opacity:0
        }}
        animate={{
            opacity:1
        }}
        exit={{
            opacity:0
        }}
        transition={{
            duration:0.4,
            ease:easeInOut
        }}
        >
            <div className='flex justify-between px-5 mb-5'>
                <Image
                    alt="milan's portfolio"
                    src='/logo.svg'
                    width={100}
                    height={100}
                    className='w-14'

                />
                <X
                    onClick={() => setShowHam(false)}
                />
            </div>
            <ul className=''>
                {
                    NavbarItems.map((item, index) => {
                        return (
                            <Link key={index}
                                href={item.href}
                            >
                                <li className='w-full flex items-center gap-3 text-xs pl-5 py-1'>
                                    <item.icon
                                        className='w-4'
                                    />
                                    {item.title}
                                </li>
                                <div className='w-full h-px bg-black/50'>

                                </div>
                            </Link>
                        )
                    })
                }
            </ul>
        </motion.div>
    )
}

export default HamburgerMenu
