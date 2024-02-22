import React, {  useState } from 'react';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../AuthContext';
import { MaterialReactTable, createMRTColumnHelper,} from 'material-react-table';
import { Button } from '@material-tailwind/react'
import Modal from 'react-modal';
import Adjust from '../resources/img/adjust.png'
Modal.setAppElement('#root');

const Return = () => {
    const { openSidebar, isDesktopView,} = useAuth();
    const [moreDetail, setMoreDetail] = useState(false);

    const openMoreDetail = () => {
        setMoreDetail(true);
      };
    const closeMoreDetail = () => {
      setMoreDetail(false);
    };

    const columnHelper = createMRTColumnHelper();

    const fakeColumn1 = [
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
        columnHelper.accessor('moreDetail', {
            header: 'More Detail',
            size: 100,
            Cell: ({ row }) => (
                <div className='text-white flex items-center justify-center cursor-pointer'>
                    <button className='bg-gray-800 hover:bg-gray-900 shadow-none py-1 px-3 rounded rounded-full' onClick={openMoreDetail}>
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
                <input type='radio'/>
            ),
        }),
    ];

    const fakeData1 = [
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
        },
    ];
    
    const fakeData2 = [
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

    const fakeColumn2 = [
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

    return (
        <>
            <div className='p-2'>
                <div className='bg-gray-800 mb-5 rounded-2xl p-4 shadow'>
                    <h2 className='text-white'>Selamat datang di Return page :)</h2>
                </div>
            </div>
            <div className='p-2'>
                <div className='p-2 bg-white'>
                    <div className='p-3 flex gap-1'>
                        <div className='flex gap-1'>
                            <h3>Jumlah Asset yang anda pinjam : </h3>
                            <h3 className='font-semibold bg-[#efefef] rounded'>1</h3>
                        </div>   
                    </div>
                </div>
            </div>

            {isDesktopView && (
                <Modal
                    isOpen={moreDetail}
                    onRequestClose={closeMoreDetail}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                    className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2 py-4 bg-white'>
                        <h1>Ini adalah detail lengkap asset</h1>
                        <MaterialReactTable
                            columns={fakeColumn2}
                            data={fakeData2}
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
                        <Button onClick={closeMoreDetail} className="bg-gray-800 hover:bg-gray-900 shadow-none mt-4">
                            Close
                        </Button>
                    </div>
                </Modal>
            )}
            {!isDesktopView && (
                <Modal
                    isOpen={moreDetail}
                    onRequestClose={closeMoreDetail}
                    contentLabel="Contoh Modal"
                    overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                    className='modal-content bg-transparent p-4 w-screen'
                    shouldCloseOnOverlayClick={false}
                    >
                    <div className='p-2 py-4 bg-white'>
                        <h1>Ini adalah detail lengkap asset</h1>
                        <MaterialReactTable
                            columns={fakeColumn2}
                            data={fakeData2}
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
                        <Button onClick={closeMoreDetail} className="bg-gray-800 hover:bg-gray-900 shadow-none mt-4">
                            Close
                        </Button>
                    </div>
                </Modal>
            )}

            <div className='p-2'>
                <MaterialReactTable
                    columns={fakeColumn1}
                    data={fakeData1}
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
            <div className='flex justify-end p-2'>
                <Button className='bg-gray-800 hover:bg-gray-900 shadow-none' type='submit'>Return</Button>
            </div>
        </>
    )
};

export default Return;
