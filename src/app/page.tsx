'use client';
import Link from 'next/link';
import { use, useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{`Hello my name is Sai Kumar, The button is clicked ${count} times`}</div>
            <button onClick={() => setCount((c) => c + 1)}>click</button>
            <Link href="/about">About</Link>
            <Link href="/github">Github</Link>
        </>
    );
}
