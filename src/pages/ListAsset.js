import React, { useState, useCallback } from 'react';
import { useAuth } from '../AuthContext';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel, Button, Input,  Menu, MenuList, MenuItem, MenuHandler, } from "@material-tailwind/react";
import { faFileCsv, faPenToSquare, faTrash, faFilePdf, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDropzone } from 'react-dropzone';
import { MaterialReactTable, createMRTColumnHelper,} from 'material-react-table';
import Adjust from '../resources/img/adjust.png'
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ListAsset = () => {

    const ExportContent = () => {
        return (
            <div className='flex flex-col p-2 gap-1'>
                <p className='mb-4'>Silahkan pilih ingin mengexport dengan apa </p>
                <div className='flex space-x-[1px]'>
                    <Button className='bg-gray-800 cursor-default'>
                        <FontAwesomeIcon icon={faFileCsv} size='xl' />
                    </Button>
                    <div className='flex flex-grow items-center border rounded border-gray-800'>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white'
                        >
                            by All Rows
                        </button>
                        <button
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                            by Page Rows
                        </button>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                            by Selected Rows
                        </button>
                    </div>
                </div>
                <div className='flex space-x-[1px]'>
                    <Button className='bg-gray-800 cursor-default'>
                        <FontAwesomeIcon icon={faFilePdf} size='xl' />
                    </Button>
                    <div className='flex flex-grow items-center border rounded border-gray-800'>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                            by All Rows
                        </button>
                        <button 
                            className='flex-grow rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                            by Page Rows
                        </button>
                        <button 
                            className='flex-grow items-center rounded py-[8px] text-black hover:bg-gray-800 hover:text-white' 
                        >
                            by Selected Rows
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    const ImportContent = () => {

        const [selectedFile, setSelectedFile] = useState(null);

        const onDrop = useCallback(acceptedFiles => {
            const allowedFormats = ['.csv', '.xlsx'];
            const isFormatValid = acceptedFiles.every(file => allowedFormats.includes(file.name.slice(file.name.lastIndexOf('.'))));
    
            const maxFileSize = 10 * 1024 * 1024;
            const isSizeValid = acceptedFiles.every(file => file.size <= maxFileSize);
    
            if (isFormatValid && isSizeValid) {
              setSelectedFile(acceptedFiles[0]?.name);
            } else {
              alert('Invalid file format or size. Please select a valid file.');
            }
          }, []);
    
          const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

        return (
            <div className='flex flex-col p-2'>
                <p className='mb-4'>Silahkan download terlebih dahulu template untuk importnya:
                    <span className='font-semibold underline cursor-pointer ml-2'>Download</span>
                </p>
                <div className='flex items-center'>
                    <div {...getRootProps()} className='flex flex-col flex-grow items-center justify-center h-36 w-full border-2 border-gray-800 border-dashed rounded-lg cursor-pointer'>
                        <svg className="w-8 h-8 mb-4 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <input {...getInputProps()}/>
                        {
                            isDragActive ?
                            <p>Drop the files here ...</p> 
                            :
                            <p><span className='font-semibold'>Click to upload</span> or drag and drop</p>
                        }
                        <p className="text-xs text-gray-800 mt-2">Only CSV/XLSX (MAX. 10MB)</p>
                        <p className='text-gray text-sm'>Selected File: <span className='underline'>{selectedFile}</span></p>
                    </div>
                </div>
                <Button className='bg-gray-800 mt-2'>Upload</Button>
            </div>
          )
      }

      const { openSidebar,isDesktopView,} = useAuth();
      const [modalEdit, setModalEdit] = useState(false);
      const [modalDelete, setModalDelete] = useState(false);
      const [modalPhoto, setModalPhoto] = useState(false);
      const [modalQr, setModalQr] = useState(false);
      const [selectedAsset, setSelectedAsset] = useState(null);

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

      const handleModalQr = () => {
        setModalQr((prev) => !prev);
      }

      const openModalEdit = () => {
        setModalEdit(true);
      }
      const closeModalEdit = () => {
        setModalEdit(false);
      }
    
      const openModalDelete = () => {
        setModalDelete(true);
      }
      const closeModalDelete = () => {
        setModalDelete(false);
      }

      const [activeTab, setActiveTab] = useState("export");
      const data = [
      {
          label: "Export",
          value: "export",
          content: <ExportContent />,
      },
      {
          label: "Import",
          value: "import",
          content: <ImportContent />,
      },
    ];

    const generateFakeData = (count) => {
      const fakeData = [];
      for (let i = 1; i <= count; i++) {
        fakeData.push({
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
          action: 'Edit / Delete',
        });
      }
      return fakeData;
    };
    const fakeData = generateFakeData(10);

    
    const columnHelper = createMRTColumnHelper();
    const fakeColumn = [
      columnHelper.accessor('row', {
        header: 'No',
        size: 20,
      }),
      columnHelper.accessor('id', {
        header: 'ID Asset',
        size: 120,
      }),
      columnHelper.accessor('name', {
        header: 'Name',
        size: 120,
      }),
      columnHelper.accessor('description', {
        header: 'Description',
        size: 200,
      }),
      columnHelper.accessor('brand', {
        header: 'Brand',
        size: 120,
      }),
      columnHelper.accessor('model', {
        header: 'Model',
        size: 120,
      }),
      columnHelper.accessor('status', {
        header: 'Status',
        size: 120,
        filterVariant: 'select',
        filterSelectOptions: ['Active', 'Inactive'],
      }),
      columnHelper.accessor('location', {
        header: 'Location',
        size: 120,
        filterVariant: 'select',
        filterSelectOptions: ['Location A', 'Location B'],
      }),
      columnHelper.accessor('category', {
        header: 'Category',
        size: 120,
        filterVariant: 'select',
        filterSelectOptions: ['Category A', 'Category B'],
      }),
      columnHelper.accessor('sn', {
        header: 'SN',
        size: 120,
      }),
      columnHelper.accessor('image_path', {
        header: 'Photo',
        size: 20,
        enableSorting: false,
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <div className='cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105' onClick={handleModalPhoto}>
            <img src={Adjust} alt="Asset" style={{ width: '70px', height: 'auto' }} />
          </div>
        ),
      }),
      columnHelper.accessor('qrcode_path', {
        header: 'QRCode',
        size: 20,
        enableSorting: false,
        enableColumnFilter: false,
        Cell: ({ row }) => (
          <div className='cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105' onClick={handleModalQr}>
            <img src={Adjust} alt="Qr" style={{ width: '62px', height: 'auto' }} />
          </div>
        ),
      }),
      columnHelper.accessor('action', {
        header: 'Action',
        size: 120,
        enableSorting: false,
        enableColumnFilter: false,
        Cell: ({row}) => (
          <div className='text-white'>
            <button className='bg-green-500 p-2 rounded-lg hover:bg-green-700 m-0.5' onClick={openModalEdit}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className='bg-red-500 p-2 rounded-lg hover:bg-red-700 m-0.5' onClick={openModalDelete}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ),
      }),
    ];

    return (
        <>
            <div className='p-2'>
                <div className='bg-gray-800 mb-5 rounded-2xl p-4 shadow'>
                    <h2 className='text-white'>Selamat datang di List of Asset page:)</h2>
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
                            <Button className='border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none' onClick={handleModalPhoto}>CLose</Button>
                            <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Download</Button>
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
                            <Button className='border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none' onClick={handleModalPhoto}>CLose</Button>
                            <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Download</Button>
                        </div>
                    </div>
                </Modal>
            )}

            {isDesktopView && (
                <Modal 
                    isOpen={modalQr}
                    onRequestClose={handleModalQr}
                    overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center border-none"
                    className={`border-none bg-transparent p-4 w-3/2 ${openSidebar ? ' pl-[315px]' : ''}`}
                    shouldCloseOnOverlayClick={false}
                >
                    <div className='p-2 bg-[#efefef] flex justify-center items-center flex-col'>
                        <img src={Adjust} alt="QRCode" style={{height: '500px'}} />
                        <div className='flex mt-4 space-x-4'>
                            <Button className='border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none' onClick={handleModalQr}>Close</Button>
                            <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Download</Button>
                        </div>
                    </div>
                </Modal>
            )}
            {!isDesktopView && (
                <Modal 
                    isOpen={modalQr}
                    onRequestClose={handleModalQr}
                    overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center border-none"
                    className='modal-content bg-transparent p-4 w-screen border-none'
                    shouldCloseOnOverlayClick={false}
                >
                    <div className='p-2 bg-[#efefef] flex justify-center items-center flex-col relative'>
                      <div className='absolute'>
                        <button className='text-red font-bold'>X</button>
                      </div>
                      <img src={Adjust} alt="QRCode" />
                      <div className='flex mt-4 space-x-4'>
                        <Button className='border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none' onClick={handleModalQr}>Close</Button>
                        <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Download</Button>
                      </div>
                    </div>
                </Modal>
            )}

            {isDesktopView && (
              <Modal
                isOpen={modalEdit}
                onRequestClose={closeModalEdit}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                  <div className='bg-white rounded-2xl shadow p-4 space-y-4'>
                    <div className='flex p-4 items-baseline max-w-fit rounded-2xl'>
                      <h2 className='text-black text-2xl'>Edit Asset Form
                        <span className='text-black text-sm ml-2'>Input Asset data below:</span>
                      </h2>
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>ID</label>
                      <Input 
                        variant="outline"
                        label="Input Asset ID"
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Name</label>
                      <Input
                        variant="outline"
                        label="Input Asset Name"
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Description</label>
                      <Input 
                        variant="outline" 
                        label="Input Asset Description"
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Brand</label>
                      <Input 
                        variant="outline" 
                        label="Input Asset Brand" 
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Model</label>
                      <Input 
                        variant="outline" 
                        label="Input Asset Model"
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
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Photo</label>
                      <Input type='file' accept='image/*' variant="outline" label="Input Asset Photo" name='photo' />
                    </div>
                    <div className='flex gap-1 justify-end'>
                      <Button type="button" className='border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none' id="edit-button" onClick={closeModalEdit}>Cancel</Button>
                      <Button type="button" className='bg-green-500 hover:bg-green-600 shadow-none' id="edit-button">Edit Asset</Button>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            {!isDesktopView && (
              <Modal
                isOpen={modalEdit}
                onRequestClose={closeModalEdit}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className='modal-content bg-transparent p-4 w-screen'
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                  <div className='bg-white rounded-2xl shadow p-4 space-y-4'>
                    <div className='flex p-4 items-baseline max-w-fit rounded-2xl'>
                      <h2 className='text-black text-2xl'>Edit Asset Form
                        <span className='text-black text-sm ml-2'>Input Asset data below:</span>
                      </h2>
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>ID</label>
                      <Input 
                        variant="outline"
                        label="Input Asset ID"
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Name</label>
                      <Input
                        variant="outline"
                        label="Input Asset Name"
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Description</label>
                      <Input 
                        variant="outline" 
                        label="Input Asset Description"
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Brand</label>
                      <Input 
                        variant="outline" 
                        label="Input Asset Brand" 
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Model</label>
                      <Input 
                        variant="outline" 
                        label="Input Asset Model"
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
                      />
                    </div>
                    <div className='flex items-center gap-4'>
                      <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Photo</label>
                      <Input type='file' accept='image/*' variant="outline" label="Input Asset Photo" name='photo' />
                    </div>
                    <div className='flex gap-1 justify-end'>
                      <Button type="button" className='border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none' id="edit-button" onClick={closeModalEdit}>Cancel</Button>
                      <Button type="button" className='bg-green-500 hover:bg-green-600 shadow-none' id="edit-button">Edit Asset</Button>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            <div className='p-2'>
                <div className='bg-white rounded'>
                    <div className='flex justify-center'>
                        <h1 className="text-2xl font-semibold mt-6">Select Action</h1>
                    </div>
                    <Tabs value={activeTab} className='p-2'>
                        <TabsHeader 
                            className="rounded-none p-0 border-b border-blue-gray-50 mt-4 bg-white"
                            indicatorProps={{
                                className: "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none"
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
                isOpen={modalDelete}
                onRequestClose={closeModalDelete}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                  <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                    <div className='flex flex-col text-center mb-2'>
                      <h1 className="text-2xl font-semibold">Select Action</h1>
                      <p>Apakah anda yakin ingin menghapus Asset ini?</p>
                    </div>
                    <div className="flex space-x-4 mt-5">
                      <Button className="border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none " onClick={closeModalDelete}>
                        Cancel
                      </Button>
                      <Button className="bg-red-500 hover:bg-red-600 shadow-none">
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
                onRequestClose={closeModalDelete}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className='modal-content bg-transparent p-4 w-screen'
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                  <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                    <div className='flex flex-col text-center mb-2'>
                      <h1 className="text-2xl font-semibold">Select Action</h1>
                      <p>Apakah anda yakin ingin menghapus Asset ini?</p>
                    </div>
                    <div className="flex space-x-4 mt-5">
                      <Button className="border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none " onClick={closeModalDelete}>
                        Cancel
                      </Button>
                      <Button className="bg-red-500 hover:bg-red-600 shadow-none">
                        Delete
                      </Button>
                    </div>
                  </div>
                </div>
              </Modal>
            )}

            <div className='p-2'>
              <div className='mt-5'>
                <MaterialReactTable
                    columns={fakeColumn}
                    data={fakeData}
                    enableRowSelection={true}
                    enableDensityToggle={false}
                    initialState={{density: 'compact'}}
                    enableClickToCopy={false}
                    columnFilterDisplayMode= 'popover'
                    paginationDisplayMode= 'pages'
                    positionToolbarAlertBanner= 'bottom'
                />
              </div>
            </div>
        </>
    )
}

export default ListAsset;