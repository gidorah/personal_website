'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'

interface NavLink {

    path: string;
    text: string;
}

const links: NavLink[] = [
    {
        path: '/',
        text: 'Home',
    },
    {
        path: '/about',
        text: 'About',
    },
    {
        path: '/work',
        text: 'Work',
    },
]

export default function Nav() {
    const path = usePathname()

    return (
        <div className="mt-8 mb-16" >
            <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex w-max gap-5 rounded-base border-2 bg-bg p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">
                {links.map((link) => {
                    return (
                        <Link href={link.path} key={link.text}>
                            <Button className={path === link.path ? 'bg-main ' : 'bg-secondary'}>
                                {link.text}
                            </Button>
                        </Link>
                    )
                })}
                {/* <ThemeSwitcher /> */}
            </nav>
        </div>
    )
}
