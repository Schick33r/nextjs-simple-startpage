
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
    
    // const listItems = Object.keys(dataItems).map((key) => {
    //     const item = dataItems[key];
    //     return (
    //         <li key={key}>
    //             <img src={item.pic} alt={item.description} />
    //             <a href={item.url}>{item.description}</a>
    //         </li>
    //     );
    // });

    // return <ul>{listItems}</ul>;

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