'use client'
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from 'react';
import MyDock1Items from './MyDock1Items';
import { Key } from '@mui/icons-material';
import Link from 'next/link'
import { useRouter } from 'next/navigation';

export default function MyBottomDock () {
    const router = useRouter();
    const dockItems = ['1', '2', '3', 'S'];

    const [showMyDock1Items, setMyDock1Items] = useState(false);

    const handleClick = (index: number) => {
        
        console.log(index)
        if(index == 0){
            console.log('0 clicked')
            setMyDock1Items(!showMyDock1Items);
        }else if(index == 1){
            console.log('1 clicked')
            setMyDock1Items(false);
        }else if(index == 2){
            console.log('2 clicked')
            setMyDock1Items(false);
        }else if(index == 3){
            console.log('3 clicked')
            router.push('/SettingsScreen')
        }
    };

   

    return (
        <div>
            {
            
            showMyDock1Items && <MyDock1Items />}
                {/* className="w-12 h-12 bg-slate-800 rounded-md flex justify-center items-center text-slate-400" */}
            <div className="flex justify-center items-center mt-5">
                {dockItems.map((string, index) => (
                    <div key={index} onClick={() => handleClick(index)}style={{ cursor: 'pointer' }} className="w-12 h-12 rounded-md bg-slate-800 opacity-70 flex justify-center items-center ml-2">
                    {string}
                    </div>
                ))}
            </div>
        </div>

    )

}