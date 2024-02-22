import React, { useState, } from 'react'
import { faTrash, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-modal';
import { MaterialReactTable, createMRTColumnHelper,} from 'material-react-table';
import { useAuth } from '../AuthContext';
import Adjust from '../resources/img/adjust.png'
Modal.setAppElement('#root');

const MyReport = () => {
    const { openSidebar, isDesktopView,} = useAuth();
    const [ modalDelete, setModalDelete ] = useState(false)
    const [ modalMore, setModalMore ] = useState(false)

    const handleDelete = () => {
        setModalDelete((prev) => !prev)
    }

    const handleMore = () => {
        setModalMore((prev) => !prev)
    }
     
    const columnHelper = createMRTColumnHelper();

    const fakeColumn = [
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
        columnHelper.accessor('leaseDate', {
            header: 'Lease Date',
            size: 100,
        }),
        columnHelper.accessor('returnDate', {
            header: 'Return Date',
            size: 100,
        }),
        columnHelper.accessor('timeRemaining', {
            header: 'Time Remaining',
            size: 100,
        }),
        columnHelper.accessor('submitted1', {
            header: 'Submitted 1',
            size: 100,
        }),
        columnHelper.accessor('submitted2', {
            header: 'Submitted 2',
            size: 100,
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            size: 100,
            maxSize: 101,
            minSize: 102,
            grow: 20,
        }),
        columnHelper.accessor('moreDetail', {
            header: 'More Detail',
            size: 100,
            Cell: ( row ) => (
                <div className='text-white flex items-center justify-center cursor-pointer'>
                    <button className='bg-gray-800 py-[1] px-3 rounded rounded-full' onClick={handleMore}>
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
            Cell: ( row ) => (
                <button className='bg-red-500 text-white p-2 rounded-lg hover:bg-red-700 m-0.5' onClick={handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            ),
        }),
    ];

    const fakeData = [
        {
          row: 1,
          id: 'ID-1',
          name: 'Asset 1',
          leaseDate: '2021/07/21',
          returnDate: '2024/01/27',
          get timeRemaining() {
            const leaseDateObj = new Date(this.leaseDate);
            const returnDateObj = new Date(this.returnDate);
            const timeDiff = returnDateObj - leaseDateObj;
            const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            return `Tersisa ${daysRemaining} hari`;
          },
          submitted1: 'Superadmin Approval Pending',
          submitted2: 'Admin Approval Pending',
          status: 'Approval Pending'
        },
        {
          row: 2,
          id: 'ID-2',
          name: 'Asset 2',
          leaseDate: '2022/07/21',
          returnDate: '2024/01/27',
          get timeRemaining() {
            const leaseDateObj = new Date(this.leaseDate);
            const returnDateObj = new Date(this.returnDate);
            const timeDiff = returnDateObj - leaseDateObj;
            const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            return `Tersisa ${daysRemaining} hari`;
          },
          submitted1: 
                <p>
                    Superadmin has
                    <span className='text-green-500 font-semibold'> Approved</span>
                </p>
            ,
          submitted2: 
                <p>
                    Admin has
                    <span className='text-green-500 font-semibold'> Approved</span>
                </p>
            ,
          status:
                <p className='text-green-500 font-semibold'>
                    Approved
                </p>
            ,
        },
        {
          row: 3,
          id: 'ID-3',
          name: 'Asset 3',
          leaseDate: '2023/07/21',
          returnDate: '2024/01/27',
          get timeRemaining() {
            const leaseDateObj = new Date(this.leaseDate);
            const returnDateObj = new Date(this.returnDate);
            const timeDiff = returnDateObj - leaseDateObj;
            const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
            return `Tersisa ${daysRemaining} hari`;
          },
          submitted1: 
            <p>
                Superadmin has
                <span className='text-green-500 font-semibold'> Approved</span>
            </p>
          ,
          submitted2: 
            <p>
                Admin has
                <span className='text-red-500 font-semibold'> Decline</span>
            </p>
          ,
          status: 
            <p className='text-red-500 font-semibold'>
                Declined
            </p>
          ,
        },
    ];

    const moreData = [
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

    const moreColumn = [
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
                <img src={Adjust} alt="Asset" style={{ width: '70px', height: 'auto' }}/>
            ),
        }),
    ];
    
    return (
        <>
            <div className='p-2'>
                <div className='bg-gray-800 mb-5 rounded-2xl p-4 shadow'>
                    <h2 className='text-white'>Selamat datang di My Report page :)</h2>
                </div>
            </div>

            <div className='p-2'>
                <div className='p-2 bg-white'>
                    <div className='p-3 flex gap-1'>
                        <div className='flex gap-1'>
                            <h3>Jumlah Asset yang sedang anda pinjam :</h3>
                            <h3 className='font-semibold bg-[#efefef] rounded'>0</h3>
                        </div>   
                    </div>
                    <div className='p-3 flex gap-1'>
                        <div className='flex gap-1'>
                            <h3>Jumlah Asset yang sedang anda ajukan :</h3>
                            <h3 className='font-semibold bg-[#efefef] rounded'>1</h3>
                        </div>   
                    </div>
                </div>
            </div>
            
            {isDesktopView && (
                <Modal
                    isOpen={modalDelete}
                    onRequestClose={handleDelete}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                    className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2'>
                        <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                            <div className='flex flex-col text-center mb-2'>
                                <h1 className="text-2xl font-semibold">Select Action</h1>
                                <p>Apakah anda yakin ingin menghapus Report ini?</p>
                            </div>
                            <div className="flex space-x-4 mt-5">
                                <Button 
                                    className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded" 
                                    onClick={handleDelete}
                                >
                                    Cancel
                                </Button>
                                <Button 
                                    className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded"
                                >
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}
            {!isDesktopView && (
                <Modal
                    isOpen={modalDelete}
                    onRequestClose={handleDelete}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                    className='modal-content bg-transparent p-4 w-screen'
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2'>
                        <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                            <div className='flex flex-col text-center mb-2'>
                                <h1 className="text-2xl font-semibold">Select Action</h1>
                                <p>Apakah anda yakin ingin menghapus Report ini?</p>
                            </div>
                            
                            <div className="flex space-x-4 mt-5">
                            <Button 
                                className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded" 
                                onClick={handleDelete}
                            >
                                Cancel
                            </Button>
                            <Button 
                                className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded"
                            >
                                Delete
                            </Button>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}

            {isDesktopView && (
                <Modal
                    isOpen={modalMore}
                    onRequestClose={handleMore}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                    className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2 py-4 bg-white'>
                        <h1>Ini adalah detail lengkap asset</h1>
                        <MaterialReactTable
                            columns={moreColumn}
                            data={moreData}
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
                        <Button onClick={handleMore} className=" mt-4">
                            Close
                        </Button>
                    </div>
                </Modal>
            )}
            {!isDesktopView && (
                <Modal
                    isOpen={modalMore}
                    onRequestClose={handleMore}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                    className='modal-content bg-transparent p-4 w-screen'
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2 py-4 bg-white'>
                        <h1>Ini adalah detail lengkap asset</h1>
                        <MaterialReactTable
                            columns={moreColumn}
                            data={moreData}
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
                        <Button onClick={handleMore} className=" mt-4">
                            Close
                        </Button>
                    </div>
                </Modal>
            )}

            <div className='p-2'>
                <MaterialReactTable
                    columns={fakeColumn}
                    data={fakeData}
                    columnSiz
                    enableDensityToggle={false}
                    initialState={{density: 'compact'}}
                    paginationDisplayMode= 'pages'
                    positionToolbarAlertBanner= 'bottom'
                    enableColumnActions={false}
                    muiTablePaperProps={({ table }) => ({
                        style: {
                            zIndex: table.getState().isFullScreen ? 9999 : undefined,
                        },
                    })}
                />
            </div>
        </>
    )
}
export default MyReport;