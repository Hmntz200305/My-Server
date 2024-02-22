import React, { useState} from 'react'
import { useAuth } from '../AuthContext';
import { Input, Menu, MenuList, MenuItem, MenuHandler, Button } from "@material-tailwind/react";
import { MaterialReactTable, createMRTColumnHelper,} from 'material-react-table';
import Adjust from '../resources/img/adjust.png'

const Lease = () => {
    const { isDesktopView,} = useAuth();
    const [table, setTable] = useState(true);
    const [formulir, setFormulir] = useState(false);
    const [selectedAsset, setSelectedAsset] = useState(null);

    const handleOptionSelectLocation = (location) => {
        setSelectedAsset({ ...selectedAsset, location });
    };
    const LocationOptions = [
        { id: 1, location: 'LMD' },
        { id: 2, location: 'Lt 1' },
        { id: 3, location: 'Lt 2' },
    ];

    const handleOptionSelectAdmin1 = (admin1) => {
        setSelectedAsset({ ...selectedAsset, admin1 });
    };
    const Admin1Options = [
        { id: 1, admin1: 'Hamam' },
        { id: 2, admin1: 'Admin' },
        { id: 3, admin1: 'Super Admin' },
    ];

    const handleOptionSelectAdmin2 = (admin2) => {
        setSelectedAsset({ ...selectedAsset, admin2 });
    };
    const Admin2Options = [
        { id: 1, admin2: 'Hamam' },
        { id: 2, admin2: 'Admin' },
        { id: 3, admin2: 'Super Admin' },
    ];

    const closeFormulir = () => {
        setTable(true)
        setFormulir(false)
    }
    const openFormulir = () => {
        setFormulir(true)
        setTable(false)
    }

    const generateFakeData1 = (count) => {
        const fakeData1 = [];
        for (let i = 1; i <= count; i++) {
          fakeData1.push({
            row: i,
            id: `ID-${i}`,
            name: `Asset ${i}`,
            description: `Description ${i}`,
            brand: `Brand ${i}`,
            model: `Model ${i}`,
            status: 'Active',
            location: 'Location A',
            category: 'Category A',
            sn: `SN-${i}`,
            image_path: `path/to/image-${i}.jpg`,
            qrcode_path: `path/to/qrcode-${i}.png`,
            adjust: `path/to/adjust-${i}.jpg`,
          });
        }
        return fakeData1;
    };
    const fakeData1 = generateFakeData1(6);

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
        columnHelper.accessor('description', {
            header: 'Description',
            size: 200,
        }),
        columnHelper.accessor('brand', {
            header: 'Brand',
            size: 100,
        }),
        columnHelper.accessor('model', {
            header: 'Model',
            size: 100,
        }),
        columnHelper.accessor('status', {
            header: 'Status',
            size: 100,
            filterVariant: 'select',
            filterSelectOptions: ['Active', 'Inactive'],
        }),
        columnHelper.accessor('location', {
            header: 'Location',
            size: 100,
            filterVariant: 'select',
            filterSelectOptions: ['Location A', 'Location B'],
        }),
        columnHelper.accessor('category', {
            header: 'Category',
            size: 100,
            filterVariant: 'select',
            filterSelectOptions: ['Category A', 'Category B'],
        }),
        columnHelper.accessor('sn', {
            header: 'Serial Number',
            size: 100,
        }),
        columnHelper.accessor('image_path', {
            header: 'Photo',
            size: 100,
            enableSorting: false,
            enableColumnFilter: false,
            Cell: ({ row }) => (
            <img src={Adjust} alt="Asset" style={{ width: '70px', height: 'auto' }} />
            ),
        }),
        columnHelper.accessor('action', {
            header: 'Action',
            size: 100,
            enableSorting: false,
            enableColumnFilter: false,
            Cell: ({row}) => (
            <input type='radio' />
            ),
        }),
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
                    <h2 className='text-white'>Selamat datang di Lease page :)</h2>
                </div>
            </div>

            {table && (
                <div className='p-2'>
                    <div className='mt-5'>
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
                        <div className='flex justify-end mt-5'>
                            <Button className='bg-green-500 hover:bg-green-600 shadow-none' id='lanjut' onClick={openFormulir}>Check Out</Button>
                        </div>
                    </div>
                </div>
            )}

            {formulir && (
                <div className='p-2' id='formulir'>
                    <div className='bg-white p-5 rounded-xl'>
                        <div className='flex items-center justify-between mb-2'>
                            <h2 className=''>Berikut ini adalah Asset yang anda pinjam</h2>
                            <Button className='bg-green-500 hover:bg-green-600 shadow-none' onClick={closeFormulir}>Back</Button>
                        </div>
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
                        <div className='bg-white'>
                            <h2 className='border-t-[1px] border-black pt-4 mt-8'>
                                Untuk melanjutkan tranasaksi peminjaman, silahkan isi formulir dibawah ini:
                            </h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className='space-y-4'>
                                    <div className='flex items-center space-x-2'>
                                        <label className={`w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Name</label>
                                        <Input 
                                            variant='outline' 
                                            label='Hamam' 
                                            type='text'
                                            className='cursor-not-allowed'
                                            required
                                            disabled
                                        />
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <label className={`w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Location</label>
                                        <div className='flex items-center w-full relative'>
                                            <Menu>
                                                <MenuHandler>
                                                    <Button
                                                    ripple={false}
                                                    variant='text'
                                                    color='blue-gray'
                                                    className="border border-blue-gray-200 px-4 rounded-r-none"
                                                    >
                                                        Select
                                                    </Button>
                                                </MenuHandler>
                                                <MenuList className='max-w-[18rem]'>
                                                {LocationOptions.map((location) => (
                                                    <MenuItem key={location.id} value={location.location} onClick={() => handleOptionSelectLocation(location.location)}>
                                                        {location.location}
                                                    </MenuItem>
                                                    ))}
                                                </MenuList>
                                            </Menu>
                                            <Input 
                                                variant='outline' 
                                                label='Select Location' 
                                                className='w-full rounded-l-none'
                                                type='text'
                                                value={selectedAsset?.location}
                                                onChange={(e) => setSelectedAsset({ ...selectedAsset, location: e.target.value })}
                                                required
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <label className={`w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Lease Date</label>
                                        <Input 
                                            variant='outline' 
                                            label='Input Lease Date' 
                                            type='date'
                                            required
                                        />
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <label className={`w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Return Date</label>
                                        <Input 
                                            variant='outline' 
                                            label='Input Return Date' 
                                            type='date'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    <div className='flex items-center space-x-2'>
                                        <label className={`w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Email</label>
                                        <Input 
                                            variant='outline' 
                                            label='hamamnashiruddin01@gmail.com' 
                                            type='email'
                                            className='cursor-not-allowed'
                                            required
                                            disabled 
                                        />
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <label className={`w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Note</label>
                                        <Input 
                                            variant='outline' 
                                            label='Input Note' 
                                            type='text' 
                                            required
                                        />
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <label className={`w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Admin 1</label>
                                        <div className='flex items-center w-full relative'>
                                            <Menu>
                                                <MenuHandler>
                                                    <Button
                                                    ripple={false}
                                                    variant='text'
                                                    color='blue-gray'
                                                    className="border border-blue-gray-200 px-4 rounded-r-none"
                                                    >
                                                        Select
                                                    </Button>
                                                </MenuHandler>
                                                <MenuList className='max-w-[18rem]'>
                                                {Admin1Options.map((admin1) => (
                                                    <MenuItem key={admin1.id} value={admin1.admin1} onClick={() => handleOptionSelectAdmin1(admin1.admin1)}>
                                                        {admin1.admin1}
                                                    </MenuItem>
                                                    ))}
                                                </MenuList>
                                            </Menu>
                                            <Input 
                                                variant='outline' 
                                                label='Select Approver 1' 
                                                className='w-full rounded-l-none'
                                                type='text'
                                                value={selectedAsset?.admin1}
                                                onChange={(e) => setSelectedAsset({ ...selectedAsset, admin1: e.target.value })}
                                                required
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div className='flex items-center space-x-2'>
                                        <label className={`w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Admin 2</label>
                                        <div className='flex items-center w-full relative'>
                                            <Menu>
                                                <MenuHandler>
                                                    <Button
                                                    ripple={false}
                                                    variant='text'
                                                    color='blue-gray'
                                                    className="border border-blue-gray-200 px-4 rounded-r-none"
                                                    >
                                                        Select
                                                    </Button>
                                                </MenuHandler>
                                                <MenuList className='max-w-[18rem]'>
                                                {Admin2Options.map((admin2) => (
                                                    <MenuItem key={admin2.id} value={admin2.admin2} onClick={() => handleOptionSelectAdmin2(admin2.admin2)}>
                                                        {admin2.admin2}
                                                    </MenuItem>
                                                    ))}
                                                </MenuList>
                                            </Menu>
                                            <Input 
                                                variant='outline' 
                                                label='Select Approver 2' 
                                                className='w-full rounded-l-none'
                                                value={selectedAsset?.admin2}
                                                onChange={(e) => setSelectedAsset({ ...selectedAsset, admin2: e.target.value })}
                                                type='text'
                                                required
                                                disabled
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end mt-4'>
                                <Button
                                    className='bg-green-500 hover:bg-green-600 shadow-none'
                                    type='submit'
                                >
                                    Submit
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Lease