import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import { useAuth } from '../AuthContext';
import { Input, Menu, MenuList, MenuItem, MenuHandler, Button, Option, Select } from "@material-tailwind/react";
import { MaterialReactTable, createMRTColumnHelper, } from 'material-react-table';

const ScanLease = () => {
    const { isDesktopView, } = useAuth();
    const videoRef = useRef(null);
    const [isScannerActive, setIsScannerActive] = useState(false);
    const [scannedData, setScannedData] = useState(null);
    const [facingMode, setFacingMode] = useState('environment');
    const [cameraList, setCameraList] = useState([]);
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

    let qrScanner;

    useEffect(() => {
        const videoElem = videoRef.current;

        qrScanner = new QrScanner(
        videoElem,
        result => {
            const scannedResult = result.data;
            console.log('Scanned Result:', scannedResult);
            setScannedData(scannedResult);
            qrScanner.stop();
            qrScanner.destroy();
            setIsScannerActive(false);
        },
        {
            highlightScanRegion: isScannerActive,
            highlightCodeOutline: isScannerActive,
        },
        );
        
        let cameraSwitchPromise = Promise.resolve();

        if (isScannerActive) {
        const currentFacingMode = qrScanner._activeCamera?.cameraLabel || '';
        if (currentFacingMode.toLowerCase() !== facingMode.toLowerCase()) {
            cameraSwitchPromise = new Promise(resolve => {
            qrScanner.stop();
            setTimeout(() => {
                resolve();
            }, 500);
            });
        }

        cameraSwitchPromise.then(() => {
            qrScanner.setCamera(facingMode).then(() => {
            qrScanner.start();
            });
        });
        }
        
        return () => {
        qrScanner.stop();
        qrScanner.destroy();
        };
    }, [isScannerActive, facingMode]);

    useEffect(() => {
        QrScanner.listCameras().then(cameras => {
        setCameraList(cameras);
        });
    }, []);

    const handleToggleScanner = () => {
        setIsScannerActive(prevState => !prevState);
        setScannedData(false);
    };

    const columnHelper = createMRTColumnHelper();
    const fakeColumn = [
        columnHelper.accessor('AssetID', {
            header: 'ID Asset',
            size: 100,
        }),
        columnHelper.accessor('AssetName', {
            header: 'Name',
            size: 100,
        }),
        columnHelper.accessor('AssetDesc', {
            header: 'Description',
            size: 100,
        }),
        columnHelper.accessor('AssetBrand', {
            header: 'Brand',
            size: 100
        }),
        columnHelper.accessor('AssetModel', {
            header: 'Model',
            size: 100,
        }),
        columnHelper.accessor('AssetStatus', {
            header: 'Status',
            size: 100,
        }),
        columnHelper.accessor('AssetLocation', {
            header: 'Location',
            size: 100,
        }),
        columnHelper.accessor('AssetCategory', {
            header: 'Category',
            size: 100,
        }),
        columnHelper.accessor('AssetSN', {
            header: 'Serial Number',
            size: 100,
        }),
    ]

    const fakeData = [
        {
        AssetID: 'LMD0002',
        AssetName: 'LMD0002',
        AssetDesc: 'LMD0002',
        AssetBrand: 'LMD0002',
        AssetModel: 'LMD0002',
        AssetStatus: 'Available',
        AssetLocation: 'LMD',
        AssetCategory: 'Laptop',
        AssetSN: '2',
        
        },
    ];

    return (
        <>
            <div className="p-2">
                <div className='bg-gray-800 mb-5 rounded-2xl p-4 shadow'>
                    <h2 className='text-white'>Welcome, Scan Lease page :)</h2>
                </div>
            </div>
            <div className='p-2'>
                {isScannerActive ? (
                <Button onClick={handleToggleScanner}>Stop Scan</Button>
                ) : (
                <Button onClick={handleToggleScanner}>{scannedData ? 'Start Scan Again' : 'Start Scan'}</Button>
                )}
            </div>
            <div className={`${scannedData ? 'hidden' : 'p-2 flex flex-col items-center justify-center'}`}>
                <Select variant='outlined' label='Select Camera' onChange={(value) => setFacingMode(value)}>
                    <Option value={"user"}>Front Camera (User)</Option>
                    <Option value={"environment"}>Back Camera (Environment)</Option>
                    {cameraList.map(camera => (
                    <Option key={camera.id} value={camera.id}>{camera.label}</Option>
                    ))}
                </Select>
                <video ref={videoRef} autoPlay playsInline muted></video>
            </div>
            <div className='p-2 text-center'>
                {scannedData && (
                <div>
                    {/* <div>
                        <p>Hasil Scan:</p>
                        <p>{scannedData}</p>
                    </div> */}
                    <div className='p-2' id='formulir'>
                        <div className='bg-white p-5 rounded-xl'>
                            <div className='flex items-center justify-between mb-2'>
                                <h2 className=''>Berikut ini adalah Asset yang anda pinjam:</h2>
                            </div>
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
                            <div className='bg-white'>
                                <h2 className='border-t-[1px] border-black pt-4 mt-8 text-left mb-4'>
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
                                        className=''
                                        type='submit'
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}            
            </div>
        </>
    );
};

export default ScanLease;
