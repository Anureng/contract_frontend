import About from '@/app/component/About'
import Footer from '@/app/component/Footer'
import Navbar from '@/app/component/Navbar'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Footer />
        </div>
    )
}

export default page
