import CheckCode from '@/app/component/CheckCode';
import Footer from '@/app/component/Footer';
import Navbar from '@/app/component/Navbar';
import Playground from '@/app/component/Playground';
import Solve from '@/app/component/Solve';
import React from 'react'

export interface IParams {
    id: string;
}
const page = ({ params }: { params: IParams }) => {
    return (
        <div>
            <Navbar />
            <Solve params={params} />
            <Footer />
        </div>
    )
}

export default page
