'use client'

import React, {ReactNode, useMemo, useState} from 'react'

import { HomeIcon, MapIcon } from '@heroicons/react/24/outline'
import Dialog from './sections/dialog'
import Headers from './sections/header'

type Props ={
    children: ReactNode,
    path: string,
}

export default function MasterLayout({ children, path }: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const navigation = useMemo(()=> {
        const list = [
            { name: 'About me', href: '/', icon: <HomeIcon /> },
            { name: 'Experience', href: '/experience', icon: <MapIcon /> },
            { name: 'Projects', href: '/projects', icon: <MapIcon /> },
            { name: 'Contact', href: '/contact', icon: <MapIcon /> },
        ]
        return list.map((item) => ({...item, current: item.href === path }) )
    }, [path])

    return (
        <>
            <div className="bg-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Headers setSidebarOpen={setSidebarOpen} navigation={navigation}/>
                </div>
            </div>
            <Dialog classNames='relative z-[1000] lg:hidden'
                    sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} navigation={navigation}/>
            <main className="">{children}</main>
        </>
    )
}
