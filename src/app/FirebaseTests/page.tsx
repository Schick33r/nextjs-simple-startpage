'use client'
import React, { useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../firebase"
import {
  setDoc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  } from "firebase/firestore";
import { settings } from 'firebase/analytics';
import { Button } from "@/components/ui/button"
import { Groups } from '@mui/icons-material';


  async function fetchDataFromFiresotre() {
    const querySnapshot = await getDocs(collection(db, "settings"))
  
    const data : any[] = [];
    querySnapshot.forEach((doc => {
      data.push({ id: doc.id, ...doc.data()});
  }));
  return data;
}

  // Set data on FireStore
  // Create an initial document to update.
  const officeRef = doc(db, "dockItems", "office");

  async function setDataToFireStore(){
    const res = await setDoc(officeRef, {
      pos: "0",
      name: "office",
      description: "office",
      items: {
        "pages": {
          url: "http://pages.de",
          pic: "http://pages.de",
          description: "pages",
          pos: "0"
        },
      
        "math": {
          url: "http://math.com",
          pic: "http://math.com",
          description: "math",
          pos: "1"
        }
      }
      
  });
  }


  async function updateDataOnFireStore(){
    const res = await updateDoc(officeRef, {
      pos: "0",
      url: "http://google.de",
      description: "google.de",
      //favorites: { food: "Pizza", color: "Blue", subject: "recess" },
    })
  }



  // interface Group {
  //   id: string;
  //   name: string;
  //   description: string;
  //   pos: number
  //   items: []
  // }


  // async function getDataAndConvertToObject(): Promise<Group[]> {
  //   const groups: Group[] = [];

  //   const querySnapshot = await getDocs(collection(db, "dockItems"));
  //   querySnapshot.forEach((doc => {
  //     console.log(doc.id, " => ", doc.data());

  //       const data = doc.data();
  //       const group: Group = {
  //           id: doc.id,
  //           name: data.name,
  //           description: data.description,
  //           pos: data.pos,
  //           items: data.items

  //       };
  //       groups.push(group);
  //       console.log("group-items:")
  //       console.log(data.items)
  //       console.log(data.items['github']['url'])
  //   }));
  //   return groups;
  // }

  // interface GroupItem {
  //   description: string;
  //   pic: string;
  //   pos: number;
  //   url: string;
  // }

  // async function getItemsFromGroupFromFirebase(): Promise<GroupItem[]>{
  //   const groupItems: GroupItem[] = []

  //   const querySnapshot = await getDocs(collection(db, "dockItems"));
  //   querySnapshot.forEach((doc => {
  //     console.log(doc.id, " => ", doc.data());

  //       const data = doc.data();
  //       const groupItem: GroupItem = {
  //          description: data.description,
  //          pic: data.pic,
  //          pos: data['pos'],
  //          url: data.url

  //       };
  //       groupItems.push(groupItem);
  //       console.log(groupItems)
  //     }));
  //     return groupItems;
  //   }

    async function fetchDataFromGroupAsObj(): Promise<Group[]>{
      const groupItems: Group[] = []

    const querySnapshot = await getDocs(collection(db, "dockItems"));
    querySnapshot.forEach((doc => {
      console.log(doc.id, " => ", doc.data());
      
      const data = doc.data()
      const asGroupObj = doc.data() as Group
      console.log("obj:")
      console.log(asGroupObj)
      console.log(asGroupObj.items)
      return doc.data() as Group;

      
        // const data = doc.data();
        // const groupItem: GroupItem = {
        //    description: data.description,
        //    pic: data.pic,
        //    pos: data['pos'],
        //    url: data.url

        // };
        // groupItems.push(groupItem);
        // console.log(groupItems)
      }));
      return groupItems;
    }


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
  

  const fetchedData: Group = {
    pos: "0",
    name: "Develop",
    description: "Develop",
    items: {
        "google": {
            url: "http://pages.de",
            pic: "http://pages.de",
            description: "pages",
            pos: "0"
        },
        "github": {
            url: "http://math.com",
            pic: "http://math.com",
            description: "math",
            pos: "1"
        }
    }
};



function itarateOverFetchedData(){
  // Iterate through the group
  // Iterate over the items
console.log("Items:");
for (const key in fetchedData.items) {
    if (fetchedData.items.hasOwnProperty(key)) {
        const item = fetchedData.items[key];
        console.log(`URL: ${item.url}`);
        console.log(`Pic: ${item.pic}`);
        console.log(`Description: ${item.description}`);
        console.log(`Position: ${item.pos}`);
    }
}


// for (const sectionKey in fetchedData) {
//   if (fetchedData.hasOwnProperty(sectionKey)) {
//       const section: Section = fetchedData[sectionKey];
//       console.log(`Section: ${section.name}`);
//       console.log(`Description: ${section.description}`);
      
//       // Iterate through the items in the section
//       for (const itemKey in section.items) {
//           if (section.items.hasOwnProperty(itemKey)) {
//               const item: Item = section.items[itemKey];
//               console.log(`Item: ${item.description}`);
//               console.log(`URL: ${item.url}`);
//               console.log(`Picture: ${item.pic}`);
//           }
//       }
//   }
// }
}
  
async function fetchDataFromDocs(): Promise<Item[]>{
  const itemsList: Item[] = []
  let x = 1;

const querySnapshot = await getDocs(collection(db, "dockItems"));
querySnapshot.forEach((doc => {
  console.log(x)
  x++
  console.log(doc.id, " => ", doc.data());
  
  const data = doc.data()
  const dataItems = data.items

  // Iterate over the object
      for (const key in dataItems) {
          if (dataItems.hasOwnProperty(key)) {
              console.log(`Key: ${key}`);
              const item = dataItems[key];
              // Iterate over each property of the item
              for (const prop in item) {
                  if (item.hasOwnProperty(prop)) {
                      console.log(`  ${prop}: ${item[prop]}`);
                  }
              }
          }
      }
      
      // console.log(data.items)
      // const dockItemsArr: any [] = Array.from(data.items)
      // console.log(dockItemsArr)
      // dockItemsArr.forEach(element => {
      //     console.log(element)
      //     // const groupItem: Item = {
      //     //     description: element.description,
      //     //     url: element.url,
      //     //     pic: element.pic,
      //     //     pos: element.pos
      //     // }
      //     // itemsList.push(groupItem)   
      // });

      

  }));
  
  return itemsList;

}



export default function FirebaseTests() {
  const [settingsData, setSettingsData] = useState([] as any );

  useEffect(() => {
    async function fetchData() {
      const data : any [] = await fetchDataFromFiresotre();
      setSettingsData(data);
    }
    fetchData();
  }, []);

  const [groupData, setGroupData] = useState([] as any );

  // useEffect(() => {
  //   async function fetchDataFromGroup() {
  //     const groupData : any [] = await getItemsFromGroupFromFirebase();
  //     setGroupData(groupData);
  //   }
  //   fetchDataFromGroup();
  // }, []);

  return (
    <div>
      <div className="text-2xl">
        Fetched data from Firebase Firestore
      </div>
      <div className="text-lg">
        {settingsData.map((settings) => (
          <div key={settings.id} className="mb-4">
              <p>{settings.bgURL}</p>
              <p>{settings.name}</p>
          </div>
        ) )}
      </div>
      
      <div className="my-4">
        <Button onClick={setDataToFireStore}> Set Data to Firebase</Button>
      </div>
      <div>
        <Button onClick={updateDataOnFireStore}>Update Data on Firebase</Button>    
      </div>
      {/* <div>
        <Button className="mt-4" onClick={getDataAndConvertToObject}> Get Data and concert to Object</Button>
      </div>
      <div>
        <Button className="mt-4" onClick={getItemsFromGroupFromFirebase}> Get group items</Button>
      </div> */}
      <div>
        <Button className="mt-4" onClick={itarateOverFetchedData}> Itarate over fetched data</Button>
      </div>
      <div>
        <Button className="mt-4" onClick={fetchDataFromGroupAsObj}>FetchData as Obj</Button>
      </div>
      <div>
        <Button className="mt-4" onClick={fetchDataFromDocs}>FetchDataFromDocs</Button>
      </div>
      {/* <div className="my-10">
        Returned Data mapped
      </div> */}
      {/* <div className="mt-4">
      {groupData.map((groupItem) => (
          <div key={groupItem.description} className="mb-4">
              <p>test</p>
              <p>{groupItem.pos}</p>
              <p>{groupItem.description}</p>
              
              
          </div>
         ) )}
      </div> */}

    </div>
  )
}

