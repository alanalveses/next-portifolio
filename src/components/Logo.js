import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

import logo from "../../public/images/logo.png";
import logoRedu from "../../public/images/logo-redu.png";
import Image from "next/image";

const MotionLink = motion(Link);

const Logo = () => {
    return (
        <div className='flex items-center justify-center mt-2'>
            <MotionLink href="/"
            className='w-16 h-16 text-light flex items-center justify-center rounded-full text-2x1 font-bold border border-solid border-transparent dark:bg-light dark:border-light'

            whileHover={{
                backgroundColor:["#121212", "rgba(131,58,180,1)", "rgba(0, 0, 255, 1)", "rgba(0, 216, 255, 1)", "rgba(253,29,29,1)", "rgba(255, 0, 0, 1)", "rgba(255, 90, 0, 1)", "rgba(252,176,69,1)","rgba(131,58,180,1)", "rgba(245, 40, 145, 0.8)","rgba(255, 0, 154, 1)", "rgba(255, 0, 255, 1)", "rgba(169, 255, 34, 1)", "rgba(46, 255, 154, 1)", "#121212"],
                transition:{duration:2, repeat: Infinity}
            }}
            >
                <Image src={logoRedu}
                alt={"Logo"}
                className="p-1 w-full h-auto"/>
                </MotionLink>    
        </div>
    )
}


export default Logo