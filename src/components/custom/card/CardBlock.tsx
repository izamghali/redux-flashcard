import React from "react"
import FlashCard from "./Card"

export default function CardBlock() {
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

