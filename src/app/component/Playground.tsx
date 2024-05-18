"use client"
import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { MaximizeIcon, PlayIcon, SaveIcon } from 'lucide-react';
const Playground = () => {
    const [value, setValue] = React.useState<string>("console.log('hello world!');");
    const [output, setOutput] = useState<any>("")
    const [error, setError] = useState<any>("")
    const [language, setLanguage] = useState<string>("rust");
    const onChange = React.useCallback((val: React.SetStateAction<string>, viewUpdate: any) => {
        console.log('val:', val);
        setValue(val);
    }, []);


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
            setOutput(response.data)
            setError(response.data.Errors)
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddDataMotoKo = async () => {
        try {
            const fetchData = await axios.post("https://contract-backend-q7d2.onrender.com/motoko", {
                solCode: value
            })
            console.log(fetchData.data.result.stdout, "Fetched properly");
        } catch (error) {
            console.log(error);
        }
    }

    const handleAddDataSolidity = async () => {
        try {
            const fetchData = await axios.post("https://contract-backend-q7d2.onrender.com/compile", {
                solCode: value
            })
            setOutput(fetchData.data.outputData)
            setError("")
        } catch (error: any) {
            setError(error.response.data.errors)
            setOutput("")
        }
    }

    const handleRunCode = () => {
        switch (language) {
            case "rust":
                handleAddData();
                break;
            case "solidity":
                handleAddDataSolidity();
                break;
            case "motoko":
                handleAddDataMotoKo();
                break;
            default:
                console.log("Unsupported language");
        }
    }
    return (
        <div>
            <p></p>
            <main className="flex-1 grid grid-cols-2 gap-6 p-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold">Code Editor</h2>
                        <div className="flex items-center gap-2">
                            <select
                                className="mr-2 p-2 bg-gray-200 rounded-md"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="rust">Rust</option>
                                <option value="solidity">Solidity</option>
                                <option value="motoko">Motoko</option>
                            </select>
                            <Button size="icon" variant="ghost" onClick={handleRunCode}>
                                <PlayIcon className="h-5 w-5" />
                            </Button>
                            <Button size="icon" variant="ghost">
                                <SaveIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <CodeMirror value={value} height="400px" extensions={[javascript({ jsx: true })]} onChange={onChange} />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-bold">Output</h2>
                        <div className="flex items-center gap-2">
                            <Button size="icon" variant="ghost">
                                <MaximizeIcon className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="h-[400px] rounded-md bg-gray-200 dark:bg-gray-700 p-4 overflow-auto">
                        <pre className="text-sm font-mono text-gray-700 dark:text-gray-300">
                            {language === "rust" ? output.Result : JSON.stringify(output, null, 2)}
                        </pre>
                    </div>
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

export default Playground
