import { Button } from '@/components/ui/button'
import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="bg-gray-900 text-white py-6 md:py-12 h-screen flex items-center justify-center ">
                <div className="container mx-auto flex px-4 md:px-6 flex-col md:flex-row ">
                    <div className=" flex flex-col w-3/5 gap-8 items-center">
                        <div className="space-y-4">
                            <h1 className="text-3xl md:text-4xl font-bold">Solve Problem</h1>
                            <p className="text-gray-300">
                                Unleash your coding prowess and conquer any challenge with our powerful problem-solving tools. Get started
                                now and let your creativity soar.
                            </p>
                            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                                <a href="/Playground">
                                    Solve and Compile
                                </a>
                            </Button>
                        </div>
                        <div>
                            <p>
                                Explore our vast collection of coding challenges and algorithms to sharpen your skills. From
                                beginner-friendly exercises to mind-bending puzzles, weve got something for every level of programmer.
                            </p>
                            <p className="mt-4">
                                Join our vibrant community of problem-solvers and collaborate with like-minded individuals to tackle
                                complex issues and unlock new possibilities.
                            </p>
                        </div>
                    </div>
                    <img className='w-3/5 h-96' src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="loading..." />
                </div>
            </header>
        </div>
    )
}

export default Header
