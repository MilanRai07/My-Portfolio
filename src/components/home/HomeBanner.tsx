'use client'
import React from 'react'
import Image from "next/image";
import { easeInOut, motion } from "framer-motion"
import Link from 'next/link';

const HomeBanner: React.FC = () => {

    return (
        <main className='flex justify-between items-center max-sm:flex-col-reverse max-sm:gap-5'>
            <motion.div className='w-[45%] space-y-4 max-md:space-y-3 max-sm:w-full'
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: easeInOut }}
            >
                <h2 className="text-4xl max-lg:text-2xl max-md:text-lg font-bold mb-4 max-sm:mb-2 font-mono">
                    Welcome To My Portfolio
                    <motion.span
                        className="inline-block ml-2 origin-bottom"
                        animate={{ rotate: [0, 14, -8, 14, -4, 0] }}
                        transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 2,
                        }}
                    >
                        👋
                    </motion.span>
                </h2>
                <p className="font-sans text-lg max-lg:text-sm max-md:text-xs leading-9 max-lg:leading-5 text-black/60 tracking-wider">
                    I'm Milan Rai, a frontend developer who loves turning designs into smooth, interactive experiences.
                </p>

                <div className='flex items-center gap-4 font-medium'>
                    <Link href='/about'>
                        <button className='text-lg max-lg:text-base max-md:text-sm px-4 py-2 rounded-lg text-white bg-black/80 hover:bg-white border border-black/80 hover:text-black transition-all duration-500 '>
                            About Me
                        </button>
                    </Link>

                    <a
                        href='/MilanRaiFrontendDeveloperCV.pdf'
                        target='_black'
                        rel="noopener noreferrer"
                    >
                        <button className='text-lg max-lg:text-base max-md:text-sm px-4 py-2 rounded-lg text-black bg-white hover:bg-black/80 border border-black/80 hover:text-white transition-all duration-500 '>
                            Resume
                        </button>
                    </a>
                </div>

            </motion.div>

            <motion.div className="w-[45%] h-111.5 max-lg:h-96 max-sm:h-64 rounded-md overflow-hidden max-sm:w-full"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: easeInOut }}
            >
                <Image
                    alt="Milan rai"
                    src="/port.jpg"
                    width={1000}
                    height={1000}
                    loading='eager'
                    className="w-full h-full object-cover hover:scale-105 duration-300 transition-all ease-in-out"
                />

            </motion.div>
        </main>
    )
}

export default HomeBanner
