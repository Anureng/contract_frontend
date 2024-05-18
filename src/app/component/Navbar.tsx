import { CodeIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/" className="flex items-center gap-4">
                        <CodeIcon className="h-6 w-6" />
                        <h1 className="text-xl font-bold">Coding Practice</h1>
                    </Link>
                </div>
                <nav className="flex items-center gap-4">
                    <Link className="hover:underline" href="#">
                        Solidity
                    </Link>
                    <Link className="hover:underline" href="/Problem">
                        Problem
                    </Link>
                    <Link className="hover:underline" href="/About">
                        About
                    </Link>
                    <Link
                        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:focus:ring-offset-gray-800"
                        href="/Playground"
                    >
                        Playground
                    </Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
