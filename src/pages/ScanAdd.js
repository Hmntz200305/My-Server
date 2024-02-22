import React, { useEffect, useRef, useState } from 'react';
import QrScanner from 'qr-scanner';
import { Button, Select, Option } from '@material-tailwind/react';
import { MaterialReactTable, createMRTColumnHelper, } from 'material-react-table';

const ScanAdd = () => {
  const videoRef = useRef(null);
  const [isScannerActive, setIsScannerActive] = useState(false);
  const [scannedData, setScannedData] = useState(null);
  const [facingMode, setFacingMode] = useState('environment');
  const [cameraList, setCameraList] = useState([]);
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
    setScannedData(null);
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
              <h2 className='text-white'>Welcome, Scan Add page :)</h2>
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
              <>
                {/* <div>
                  <p>Hasil Scan:</p>
                  <p>{scannedData}</p>
                </div> */}
                <div className='mt-4'>
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
                <div className='flex justify-end mt-2'>
                  <Button>
                    Add Asset
                  </Button>
                </div>
               
              </>
            )}            
        </div>
    </>
  );
};

export default ScanAdd;
