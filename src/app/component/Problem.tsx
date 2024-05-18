"use client"
import { Button } from '@/components/ui/button'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface IDATA {
    _id: String
    Description: String,
    Level: String,
    Name: String,
    Output: String
}
const Problem = () => {
    const [details, setDetails] = useState<IDATA[]>([])

    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const data = async () => {
            try {
                const data = await axios.get("https://contract-backend-q7d2.onrender.com/question")
                console.log(data);

                setDetails(data.data)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }

        data()
    }, [])
    return (
        <div className="overflow-x-auto w-full h-[35rem] flex items-center justify-center">
            {
                loading ? "Loading..." : (
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th className="px-6 py-3" scope="col">
                                    Name
                                </th>
                                <th className="px-6 py-3" scope="col">
                                    Level
                                </th>
                                <th className="px-6 py-3" scope="col">
                                    <span className="sr-only">Solve</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((el, i) => (
                                <tr key={String(el._id)} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="px-6 py-4">{el.Name}</td>
                                    <td className="px-6 py-4">{el.Level}</td>
                                    <td className="px-6 py-4">
                                        <Button size="sm">
                                            <Link href={`/Detail/${el._id}`}>
                                                Solve
                                            </Link>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                )
            }

        </div>
    )
}

export default Problem
