"use client";

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from './ui/button';


const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
}

const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    },
    hover: {
        scale: 1.1,
        rotate: [0, -10, 10, -10, 0],
        transition: {
            duration: 0.4
        }
    }
}

const buttonVariants = {
    hidden: { scale: 0 },
    visible: {
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1.5  // Delay the button's appearance after marquee
        }
    },
    tap: {
        scale: 0.95
    }
}

export default function Links() {

    return (
        <div className="flex flex-col items-center lg:items-start mb-8">
            <motion.div
                className="flex space-x-6 mb-6"
                variants={itemVariants}
            >
                <motion.a
                    href="https://github.com/gidorah"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialIconVariants}
                    whileHover="hover"
                >
                    <FaGithub
                        className="text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com/in/onur-aky%C3%BCz-53a16340/"
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={socialIconVariants}
                    whileHover="hover"
                >
                    <FaLinkedin
                        className="text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
                </motion.a>
            </motion.div>

            {/* Removed hover effect here */}
            <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileTap="tap"
            >
                <Button>Get in Touch</Button>
            </motion.div>
        </div>
    )
}