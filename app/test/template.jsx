"use client";

import {Button} from "@/components/ui/button"
import Link from "next/link"
import {useState} from "react";
import {usePathname} from "next/navigation"


export default function TestLayout({children}){
    const [count,setCount]=useState(0);
    const pathname = usePathname();
    return(
        <div className="border-2 border-dashed border-blue-800 p-4">
            <div className="flex mb-4">
                Test Template <span className="px-4 font-bold text-red-600">
                    {count}
                </span>{" "}
            </div>
            
            <Button
                onClick={()=>setCount(count+1)}
                className="bg-blue-500 text-white mb-4 rounded-full"
            >
                +1
            </Button>
            {children}
        </div>
    );
}