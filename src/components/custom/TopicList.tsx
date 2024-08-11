'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useRef, useState } from "react"
import { Button } from "../ui/button"
import { PiCheckCircle, PiPlusCircle, PiX } from "react-icons/pi"
import { Input } from "../ui/input"

export default function TopicList() {

    const dummyTopics = [
        {
            title: 'Mammals',
            href: '',
            slug: 'mammals'
        },
        {
            title: 'Superheroes',
            href: '',
            slug: 'superheroes'
        },
        {
            title: 'Movies',
            href: '',
            slug: 'movies'
        },
    ]
    const [ newTopicValue, setNewTopicValue ] = useState<string>()
    const newTopicRef = useRef<HTMLInputElement>(null);

    function handleInputChange() {
        setNewTopicValue(newTopicRef.current?.value)
    }

    return (
        <div className="flex flex-col gap-2">
            {/* <Button onClick={() => { console.log(newTopicValue) }}>check input text</Button> */}
            <div className={`flex items-center justify-between`}>
                <div className="flex gap-2 items-center border-b-2 pb-1 border-dotted w-fit z-10">
                    <div>
                        <PiPlusCircle size={`1.2rem`} />
                    </div>
                    <Input
                        onChange={handleInputChange}
                        ref={newTopicRef}
                        className="border-0 focus-visible:ring-transparent"
                        type={'text'} placeholder="Create new topic"
                    />
                </div>
                <div className={`gap-1 ${ newTopicValue ? 'flex' : 'hidden' } `}>
                    <PiX className="fill-red-400 cursor-pointer hover:bg-slate-100 duration-200 p-1 rounded-sm" size={`1.5rem`} />
                    <PiCheckCircle className="fill-green-400 cursor-pointer hover:bg-slate-100 duration-200 p-1 rounded-sm" size={`1.5rem`} />
                </div>
            </div>
            { 
            dummyTopics.map((item, idx) => {
                return <Link key={idx} className={`text-black/60 hover:text-black hover:bg-gradient-to-r from-slate-200 rounded-sm px-1 duration-200`} href={item.href} >{ item.title }</Link>
            })
            }
        </div>
    )
};

