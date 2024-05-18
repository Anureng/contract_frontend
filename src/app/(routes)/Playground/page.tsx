import Navbar from '@/app/component/Navbar'
import Playground from '@/app/component/Playground'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <Playground />
            <Navbar />
        </div>
    )
}

export default page
