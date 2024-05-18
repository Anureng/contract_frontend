"use client"
import { Button } from '@/components/ui/button';
import { javascript } from '@codemirror/lang-javascript';
import ReactCodeMirror from '@uiw/react-codemirror';
import axios from 'axios';
import { MaximizeIcon, PlayIcon, SaveIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react'
export interface IParams {
    id: string;
}

export interface IDATA {
    Description: String,
    Level: String,
    Name: String,
    Output: String,
    StarterCode: String
}
const Solve = ({ params }: { params: IParams }) => {

    const [result, setResult] = useState<IDATA>()
    const [value, setValue] = React.useState<string>("");
    const [output, setOutput] = useState<any>("")
    const [error, setError] = useState<any>("")
    const onChange = React.useCallback((val: React.SetStateAction<string>, viewUpdate: any) => {
        console.log('val:', val);
        setValue(val);
    }, []);
    useEffect(() => {
        const data = async () => {
            try {
                const data = await axios.get(`https://contract-backend-q7d2.onrender.com/question/${params.id}`)
                console.log(data.data);
                setResult(data.data)
                setValue(data.data.StarterCode)
            } catch (error) {
                console.log(error);
            }
        }
        data()
    }, [])

    const handleAddData = async () => {
        try {
            const encodedParams = new URLSearchParams();
            encodedParams.set('LanguageChoice', '46');
            encodedParams.set('Program', value);

            const options = {
                method: 'POST',
                url: 'https://code-compiler.p.rapidapi.com/v2',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'X-RapidAPI-Key': '20bd352e6cmsh3125d8d0defae0dp17d1c3jsne58ce6178fc7',
                    'X-RapidAPI-Host': 'code-compiler.p.rapidapi.com'
                },
                data: encodedParams,
            };

            const response = await axios.request(options);
            console.log(response.data)
            const output = response.data.Result ? response.data.Result.trim() : "";
            if (result?.Output === output) alert("Solved")
            else alert("Not Solved");

            setError(response.data.Errors)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <main className="flex-1 grid grid-cols-2 gap-6 p-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold">Code Editor</h2>
                        <div className="flex items-center gap-2">
                            <Button size="icon" variant="ghost" onClick={handleAddData}>
                                <PlayIcon className="h-5 w-5" />
                            </Button>
                            <Button size="icon" variant="ghost">
                                <SaveIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <ReactCodeMirror value={value} height="400px" extensions={[javascript({ jsx: true })]} onChange={onChange} />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 space-y-8 rounded-lg shadow-md p-6">
                    <p className='text-4xl font-bold'>{result?.Name}</p>
                    <p className='text-2xl font-semibold'>{result?.Level}</p>
                    <p>{result?.Description}</p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 col-span-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold">Errors and Warnings</h2>
                        <div className="flex items-center gap-2">
                            <Button size="icon" variant="ghost">
                                <MaximizeIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="h-[200px] rounded-md bg-gray-200 dark:bg-gray-700 p-4 overflow-auto">
                        <pre className="text-sm font-mono text-red-500 dark:text-red-400">
                            {error}
                        </pre>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Solve
