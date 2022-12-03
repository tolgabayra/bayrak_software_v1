import React from 'react'
import { Tooltip } from '@chakra-ui/react'



export default function Leftbar() {
    return (
        <div className="bg-white dark:bg-gray-900 dark:border-gray-800 w-20 flex-shrink-0 border-r border-gray-200 flex-col hidden sm:flex">
            <div className="h-16 text-blue-500 flex items-center justify-center">
                <img src='https://www.svgrepo.com/show/429961/maintenance-repair-construction.svg' width="40" />
            </div>

            <nav className="flex mx-auto flex-grow mt-4 flex-col text-gray-400 space-y-4">


                <Tooltip label='Dashboard' placement='right' bg="blue.500">
                <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </button>
                </Tooltip>
              
                <button className="h-10 w-12 dark:bg-gray-700 dark:text-white rounded-md flex items-center justify-center bg-blue-100 text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                </button>
                <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                        <line x1="12" y1="11" x2="12" y2="17"></line>
                        <line x1="9" y1="14" x2="15" y2="14"></line>
                    </svg>
                </button>
                <button className="h-10 w-12 dark:text-gray-500 rounded-md flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="3" width="7" height="7"></rect>
                        <rect x="14" y="3" width="7" height="7"></rect>
                        <rect x="14" y="14" width="7" height="7"></rect>
                        <rect x="3" y="14" width="7" height="7"></rect>
                    </svg>
                </button>
            </nav>
        </div>

    )
}