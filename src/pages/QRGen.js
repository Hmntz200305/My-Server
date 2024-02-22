import React, { useState, } from 'react';
import { MaterialReactTable, createMRTColumnHelper,} from 'material-react-table';
import { useAuth } from '../AuthContext';
import { Input, Menu, MenuList, MenuItem, MenuHandler, Button } from "@material-tailwind/react";
import Adjust from '../resources/img/adjust.png'
import Modal from 'react-modal'

const QRGen = () => {
  const { openSidebar, isDesktopView,} = useAuth();
  const [modalPhoto, setModalPhoto] = useState(false)
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [ table, setTable ] = useState(false);

  const openTable = () => {
    setTable((prev) => !prev);
  }

  const handleOptionSelectStatus = (status) => {
    setSelectedAsset({ ...selectedAsset, status });
  };
  const StatusOptions = [
    { id: 1, status: 'Available' },
    { id: 2, status: 'On Loans' },
    { id: 3, status: 'Submitted' },
  ];

  const handleOptionSelectLocation = (location) => {
    setSelectedAsset({ ...selectedAsset, location });
  };
  const LocationOptions = [
    { id: 1, location: 'LMD' },
    { id: 2, location: 'Lt 1' },
    { id: 3, location: 'Lt 2' },
  ];

  const handleOptionSelectCategory = (category) => {
    setSelectedAsset({ ...selectedAsset, category });
  };
  const CategoryOptions = [
    { id: 1, category: 'Laptop' },
    { id: 2, category: 'Mouse' },
    { id: 3, category: 'Keyboard' },
  ];

  const handleModalPhoto = () => {
    setModalPhoto((prev) => !prev);
  }
    
  const columnHelper = createMRTColumnHelper();
  const fakeColumn = [
      columnHelper.accessor('image_path', {
          header: 'Photo',
          size: 100,
          Cell: ({ row }) => (
            <div className='cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105' onClick={handleModalPhoto}>
              <img src={Adjust} alt="Asset" style={{ width: '70px', height: 'auto' }} />
            </div>
          ),
      }),
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
  ]

  const fakeData = [
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
                <h2 className='text-white'>Welcome, QR Generator Page :)</h2>
            </div>
        </div>

        {isDesktopView && (
            <Modal 
                isOpen={modalPhoto}
                onRequestClose={handleModalPhoto}
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center border-none"
                className={`border-none bg-transparent p-4 w-3/2 ${openSidebar ? ' pl-[315px]' : ''}`}
                shouldCloseOnOverlayClick={false}
            >
                <div className='p-2 bg-[#efefef] flex justify-center items-center flex-col'>
                    <img src={Adjust} alt="QRCode" style={{height: '500px'}} />
                    <div className='flex mt-4 space-x-4'>
                        <Button>Download</Button>
                        <Button onClick={handleModalPhoto}>CLose</Button>
                    </div>
                </div>
            </Modal>
        )}
        {!isDesktopView && (
            <Modal 
                isOpen={modalPhoto}
                onRequestClose={handleModalPhoto}
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center border-none"
                className='modal-content bg-transparent p-4 w-screen border-none'
                shouldCloseOnOverlayClick={false}
            >
                <div className='p-2 bg-[#efefef] flex justify-center items-center flex-col'>
                    <img src={Adjust} alt="QRCode" />
                    <div className='flex mt-4 space-x-4'>
                        <Button>Download</Button>
                        <Button onClick={handleModalPhoto}>CLose</Button>
                    </div>
                </div>
            </Modal>
        )}

        <div className='p-2'>
            <div className='bg-white rounded-2xl shadow p-4 space-y-4'>
                <div className='flex items-center gap-4'>
                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>ID</label>
                    <Input 
                    variant="outline"
                    label="Input Asset ID"
                    required
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Name</label>
                    <Input
                    variant="outline"
                    label="Input Asset Name"
                    required 
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Description</label>
                    <Input 
                    variant="outline" 
                    label="Input Asset Description"
                    required
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Brand</label>
                    <Input 
                    variant="outline" 
                    label="Input Asset Brand" 
                    required
                    />
                </div>
                <div className='flex items-center gap-4'>
                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Model</label>
                    <Input 
                    variant="outline" 
                    label="Input Asset Model"
                    required
                    />
                </div>

                <div className='flex items-center gap-4'>
                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Status</label>
                    <div className='flex items-center w-full relative '>
                        <Menu placement="bottom-start">
                            <MenuHandler>
                            <Button
                                ripple={false}
                                variant="text"
                                color="blue-gray"
                                className="border border-blue-gray-200 px-4 rounded-r-none"
                            >
                                Select
                            </Button>
                            </MenuHandler>
                            <MenuList className="max-w-[18rem]">
                            {StatusOptions.map((status) => (
                                <MenuItem key={status.id} value={status.status} onClick={() => handleOptionSelectStatus(status.status)}>
                                {status.status}
                                </MenuItem>
                            ))}
                            </MenuList>
                        </Menu>
                        <Input 
                            className='w-full rounded-l-none'
                            type="text"
                            value={selectedAsset?.status}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, status: e.target.value })}
                            disabled
                            required
                            label='Input Asset Status'
                        />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Location</label>
                    <div className='flex items-center w-full relative'>
                        <Menu placement="bottom-start">
                            <MenuHandler>
                            <Button
                                ripple={false}
                                variant="text"
                                color="blue-gray"
                                className="border border-blue-gray-200 px-4 rounded-r-none"
                            >
                                Select
                            </Button>
                            </MenuHandler>
                            <MenuList className="max-w-[18rem]">
                            {LocationOptions.map((location) => (
                                <MenuItem value={location.location} key={location.id} onClick={() => handleOptionSelectLocation(location.location)}>
                                {location.location}
                                </MenuItem>
                            ))}
                            </MenuList>
                        </Menu>
                        <Input
                            className='w-full rounded-l-none'
                            type="text"
                            value={selectedAsset?.location}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, location: e.target.value })}
                            disabled
                            required
                            label='Input Asset Location'
                        />
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Category</label>
                    <div className='flex items-center w-full relative'>
                        <Menu placement="bottom-start">
                            <MenuHandler>
                            <Button
                                ripple={false}
                                variant="text"
                                color="blue-gray"
                                className="border border-blue-gray-200 px-4 rounded-r-none"
                            >
                                Select
                            </Button>
                            </MenuHandler>
                            <MenuList className="max-w-[18rem]">
                            {CategoryOptions.map((category) => (
                                <MenuItem value={category.category} key={category.id} onClick={() => handleOptionSelectCategory(category.category)}>
                                {category.category}
                                </MenuItem>
                            ))}
                            </MenuList>
                        </Menu>
                        <Input
                            className='w-full rounded-l-none'
                            type="text"
                            value={selectedAsset?.category}
                            onChange={(e) => setSelectedAsset({ ...selectedAsset, category: e.target.value })}
                            disabled
                            required
                            label='Input Asset Category'
                        />
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Serial Number</label>
                    <Input 
                    variant="outline" 
                    label="Input Asset Serial Number"
                    required
                    />
                </div>
                <div className='flex justify-end'>
                    <Button 
                      type="button" 
                      className='' 
                      id="edit-button"
                      onClick={openTable}
                    >
                      Generate
                    </Button>
                </div>
                {table && (
                    <div className='p-2'>
                        <div className='bg-white p-2'>
                        <MaterialReactTable
                            columns={fakeColumn}
                            data={fakeData}
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
                    </div>
                )}
            </div>
        </div>
    </>
  );
};

export default QRGen;