import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

type showModalFunction = () => void;

export default function Card({ front, back } : { front: string, back: string }) {

    function showCardModal(event: any): void {
        const modals = Array(document.querySelectorAll('.card-modal'))
        const cardID = event.target.parentElement?.id
        const cardID2 = event.target.parentElement?.parentElement?.id

        let cardModal: any
        modals.forEach(modal => {
            for (let node of modal) {
                // console.log(node.parentElement?.id)
                if (node.parentElement?.id === cardID || node.parentElement?.id === cardID2) {
                    cardModal = node
                }
            }
        })

        cardModal?.showModal()
    }

    const saveIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-save" viewBox="0 0 16 16">
        <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"/>
    </svg>

    const removeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    </svg>

    return (
        <div id={uuidv4()}
            className={`
                card w-auto h-40 
                bg-base-100 shadow-xl 
                overflow-hidden cursor-pointer
            `}>
            <div 
                onClick={showCardModal} 
                className="flex justify-center items-center h-full hover:bg-emerald-200 duration-200 group"
            >
                <p className="group-hover:opacity-0">{front}</p>
                <p className="group-hover:opacity-100 opacity-0 absolute group-hover:text-slate-800 select-none">{back}</p>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog className="modal card-modal ">
                <div className="modal-box flex flex-col gap-8 cursor-default">
                    <h3 className="font-bold text-lg">Edit Card</h3>
                    
                    <div className='flex flex-col gap-4'>
                        <label className="input input-bordered flex items-center gap-2">
                        Front :
                            <input type="text" className="grow" placeholder={front} />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                        End &nbsp;&nbsp;&nbsp;:
                            <input type="text" className="grow" placeholder={back} />
                        </label>
                    </div>

                    <div className='flex justify-end gap-2'>
                        <Button text='Remove' svg={removeIcon} className='' />
                        <Button text='Save' svg={saveIcon} className='bg-emerald-200 text-slate-800' />
                    </div>
                    
                </div>
                <form method="dialog" className="modal-backdrop ">
                    <button className='cursor-default'>close</button>
                </form>
            </dialog>

            
        </div>
    )
};

