import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline'
import { twMerge } from "@/utils/tailwindMerger";
import { Navigation } from './dialog'

interface SidebarProps {
    navigation: Navigation[],
    setSidebarOpen: (value: boolean) => void
}

const Header = ({ navigation, setSidebarOpen }: SidebarProps) => {

    return (
        <div className="flex h-32 justify-between">
            <div className="flex">
                <div className="flex flex-col sm:flex-row flex-shrink-0 items-center gap-0 sm:gap-3">
                    <div className='flex flex-shrink-0 items-center gap-3'>
                        <div className='h-3 w-3 bg-primary'></div>
                        <h3 className='text-2xl sm:text-3xl font-bold'>
                            Hein Diez
                        </h3>
                    </div>
                    <span className='hidden sm:block text-sm'>/</span>
                    <span className='font-light text-sm'>Software Engineer</span>
                </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
                {navigation.map(({name, href, current}) => {
                    return (
                        <a key={name}
                           href={href}
                           className={twMerge('inline-flex items-center  px-1 pt-1 text-sm font-light',
                               current ? ' text-primary' : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                           )}
                        >
                            {name}
                        </a>
                    )
                })}
            </div>
            <div className="-ml-2 mr-2 flex items-center md:hidden">
                <button type="button" onClick={() => setSidebarOpen(true)}
                        className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
                    <span className="sr-only">Open sidebar</span>
                    <Bars3Icon aria-hidden="true" className="h-6 w-6"/>
                </button>
            </div>
        </div>
    );
};

export default Header;