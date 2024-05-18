import { Button } from '@/components/ui/button'
import { BookIcon, CodeIcon, Link, TimerIcon, UsersIcon } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <div>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Elevate Your Coding Skills
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                Unlock your full potential with our comprehensive coding practice platform. Sharpen your skills, track
                                your progress, and connect with a supportive community.
                            </p>
                        </div>
                        <Button>
                            <a href="/Problem">
                                Practise
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col items-center space-y-4">
                            <CodeIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                            <div className="space-y-2 text-center">
                                <h3 className="text-xl font-semibold">Practice Problems</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Tackle a vast library of coding challenges, ranging from beginner to advanced levels, to hone your
                                    problem-solving skills.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <BookIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                            <div className="space-y-2 text-center">
                                <h3 className="text-xl font-semibold">Learning Resources</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Explore a curated collection of tutorials, articles, and videos to deepen your understanding of
                                    programming concepts.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <TimerIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                            <div className="space-y-2 text-center">
                                <h3 className="text-xl font-semibold">Progress Tracking</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Monitor your progress, set goals, and track your improvement over time to stay motivated and on track.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center space-y-4">
                            <UsersIcon className="h-12 w-12 text-gray-500 dark:text-gray-400" />
                            <div className="space-y-2 text-center">
                                <h3 className="text-xl font-semibold">Community Support</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Connect with like-minded coders, share insights, and collaborate on projects within our vibrant
                                    community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Testimonials
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Users Say</h2>
                            </div>
                            <div className="space-y-6">
                                <div className="space-y-4">
                                    <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                                        “This coding practice platform has been a game-changer for me. The wide range of challenges and the
                                        supportive community have helped me improve my skills exponentially.”
                                    </blockquote>
                                    <div>
                                        <div className="font-semibold">Jane Doe</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer, Acme Inc</div>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal">
                                        “This platform has been an invaluable resource for me. The progress tracking and learning materials
                                        have helped me systematically improve my coding skills.”
                                    </blockquote>
                                    <div>
                                        <div className="font-semibold">John Smith</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Software Developer, Globex Corp</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            alt="Testimonials"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            height="310"
                            src="https://images.unsplash.com/photo-1562813733-b31f71025d54?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            width="550"
                        />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default About
