import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import { testCard } from "./data";
import CardModal from "./components/CardModal";
import TopicModal from "./components/TopicModal";
import Navbar from "./components/Navbar";
import Drawer from "./components/Drawer";
import TopicTitle from "./components/TopicTitle";
import Card from "./components/Card";

const App = () => {


  return (
    <main className='relative duration-200'>
        <CardModal />
        <TopicModal />

        <Navbar />
        <Drawer />

        <div className='
            flex flex-col gap-8
            padding-x
            pt-6
            sm:pt-8
            xl:pt-10
            
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

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <Quotes />
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://reselect.js.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Reselect
//           </a>
//         </span>
//       </header>
//     </div>
//   )
// }

export default App
