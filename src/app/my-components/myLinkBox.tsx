import React from "react";
import Image from 'next/image'


interface  MyLinkBoxProps {
  url: string;
}

const MyLinkBox: React.FC<MyLinkBoxProps> = ({ url }) => {
  return (
    <main>
        <div className="w-16 h-16 bg-slate-800 opacity-60 opacity flex justify-center items-center rounded-md ml-2">
            
            {/* <h1>{url}</h1> */}
            {/* <Image
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt="sample image"
              width={600}
              height={400}
            /> */}
            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="Web Image" />
        </div>
    </main>
  );
};

export default MyLinkBox

