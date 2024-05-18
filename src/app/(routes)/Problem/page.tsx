import Footer from '@/app/component/Footer'
import Navbar from '@/app/component/Navbar'
import Problem from '@/app/component/Problem'
import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
    return (
        <div>
            <Navbar />
            <Problem />
            <Footer />
        </div>
    )
}

export default page
