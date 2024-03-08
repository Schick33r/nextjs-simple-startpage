'use client'
import SettingsIcon from '@mui/icons-material/Settings';
import MyDock1Items from './MyDock1Items';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import "firebase/firestore";
import { db } from "../firebase"
import {
    getDoc,
    getDocs,
    collection,
    addDoc,
    updateDoc,
    doc,
    deleteDoc,
    } from "firebase/firestore";


    interface Item {
        url: string;
        pic: string;
        description: string;
        pos: string;
    }
    
    interface Items {
        [key: string]: Item;
    }
    
    interface Group {
        pos: string;
        name: string;
        description: string;
        items: Items;
    }
  
    
    async function fetchDataFromDocs(): Promise<Item[]>{
        const itemsList: Item[] = []
        let x = 1;
  
      const querySnapshot = await getDocs(collection(db, "dockItems"));
      querySnapshot.forEach((doc => {
        console.log(x)
        x++
        console.log(doc.id, " => ", doc.data());
        
        
        
        const docCount = querySnapshot.size;
        console.log("Number of documents:", docCount);


        const data = doc.data()
        const dataItems = data.items
        

        // Iterate over the object and push the items into the itemsList
        
            for (const key in dataItems) {
                if (dataItems.hasOwnProperty(key)) {
                    console.log(`Key: ${key}`);
                    const item = dataItems[key];
                    const groupItem: Item = {
                        description: item.description,
                        url: item.url,
                        pic: item.pic,
                        pos: item.pos
                    };
                    itemsList.push(groupItem);
                }
            }
            console.log(itemsList)
        }));
        return itemsList;
      }

export default function MyBottomDock () {
    const [dockItemsData, setDockItemsData] = useState([] as any);

    useEffect(() => {
        async function fetchData() {
          const data : any [] = await fetchDataFromDocs();
          setDockItemsData(data);
        }
        fetchData();
      }, []);

    //   useEffect(() => {
    //     fetchDataFromDocs();
    // }, []); 
      



    const router = useRouter();
    const dockItems = ['1', '2', '3', <SettingsIcon></SettingsIcon>];

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