import Button from "./Button"
import DropdownHover from "./DropdownHover";
import DynamicAddModal from "./DynamicAddModal";

export default function Drawer() {

    let testTopics = [
        {
            title: 'Horror Movies',
            collection: []
        },
        {
            title: 'Superheroes',
            collection: [
                'Marvel heroes',
                'DC heroes'
            ]
        },
        {
            title: 'Language Practice',
            collection: [
                'Spanish Vocabulary',
                'English Vocabulary'
            ]
        },
        {
            title: 'Books',
            collection: [
                'Fictionals',
                'Biography'
            ]
        },
    ]

    const newTopicSvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right-dots" viewBox="0 0 16 16">
        <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>

    function showAddNewTopicModal() {
        const topicModal: any = document.getElementById('topic-modal')
        topicModal.showModal();
    }

    return (
        <div className="drawer z-50">
            <input id="drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                
            </div> 
            <div className="drawer-side">
                <label htmlFor="drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
                {/* Sidebar content here */}

                    <div className="mb-10 flex items-center justify-between">
                        <Button  text="Add new topic" className="add-button w-[80%]" svg={newTopicSvg} OnClickFunc={showAddNewTopicModal} />

                        <DropdownHover 
                            className={`max-sm:dropdown-end `}
                            svgIcon={<svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/></svg>}
                        >
                            <li><a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-feather" viewBox="0 0 16 16">
                                    <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.8 3.8 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1S3.147 6.824 2.557 8.523c-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88q.025.061.056.122A68 68 0 0 0 .08 15.198a.53.53 0 0 0 .157.72.504.504 0 0 0 .705-.16 68 68 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.53.53 0 0 0 0-.739l-.729-.744 1.311.209a.5.5 0 0 0 .443-.15l.663-.684c.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.5.5 0 0 0-.112-.172M3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.3 1.3 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a7 7 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a8 8 0 0 1 1.564-.173"/>
                                </svg>
                                Edit topic</a>
                            </li>
                            <li><a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                                Remove topic</a>
                            </li>
                        </DropdownHover>
                    </div>

                    {
                        testTopics.map((topic, idx) => {
                            if (topic.collection.length < 1) {
                                return <li key={idx}><a>
                                    { topic.title }
                                    <div className="tooltip rounded-md hover:bg-slate-50 duration-200 w-fit" data-tip={`Create new sub topic for ${topic.title}`} >
                                        <svg className="bi bi-plus w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                        </svg>
                                    </div>
                                </a></li>

                            } else {
                                return <li key={idx}>
                                    <details>
                                        <summary>
                                            { topic.title }
                                            <div className="tooltip rounded-md hover:bg-slate-50 duration-200 w-fit" data-tip={`Create new sub topic for ${topic.title}`} >
                                                <svg className="bi bi-plus w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                                                </svg>
                                            </div>
                                        </summary>
                                        <ul>
                                            { topic.collection.map((collection, collectionIdx) => {
                                                return <li key={collectionIdx}>
                                                    <a className="flex justify-between">
                                                        { collection }
                                                        <div className="flex gap-2">
                                                            <div className="tooltip w-fit rounded-md hover:bg-slate-50 duration-200" data-tip={`Edit ${collection}`}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                                                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                                                </svg>
                                                            </div>
                                                            <div className="tooltip tooltip-bottom rounded-md hover:bg-slate-50 duration-200" data-tip={`Remove ${collection}`}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eraser" viewBox="0 0 16 16">
                                                                <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414zM8.746 13.547 3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </li>
                                            }) }
                                        </ul>
                                    </details>
                                </li>
                            }
                        })
                    }
                
                </ul>
            </div>

            <DynamicAddModal modalID="topic-modal" modalTitle="Add new topic">
                <input type="text" placeholder="Type your new topic here" className="input input-bordered w-full mt-4" />
                <div className="label">
                    <span className="label-text-alt text-emerald-600">Think about something trending or relatable</span>
                </div>
                <div className="flex justify-end mt-4">
                    <Button text="Add" className="w-fit px-10" />
                </div>
            </DynamicAddModal>
        </div>
    )
};

