import FlashCard from "@/components/custom/Card";


export default function Home() {
    return (
        <main className="bg-gradient-to-b from-[#F8F8F8]">
            <div className="border-2 border-red-400 max-md:p-4 flex justify-center">
                <div className="max-w-[70rem] border-2 border-green-400 w-full">
                    <h1 className="font-bold text-xl md:text-3xl">Topic</h1>
                    <h2 className="font-medium text-lg md:text-xl">Sub topic</h2>
                    <div>
                        <FlashCard />
                    </div>
                </div>
            </div>
        </main>
    );
}
