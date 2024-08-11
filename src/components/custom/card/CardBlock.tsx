import React from "react"
import FlashCard from "./Card"
import { ICardType } from "@/lib/constants"

export default function CardBlock({ cardType }: { cardType: ICardType }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
            <FlashCard />
        </div>
    )
};

