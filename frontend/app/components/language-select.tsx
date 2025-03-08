"use client";

import Link from 'next/link';
import React, { useState } from 'react';

interface LanguageSelectProps {
    className?: string;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({ className = "" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState('en');

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    const combinedClasses = `language-select relative ${className}`;

    return (
        <div
            className={combinedClasses}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="language-button ">{language.toUpperCase()}</button>
            {
                isOpen && (
                    <ul className="language-dropdown absolute top-full z-10 bg-white dark:bg-gray-800 flex flex-col items-center">
                        <li onClick={() => handleLanguageChange('tr')}><Link href="">TR</Link></li>
                        <li onClick={() => handleLanguageChange('en')}><Link href="">EN</Link></li>
                    </ul>
                )
            }
        </div >
    );
};

export default LanguageSelect;