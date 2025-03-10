'use client'

import { usePathname } from 'next/navigation'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'

export default function Nav() {
    const path = usePathname()

    const links = [
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

    return (
        <div className="mt-8 mb-16">
            <nav className="text-text border-border dark:border-darkBorder shadow-light dark:shadow-dark mx-auto flex w-max gap-5 rounded-base border-2 bg-bg p-2.5 px-5 text-sm font-base sm:text-base w450:gap-4">
                {links.map((link) => {
                    return (
                        <Button key={link.text}>{link.text}</Button>
                    )
                })}
                <ThemeSwitcher />
            </nav>
        </div>
    )
}
