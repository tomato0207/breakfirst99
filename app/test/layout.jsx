"use client";
import {Button} from "@/components/ui/button"
import Link from "next/link";
import {useState} from "react";
import {usePathname} from "next/navigation";

const linkSet = [
    { href: "/test/test1", text: "Test-Test1" },
    { href: "/test/test2", text: "Test-Test2" },
];
export default function TestLayout({children}){
    const [count, setCount]=useState(0);
    const pathname = usePathname();
    return(
        <div className="border-2 border-dashed bg-slate p-4">
            <div className="flex gap-4 font-bold text-lg mb-4 text-purple-600">
                {linkSet.map((link)=>(
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-white bg-slate-800 hover:bg-yellow-300
                            hover:text-slate-800 rounded-md p-2"
                        >
                        {link.text}
                    </Link>
                    ))}
            </div>
            <div className="flex mb-4">
                Test Layout <span className="px-4 font-bold text-red-600">
                    {count}</span>{" "}
                     pathname: <span>{pathname}</span>
            </div>
            <Button
                onClick={() =>setCount(count + 1)}
                className="bg-blue-500 text-white mb-4 rounded-full"
            >
                +1
            </Button>
            {children}
        </div>
    );
}
