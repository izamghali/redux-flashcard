import React from "react"
import FlashCard from "./Card"
import { ICardType } from "@/lib/constants"
import CardDialog from "./CardDialog"

export default function CardBlock({ cardType }: { cardType: ICardType }) {

    // const testArr: number[] = []
    const testArr = [1, 2, 3, 4, 5, 6]

    return (
        <div className={`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 h-96
            ${ testArr.length > 0 ? 'grid' : 'flex justify-center items-center' }
        `}>
            {
                testArr.length > 0 ?
                testArr.map((item, idx: number) => {
                    return <div key={idx}>
                        <FlashCard />
                    </div>
                })
                :
                <div className="flex items-center">
                    <span className="">You don&apos;t have any card for this topic, yet.&nbsp;</span>
                    <CardDialog 
                        crud={"create"}
                        triggerBtnClassName="w-fit"
                        triggerBtn={<span className="underline underline-offset-2 text-blue-500">Create new card?</span>}
                     />
                </div>
            }
        </div>
    )
};

