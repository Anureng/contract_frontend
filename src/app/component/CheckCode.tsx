"use client"
import React, { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Button } from '@/components/ui/button';
import { ethers } from "ethers";
import axios from 'axios';

const CheckCode = () => {
  const [value, setValue] = React.useState<string>("console.log('hello world!');");
  const [output, setOutput] = useState<any>("")
  const onChange = React.useCallback((val: React.SetStateAction<string>, viewUpdate: any) => {
    console.log('val:', val);
    setValue(val);
  }, []);

  const handleAddData = async () => {
    try {
      const fetchData = await axios.post("http://localhost:3001/motoko", {
        solCode: value
      })
      console.log(fetchData.data, "Fetched properly");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <CodeMirror value={value} height="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} />
      <Button onClick={handleAddData}>Click</Button>

    </div>
  )
}

export default CheckCode
