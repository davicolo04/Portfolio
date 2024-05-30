"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CounterPage() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <main className="flex min-h-screen flex-col flex items-center p-24">
            <div className="flex items-center">
                <Link href="/">
                    <Image className='mr-2'
                        src="/icons/home.svg"
                        alt="Home"
                        width={30}
                        height={20}
                    />
                </Link>
                <h1 className="text-4xl font-bold">Click Counter</h1>
            </div>
                <div className="p-4 flex flex-col">
                    
                    <p className="text-lg">Number of clicks: {count}</p>
                    <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-lg mt-5 mb-5">Click me</button>
                </div>
        </main>
    );
}