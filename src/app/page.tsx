import FlashCard from "@/components/custom/card/Card";
import CardBlock from "@/components/custom/card/CardBlock";
import { CardFilter } from "@/components/custom/card/CardFilter";


export default function Home() {
    return (
        <main className="">
            <div className="max-md:p-4 flex justify-center py-8">
                <div className="max-w-[70rem] w-full max-xl:px-4 max-md:px-0 duration-200">
                    <div className="flex justify-between items-start">
                        <div>
                            <h1 className="max-md:text-center font-bold text-xl md:text-2xl lg:text-3xl duration-200">Topic</h1>
                            <h2 className="max-md:text-center font-medium lg:text-lg text-base duration-200 text-black/40 mb-6 md:mb-10">Sub topic</h2>
                        </div>
                        <CardFilter />
                    </div>
                    <CardBlock cardType={"gap"} />
                </div>
            </div>
        </main>
    );
}
