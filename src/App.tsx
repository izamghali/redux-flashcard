import "./App.css"
import { testCard } from "./data";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import TopicTitle from "./components/TopicTitle";
import Card from "./components/Card";

const App = () => {


  return (
    <main className='relative duration-200'>

        <Navbar />
        <Drawer />

        <div className='
            flex flex-col gap-8
            padding-x
            pt-6 sm:pt-8 xl:pt-10
            
        '>

            <TopicTitle />

            <h2 className="">Cards</h2>
            

            <section className='flex justify-center'>
                <div className="grid gap-10
                    grid-cols-1 w-[100%] sm:grid-cols-2 md:w-[90%] 
                    lg:grid-cols-3 xl:grid-cols-4
                ">
                    {
                        testCard.map((card, idx) => {
                            return <div key={idx}>
                                <Card front={card.front} back={card.back}  />
                            </div>
                        })
                    }

                </div>
            
                
            </section>

        </div>
      
    </main>
  )
}

export default App
