import Button from "./Button"

export default function Drawer() {

    let testTopics = [
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
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                
            </div> 
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
                {/* Sidebar content here */}

                    <div className="mb-10 flex items-center justify-between">
                        <Button  text="Add new topic" className="add-button w-full" svg={newTopicSvg} OnClickFunc={showAddNewTopicModal} />
                        {/* <button className="btn">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                            </svg>
                        </button> */}
                    </div>

                    {/* <li><a>Item 3</a></li> */}

                    {
                        testTopics.map((topic, idx) => {
                            return <li key={idx}>
                                <details>
                                <summary>{ topic.title }</summary>
                                <ul>
                                    { topic.collection.map((collection, collectionIdx) => {
                                        return <li key={collectionIdx}>
                                            <a href="">
                                                { collection }
                                            </a>
                                        </li>
                                    }) }
                                </ul>
                                </details>
                            </li>
                        })
                    }
                
                </ul>
            </div>
        </div>
    )
};

