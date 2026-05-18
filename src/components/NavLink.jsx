'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, className, children}) => {
    const pathname = usePathname();


    const isActive = href === pathname;

    // console.log('path name', pathname, 'is active', isActive);

    return (
        <Link
            href={href}
            className={` font-medium ${
                isActive
                ? "text-[#f59e0b] border-b-2 border-[#f59e0b]"
                : "text-gray-600 hover:text-[#f59e0b]"
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;