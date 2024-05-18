import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-lg font-bold">Playground</h3>
                        <p className="text-sm">© 2024 Playground. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link className="text-sm hover:underline" href="#">
                            Privacy Policy
                        </Link>
                        <Link className="text-sm hover:underline" href="#">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
