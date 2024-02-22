import React, { useState } from 'react'
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Badge } from '@material-tailwind/react'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Submitted = () => {

    const LeaseContent = () => (<p>Lease Content</p>)
    const ReturnContent = () => (<p>Return Content</p>)

    const [activeTab, setActiveTab] = useState("lease");
    const data = [
        {
            label: (
                <div className='flex gap-2 items-center justify-center'>
                    <div>
                        <p>
                            Lease
                        </p>
                    </div>
                    <div className='flex items-center mb-4'>
                        <Badge />
                    </div>
                </div>
            ),
            value: "lease",
            content: <LeaseContent />,
        },
        {
            label: (
                // <div className='flex flex-col items-center justify-center'>
                //     <div className='ml-16'>
                //         <Badge />
                //     </div>
                //     Return
                // </div>
                <>Return</>
            ),
            value: "return",
            content: <ReturnContent />,
        },
    ];

    return (
            <div className='bg-white rounded'>
                <div className='flex justify-center'>
                    <h1 className="text-2xl font-semibold mt-6">Select Action</h1>
                </div>
                <Tabs value={activeTab} className='p-2'>
                    <TabsHeader className="rounded-none p-0 border-b border-blue-gray-50 mt-4 bg-white"
                        indicatorProps={{
                            className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                    >
                        {data.map(({ label, value,}) => (
                            <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value ? "text-gray-800" : "hover:text-gray-500"}
                            >
                                {label}
                            </Tab>
                        ))}

                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, content }) => (
                            <TabPanel key={value} value={value}>
                            {content}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
    )
}
export default Submitted