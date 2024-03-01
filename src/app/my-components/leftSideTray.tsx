import React from "react";
import Image from 'next/image'

export default function MyLeftSideTray() {
  return (
    <main>
        <div>
            <div className="w-12 h-12 rounded-md bg-sky-950 text-center hover:mb-6 hover:w-16">
                <Image src="unraid.svg" alt="unraid" height={500} width={767} />
                {/* <h1> Unraid</h1> */}
            </div>
                <div className="w-12 h-12 rounded-md bg-sky-950 text-center my-2">
                <Image src="unraid.svg" alt="unraid" height={500} width={767} />
                {/* <h1> Unraid</h1> */}
            </div>
        </div>
    </main>
  );
}