import Image from "next/image"
import CardSide from "../custom/card/CardSide"

export default function ExampleCard({ frontText, backText, imgUrl, altImage }: { frontText: string, backText: string, imgUrl?: string, altImage?: string }) {

    return (
        <div className="flex max-md:flex-col gap-4">
            <div className="relative bg-white w-full shadow-sm p-6 rounded-md h-52 duration-200">
                <div className="select-none w-full h-full flex items-center justify-center">
                    <CardSide side={"front"} className={"bg-black/80"} />
                    { imgUrl ? <div className="h-40 py-1">
                        <Image priority className="rounded-md h-full w-full" width={400} height={400} src={imgUrl} alt={altImage || ''} />
                    </div> : <span className="text-sm text-center">{ frontText }</span> }
                </div>
            </div>
            <div className="relative bg-white w-full shadow-sm p-6 rounded-md h-52 duration-200">
                <div className="select-none w-full h-full flex justify-center items-center">
                    <CardSide side={"back"} className={"bg-green-400/80"} />
                    <span className="text-sm text-center">{ backText }</span>
                </div>
            </div>
        </div>
        

    )
};

