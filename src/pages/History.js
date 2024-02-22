import React, { useState, } from 'react'
import { faFileCsv, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../AuthContext';
import { MaterialReactTable, createMRTColumnHelper, } from 'material-react-table';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Button } from "@material-tailwind/react";
import Adjust from '../resources/img/adjust.png'
Modal.setAppElement('#root');

const History = () => {

    const LogContent = () => {

        const columnLog = [
            columnHelper.accessor('no', {
                header: 'No',
                size: 40,
            }),
            columnHelper.accessor('idticket', {
                header: 'ID Ticket',
                size: 120,
            }),
            columnHelper.accessor('asset', {
                header: 'ID Asset',
                size: 120,
            }),
            columnHelper.accessor('name', {
                header: 'Name',
                size: 120,
            }),
            columnHelper.accessor('leasedate', {
                header: 'Lease Date',
                size: 120,
            }),
            columnHelper.accessor('returndate', {
                header: 'Return Date',
                size: 120,
            }),
            columnHelper.accessor('location', {
                header: 'Location',
                size: 120,
            }),
            columnHelper.accessor('note', {
                header: 'Note',
                size: 120,
            }),
            columnHelper.accessor('email', {
                header: 'Email',
                size: 120,
            }),
            columnHelper.accessor('status', {
                header: 'Status',
                size: 120,
            }),
            columnHelper.accessor('admin1', {
                header: 'Admin #1',
                size: 120,
            }),
            columnHelper.accessor('admin2', {
                header: 'Admin #2',
                size: 120,
            }),
            columnHelper.accessor('more', {
                header: 'More Detail',
                size: 120,
                enableSorting: false,
                enableColumnFilter: false,
                Cell: ({row}) => (
                    <div className='text-white flex items-center justify-center cursor-pointer'>
                        <button
                        className='bg-gray-800 p-1 rounded-lg'
                        onClick={handleMoreLog}
                        >
                            <FontAwesomeIcon icon={faCircleInfo} size='xl'/>
                        </button>
                    </div>
                  ),
                }),
        ];

        const dataLog = [
            {
                no: 1,
                idticket: 'TICKET001',
                asset: 'ASSET001',
                name: 'John Doe',
                leasedate: '2022-01-01',
                returndate: '2022-01-10',
                location: 'Office A',
                note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                email: 'john.doe@example.com',
                status: 'Approved',
                admin1: 'Admin A',
                admin2: 'Admin B',
            },
        ];

        return (
            <div className='p-0'>
                <div className='flex space-x-[1px]'>
                    <Button className=' cursor-default'>
                        <FontAwesomeIcon icon={faFileCsv} size='xl' />
                    </Button>
                    <div className='flex flex-grow items-center border rounded border-gray-800'>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white'
                        >
                        Export All Rows
                        </button>
                        <button
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export Page Rows
                        </button>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export Selected Rows
                        </button>
                    </div>
                </div>
                <div className='flex space-x-[1px]'>
                    <Button className=' cursor-default'>
                        <FontAwesomeIcon icon={faFilePdf} size='xl' />
                    </Button>
                    <div className='flex flex-grow items-center border rounded border-gray-800'>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export All Rows
                        </button>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export Page Rows
                        </button>
                        <button 
                            className='flex-grow items-center rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export Selected Rows
                        </button>
                    </div>
                </div>
                <div className='mt-4'>
                    <MaterialReactTable 
                        columns={columnLog}
                        data={dataLog}
                        enableRowSelection={true}
                        enableDensityToggle={false}
                        initialState={{density: 'compact'}}
                        enableFullScreenToggle={false}
                        enableClickToCopy={false}
                        columnFilterDisplayMode= 'popover'
                        paginationDisplayMode= 'pages'
                        positionToolbarAlertBanner= 'bottom'
                    />
                </div>
            </div>
        )
    };

    const PeminjamanContent = () => {

        const columnPeminjaman = [
            columnHelper.accessor('no', {
                header: 'No',
                size: 40,
            }),
            columnHelper.accessor('idticket', {
                header: 'ID Ticket',
                size: 120,
            }),
            columnHelper.accessor('asset', {
                header: 'ID Asset',
                size: 120,
            }),
            columnHelper.accessor('assetname', {
                header: 'Name',
                size: 120,
            }),
            columnHelper.accessor('leasedate', {
                header: 'Lease Date',
                size: 120,
            }),
            columnHelper.accessor('returndate', {
                header: 'Return Date',
                size: 120,
            }),
            columnHelper.accessor('name', {
                header: 'Username',
                size: 120,
            }),
            columnHelper.accessor('email', {
                header: 'Email',
                size: 120,
            }),
            columnHelper.accessor('status', {
                header: 'Status',
                size: 120,
            }),
            columnHelper.accessor('more', {
                header: 'More Detail',
                size: 120,
                enableSorting: false,
                enableColumnFilter: false,
                Cell: ({row}) => (
                    <div className='text-white flex items-center justify-center cursor-pointer'>
                        <button
                        className='bg-gray-800 p-1 rounded-lg'
                        onClick={handleMorePeminjaman}
                        >
                        <FontAwesomeIcon icon={faCircleInfo} size='xl'/>
                        </button>
                    </div>
                    ),
                }),
        ];

        const dataPeminjaman = [
            {
                no: 1,
                idticket: 'TICKET001',
                asset: 'ASSET001',
                assetname: 'Laptop XYZ',
                leasedate: '2022-01-01',
                returndate: '2022-01-10',
                name: 'John Doe',
                email: 'john.doe@example.com',
                status: 'In Progress',
            },
        ];

        return (
            <div className='p-0'>
                <div className='flex space-x-[1px]'>
                    <Button className=' cursor-default'>
                        <FontAwesomeIcon icon={faFileCsv} size='xl' />
                    </Button>
                    <div className='flex flex-grow items-center border rounded border-gray-800'>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white'
                        >
                        Export All Rows
                        </button>
                        <button
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export Page Rows
                        </button>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export Selected Rows
                        </button>
                    </div>
                </div>
                <div className='flex space-x-[1px]'>
                    <Button className=' cursor-default'>
                        <FontAwesomeIcon icon={faFilePdf} size='xl' />
                    </Button>
                    <div className='flex flex-grow items-center border rounded border-gray-800'>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export All Rows
                        </button>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export Page Rows
                        </button>
                        <button 
                            className='flex-grow items-center rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                        Export Selected Rows
                        </button>
                    </div>
                </div>
                <div className='mt-4'>
                    <MaterialReactTable 
                        columns={columnPeminjaman}
                        data={dataPeminjaman}
                        enableRowSelection={true}
                        enableDensityToggle={false}
                        initialState={{density: 'compact'}}
                        enableClickToCopy={false}
                        enableFullScreenToggle={false}
                        columnFilterDisplayMode= 'popover'
                        paginationDisplayMode= 'pages'
                        positionToolbarAlertBanner= 'bottom'
                    />
                </div>
            </div>
        )
    };
    

    const { openSidebar, isDesktopView,} = useAuth();
    const [ moreLog, setMoreLog] = useState(false);
    const [ morePeminjaman, setMorePeminjaman] = useState(false);

    const handleMoreLog = () => {
        setMoreLog((prev) => !prev)
    }
    const handleMorePeminjaman = () => {
        setMorePeminjaman((prev) => !prev)
    }

    const [activeTab, setActiveTab] = React.useState("log");
    const data = [
        {
        label: "Log",
        value: "log",
        content: <LogContent />,
        },
        {
        label: "Peminjaman",
        value: "peminjaman",
        content: <PeminjamanContent />,
        },
    ];
      
    const columnHelper = createMRTColumnHelper();

        

        const moreColumnLog = [
            columnHelper.accessor('row', {
                header: 'No',
                size: 100,
            }),
            columnHelper.accessor('id', {
                header: 'ID Asset',
                size: 100,
            }),
            columnHelper.accessor('name', {
                header: 'Name',
                size: 100,
            }),
            columnHelper.accessor('description', {
                header: 'Description',
                size: 200,
            }),
            columnHelper.accessor('brand', {
                header: 'Brand',
                size: 100
            }),
            columnHelper.accessor('model', {
                header: 'Model',
                size: 100,
            }),
            columnHelper.accessor('status', {
                header: 'Status',
                size: 100,
            }),
            columnHelper.accessor('location', {
                header: 'Location',
                size: 100,
            }),
            columnHelper.accessor('category', {
                header: 'Category',
                size: 100,
            }),
            columnHelper.accessor('sn', {
                header: 'Serial Number',
                size: 100,
            }),
            columnHelper.accessor('image_path', {
                header: 'Photo',
                size: 100,
                Cell: ({ row }) => (
                <img src={Adjust} alt="Asset" style={{ width: '70px', height: 'auto' }} />
                ),
            }),
        ];
        const moreDataLog = [
            {
              row: 1,
              id: 'ID-1',
              name: 'Asset 1',
              description: 'Description 1',
              brand: 'Brand 1',
              model: 'Model 1',
              status: 'Active',
              location: 'Location A',
              category: 'Category A',
              sn: 'SN-1',
            },
        ];

        const moreColumnPeminjaman = [
            columnHelper.accessor('row', {
                header: 'No',
                size: 100,
            }),
            columnHelper.accessor('id', {
                header: 'ID Asset',
                size: 100,
            }),
            columnHelper.accessor('name', {
                header: 'Name',
                size: 100,
            }),
            columnHelper.accessor('description', {
                header: 'Description',
                size: 200,
            }),
            columnHelper.accessor('brand', {
                header: 'Brand',
                size: 100
            }),
            columnHelper.accessor('model', {
                header: 'Model',
                size: 100,
            }),
            columnHelper.accessor('status', {
                header: 'Status',
                size: 100,
            }),
            columnHelper.accessor('location', {
                header: 'Location',
                size: 100,
            }),
            columnHelper.accessor('category', {
                header: 'Category',
                size: 100,
            }),
            columnHelper.accessor('sn', {
                header: 'Serial Number',
                size: 100,
            }),
            columnHelper.accessor('image_path', {
                header: 'Photo',
                size: 100,
                Cell: ({ row }) => (
                <img src={Adjust} alt="Asset" style={{ width: '70px', height: 'auto' }} />
                ),
            }),
        ];
        const moreDataPeminjaman = [
            {
              row: 1,
              id: 'ID-1',
              name: 'Asset 1',
              description: 'Description 1',
              brand: 'Brand 1',
              model: 'Model 1',
              status: 'Active',
              location: 'Location A',
              category: 'Category A',
              sn: 'SN-1',
            },
        ];

    return (
        <>
            <div className='p-2'>
                <div className='bg-gray-800 rounded-2xl p-4 shadow'>
                    <h2 className='text-white'>Selamat datang di History page heehe:)</h2>
                </div>
            </div>
            
            <div className='p-2'>
                <div className='bg-white rounded mt-6 '>
                    <div className='flex justify-center'>
                        <h1 className="text-2xl font-semibold mt-6">Select Menu</h1>
                    </div>
                    <Tabs value={activeTab} className='p-2'>
                        <TabsHeader
                        className="rounded-none p-0 border-b border-blue-gray-50 mt-4 bg-white"
                        indicatorProps={{
                            className:
                            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                        }}
                        >
                        {data.map(({ label, value }) => (
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
            </div>
            
            {isDesktopView && (
                <Modal
                    isOpen={moreLog}
                    onRequestClose={handleMoreLog}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed z-10 inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                    className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2 py-4 bg-white'>
                        <h1>Ini adalah detail lengkap asset</h1>
                        <MaterialReactTable
                            columns={moreColumnLog}
                            data={moreDataLog}
                            enableDensityToggle={false}                            
                            paginationDisplayMode={false} 
                            enableFullScreenToggle={false}
                            enableColumnActions={false}
                            enableFilters={false}
                            enableSorting={false}
                            initialState={{density: 'compact'}}
                            enableHiding={false}
                            enablePagination={false}
                        />
                        <Button onClick={handleMoreLog} className=" mt-4">
                            Close
                        </Button>
                    </div>
                </Modal>
            )}
            {!isDesktopView && (
                <Modal
                    isOpen={moreLog}
                    onRequestClose={handleMoreLog}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed z-10 inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                    className='modal-content bg-transparent p-4 w-screen'
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2 py-4 bg-white'>
                        <h1>Ini adalah detail lengkap asset</h1>
                        <MaterialReactTable
                            columns={moreColumnLog}
                            data={moreDataLog}
                            enableDensityToggle={false}                            
                            paginationDisplayMode={false} 
                            enableFullScreenToggle={false}
                            enableColumnActions={false}
                            enableFilters={false}
                            enableSorting={false}
                            initialState={{density: 'compact'}}
                            enableHiding={false}
                            enablePagination={false}
                        />
                        <Button onClick={handleMoreLog} className=" mt-4">
                            Close
                        </Button>
                    </div>
                </Modal>
            )}

            {isDesktopView && (
                <Modal
                    isOpen={morePeminjaman}
                    onRequestClose={handleMorePeminjaman}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed z-10 inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                    className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2 py-4 bg-white'>
                        <h1>Ini adalah detail lengkap asset</h1>
                        <MaterialReactTable
                            columns={moreColumnPeminjaman}
                            data={moreDataPeminjaman}
                            enableDensityToggle={false}                            
                            paginationDisplayMode={false} 
                            enableFullScreenToggle={false}
                            enableColumnActions={false}
                            enableFilters={false}
                            enableSorting={false}
                            initialState={{density: 'compact'}}
                            enableHiding={false}
                            enablePagination={false}
                        />
                        <Button onClick={handleMorePeminjaman} className=" mt-4">
                            Close
                        </Button>
                    </div>
                </Modal>
            )}
            {!isDesktopView && (
                <Modal
                    isOpen={morePeminjaman}
                    onRequestClose={handleMorePeminjaman}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed z-10 inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                    className='modal-content bg-transparent p-4 w-screen'
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2 py-4 bg-white'>
                        <h1>Ini adalah detail lengkap asset</h1>
                        <MaterialReactTable
                            columns={moreColumnPeminjaman}
                            data={moreDataPeminjaman}
                            enableDensityToggle={false}                            
                            paginationDisplayMode={false} 
                            enableFullScreenToggle={false}
                            enableColumnActions={false}
                            enableFilters={false}
                            enableSorting={false}
                            initialState={{density: 'compact'}}
                            enableHiding={false}
                            enablePagination={false}
                        />
                        <Button onClick={handleMorePeminjaman} className=" mt-4">
                            Close
                        </Button>
                    </div>
                </Modal>
            )}
        </>
    )
}
export default History