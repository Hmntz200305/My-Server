import React, { useState } from 'react'
import { MaterialReactTable, createMRTColumnHelper,} from 'material-react-table';
import { faCheck, faEllipsis, faXmark, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../AuthContext';
import { Button, Tabs, TabsHeader, TabsBody, Tab, TabPanel, Badge } from '@material-tailwind/react'
import Modal from 'react-modal';
import Adjust from '../resources/img/adjust.png'

Modal.setAppElement('#root');

const Submitted = () => {

    const LeaseContent = () => {

      return (
        <>
          <div className='p-2 bg-white z-0 static'>
            <MaterialReactTable
                columns={columnLease}
                data={dataLease}
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
          </div>
        </>
      )
    }

    const ReturnContent = () => {

      return (
        <>
          <div className='p-2 bg-white z-0 static'>
            <MaterialReactTable
                columns={columnReturn}
                data={dataReturn}
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
          </div>
        </>
      )
    }

    const { openSidebar, isDesktopView,} = useAuth();
    const [moreLease, setMoreLease] = useState(false);
    const [moreReturn, setMoreReturn] = useState(false);
    const [approveLease, setApproveLease] = useState(false);
    const [declineLease, setDeclineLease] = useState(false);
    const [approveReturn, setApproveReturn] = useState(false);
    const [declineReturn, setDeclineReturn] = useState(false);

    const openMoreLease = () => {
        setMoreLease(true)
    }
    const closeMoreLease = () => {
        setMoreLease(false)
    }

    const openMoreReturn = () => {
        setMoreReturn(true)
    }
    const closeMoreReturn = () => {
        setMoreReturn(false)
    }
    
    const openApproveLease = () => {
        setApproveLease(true)
    }
    const closeApproveLease = () => {
        setApproveLease(false)
    }

    const openDeclineLease = () => {
        setDeclineLease(true)
    }
    const closeDeclineLease = () => {
        setDeclineLease(false)
    }

    const openApproveReturn = () => {
        setApproveReturn(true)
    }
    const closeApproveReturn = () => {
        setApproveReturn(false)
    }

    const openDeclineReturn = () => {
        setDeclineReturn(true)
    }
    const closeDeclineReturn = () => {
        setDeclineReturn(false)
    }

    const [activeTab, setActiveTab] = useState("lease");
    const data = [
      {
          label: "Lease",
          value: "lease",
          content: <LeaseContent />,
      },
      {
          label: "Return",
          value: "return",
          content: <ReturnContent />,
      },
    ];

    const columnHelper = createMRTColumnHelper();

    const columnLease = [
        columnHelper.accessor('row', {
            header: 'No',
            size: 100,
        }),
        columnHelper.accessor('id', {
            header: 'ID Asset',
            size: 100,
        }),
        columnHelper.accessor('pengaju', {
            header: 'Pengaju',
            size: 100,
        }),
        columnHelper.accessor('leaseDate', {
            header: 'Lease Date',
            size: 100,
        }),
        columnHelper.accessor('returnDate', {
            header: 'Return Date',
            size: 100,
        }),
        columnHelper.accessor('location', {
            header: 'Location',
            size: 100,
        }),
        columnHelper.accessor('email', {
            header: 'Email',
            size: 100,
        }),
        columnHelper.accessor('note', {
            header: 'Note',
            size: 100,
        }),
        columnHelper.accessor('moreDetail', {
            header: 'More Detail',
            size: 100,
            Cell: ({ row }) => (
                <div className='text-white flex items-center justify-center cursor-pointer'>
                    <button className='bg-gray-800 hover:bg-gray-900 shadow-none py-1 px-3 rounded rounded-full' onClick={openMoreLease}>
                      <FontAwesomeIcon icon={faEllipsis} size='lg'/>
                    </button>
                </div>
            ),
        }),
        columnHelper.accessor('action', {
            header: 'Action',
            size: 100,
            enableSorting: false,
            enableColumnFilter: false,
            Cell: ({ row }) => (
                <div className='text-white'>
                    <Button className='bg-green-500 p-2 rounded-lg hover:bg-green-700 m-0.5' onClick={openApproveLease}>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                    <Button className='bg-red-500 p-2 rounded-lg hover:bg-red-700 m-0.5' onClick={openDeclineLease}>
                        <FontAwesomeIcon icon={faXmark} />
                    </Button>
                </div>
            ),
        }),
    ];

    const dataLease = [
        {
          row: 1,
          id: 'ID-1',
          pengaju: 'User',
          leaseDate: '2021/07/21',
          returnDate: '2024/01/27',
          location: 'LMD',
          email: 'user@gmail.com',
          note: 'minjem yaa',
          
        },
    ];

    const moreColumnLease = [
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

    const moreDataLease = [
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



    const columnReturn = [
        columnHelper.accessor('row', {
            header: 'No',
            size: 100,
        }),
        columnHelper.accessor('id', {
            header: 'ID Asset',
            size: 100,
        }),
        columnHelper.accessor('pengaju', {
            header: 'Pengaju',
            size: 100,
        }),
        columnHelper.accessor('leaseDate', {
            header: 'Lease Date',
            size: 100,
        }),
        columnHelper.accessor('returnDate', {
            header: 'Return Date',
            size: 100,
        }),
        columnHelper.accessor('location', {
            header: 'Location',
            size: 100,
        }),
        columnHelper.accessor('email', {
            header: 'Email',
            size: 100,
        }),
        columnHelper.accessor('note', {
            header: 'Note',
            size: 100,
        }),
        columnHelper.accessor('moreDetail', {
            header: 'More Detail',
            size: 100,
            Cell: ({ row }) => (
                <div className='text-white flex items-center justify-center cursor-pointer'>
                    <button className='bg-gray-800 py-1 px-3 rounded rounded-full' onClick={openMoreReturn}>
                      <FontAwesomeIcon icon={faEllipsis} size='lg'/>
                    </button>
                </div>
            ),
        }),
        columnHelper.accessor('action', {
            header: 'Action',
            size: 100,
            enableSorting: false,
            enableColumnFilter: false,
            Cell: ({ row }) => (
                <div className='text-white'>
                    <button className='bg-green-500 p-2 rounded-lg hover:bg-green-700 m-0.5' onClick={openApproveReturn}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <button className='bg-red-500 p-2 rounded-lg hover:bg-red-700 m-0.5' onClick={openDeclineReturn}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
            ),
        }),
    ];

    const dataReturn = [
        {
          row: 1,
          id: 'ID-1',
          pengaju: 'User',
          leaseDate: '2021/07/21',
          returnDate: '2024/01/27',
          location: 'LMD',
          email: 'user@gmail.com',
          note: 'mau balikin dong',
          
        },
    ];

    const moreColumnReturn = [
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

    const moreDataReturn = [
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
                <div className='bg-gray-800 mb-5 rounded-2xl p-4 shadow'>
                    <h2 className='text-white'>Selamat datang di Submitted page :)</h2>
                </div>
            </div>

            <div className='p-2'>
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
                          {data.map(({ label, value }) => (
                              <Tab
                                key={value}
                                value={value}
                                onClick={() => setActiveTab(value)}
                                className={activeTab === value ? "text-gray-800" : "hover:text-gray-500"}
                              >
                                <Badge>
                                    <div className='mr-2'>
                                        {label}
                                    </div>
                                </Badge>
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
            
            <>
                {/* APPROVAL LEASE */}
                {isDesktopView && (
                    <Modal
                        isOpen={approveLease}
                        onRequestClose={closeApproveLease}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin <u>Ingin memberi Approval Lease</u> untuk Hamam?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={closeApproveLease}>Close</Button>
                                    <Button 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" 
                                    >
                                        Approve
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
                {!isDesktopView && (
                    <Modal
                        isOpen={approveLease}
                        onRequestClose={closeApproveLease}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className='modal-content bg-transparent p-4 w-screen'
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin <u>ingin memberi Approval Lease</u> untuk Hamam?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={closeApproveLease}>Close</Button>
                                    <Button 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" 
                                    >
                                        Decline
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}

                {/* DECLINE LEASE */}
                {isDesktopView && (
                    <Modal
                        isOpen={declineLease}
                        onRequestClose={closeDeclineLease}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className={`modal-content bg-transparent p-4 z-[8888] w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin <u>Tidak ingin memberi Approval Lease</u> untuk Hamam?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={closeDeclineLease}>Close</Button>
                                    <Button 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" 
                                    >
                                        Decline
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
                {!isDesktopView && (
                    <Modal
                        isOpen={declineLease}
                        onRequestClose={closeDeclineLease}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className='modal-content bg-transparent p-4 w-screen'
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin <u>Tidak ingin memberi Approval Lease</u> untuk Hamam?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={closeDeclineLease}>Close</Button>
                                    <Button 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" 
                                    >
                                        Decline
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}

                {/* MORE DETAIL LEASE */}
                {isDesktopView && (
                    <Modal
                        isOpen={moreLease}
                        onRequestClose={closeMoreLease}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2 py-4 bg-white'>
                            <h1>Ini adalah detail lengkap asset Lease</h1>
                            <MaterialReactTable
                                columns={moreColumnLease}
                                data={moreDataLease}
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
                            <Button onClick={closeMoreLease} className="bg-gray-800 hover:bg-gray-900 mt-4">
                                Close
                            </Button>
                        </div>
                    </Modal>
                )}
                {!isDesktopView && (
                    <Modal
                        isOpen={moreLease}
                        onRequestClose={closeMoreLease}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className='modal-content bg-transparent p-4 w-screen'
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2 py-4 bg-white'>
                            <h1>Ini adalah detail lengkap asset Lease</h1>
                            <MaterialReactTable
                                columns={moreColumnLease}
                                data={moreDataLease}
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
                            <Button onClick={closeMoreLease} className="bg-gray-800 hover:bg-gray-900 mt-4">
                                Close
                            </Button>
                        </div>
                    </Modal>
                )}

                {/* APPROVAL RETURN */}
                {isDesktopView && (
                    <Modal
                        isOpen={approveReturn}
                        onRequestClose={closeApproveReturn}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin <u>Ingin memberi Approval Return</u> untuk Hamam?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={closeApproveReturn}>Close</Button>
                                    <Button 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" 
                                    >
                                        Approve
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
                {!isDesktopView && (
                    <Modal
                        isOpen={approveReturn}
                        onRequestClose={closeApproveReturn}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className='modal-content bg-transparent p-4 w-screen'
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin <u>Tidak ingin memberi Approval Return</u> untuk Hamam?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={closeApproveReturn}>Close</Button>
                                    <Button 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" 
                                    >
                                        Decline
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}

                {/* DECLINE RETURN */}
                {isDesktopView && (
                    <Modal
                        isOpen={declineReturn}
                        onRequestClose={closeDeclineReturn}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin <u>Tidak ingin memberi Approval Return</u> untuk Hamam?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={closeDeclineReturn}>Close</Button>
                                    <Button 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" 
                                    >
                                        Decline
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
                {!isDesktopView && (
                    <Modal
                        isOpen={declineReturn}
                        onRequestClose={closeDeclineReturn}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className='modal-content bg-transparent p-4 w-screen'
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin <u>Tidak ingin memberi Approval Return</u> untuk Hamam?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded" onClick={closeDeclineReturn}>Close</Button>
                                    <Button 
                                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded" 
                                    >
                                        Decline
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}

                {/* MORE DETAIL RETURN */}
                {isDesktopView && (
                    <Modal
                        isOpen={moreReturn}
                        onRequestClose={closeMoreReturn}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2 py-4 bg-white'>
                            <h1>Ini adalah detail lengkap asset Return</h1>
                            <MaterialReactTable
                                columns={moreColumnReturn}
                                data={moreDataReturn}
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
                            <Button onClick={closeMoreReturn} className="bg-gray-800 hover:bg-gray-900 mt-4">
                                Close
                            </Button>
                        </div>
                    </Modal>
                )}
                {!isDesktopView && (
                    <Modal
                        isOpen={moreReturn}
                        onRequestClose={closeMoreReturn}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className='modal-content bg-transparent p-4 w-screen'
                        shouldCloseOnOverlayClick={false}
                        >
                        <div className='p-2 py-4 bg-white'>
                            <h1>Ini adalah detail lengkap asset Return</h1>
                            <MaterialReactTable
                                columns={moreColumnReturn}
                                data={moreDataReturn}
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
                            <Button onClick={closeMoreReturn} className="bg-gray-800 hover:bg-gray-900 mt-4">
                                Close
                            </Button>
                        </div>
                    </Modal>
                )}
            </>
        </>
    )
}
export default Submitted