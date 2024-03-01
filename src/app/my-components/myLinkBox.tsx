import React from "react";
import Image from 'next/image'


interface  MyLinkBoxProps {
  url: string;
}

const MyLinkBox: React.FC<MyLinkBoxProps> = ({ url }) => {
  return (
    <main>
        <div className="w-16 h-16 bg-slate-800 opacity-60 opacity flex justify-center items-center rounded-md ml-2">
            {/* <Image src="unraid.svg" alt="unraid" height={500} width={767} /> */}
            <h1>{url}</h1>
        </div>
    </main>
  );
};

export default MyLinkBox

// export default function MyLinkBox(url) {
  
// }