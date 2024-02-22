import React, { useState } from 'react'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../AuthContext';
import { Input, Menu, MenuList, MenuItem, MenuHandler, Button } from "@material-tailwind/react";
import Modal from 'react-modal';

const AddAsset = () => {
    const { openSidebar,isDesktopView,} = useAuth();
    const [modalStatus, setModalStatus] = useState(false);
    const [modalLocation, setModalLocation] = useState(false);
    const [modalCategory, setModalCategory] = useState(false);
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

    const openModalStatus = () => {
      setModalStatus(true);
    };
    const closeModalStatus = () => {
      setModalStatus(false);
    };

    const openModalLocation = () => {
      setModalLocation(true);
    };
    const closeModalLocation = () => {
      setModalLocation(false);
    };

    const openModalCategory = () => {
      setModalCategory(true);
    };
    const closeModalCategory = () => {
      setModalCategory(false);
    };

    return (
        <>
            <div className='p-2'>
                <div className='bg-gray-800 mb-5 rounded-2xl p-4 shadow'>
                    <h2 className='text-white'>Welcome, Add an Asset page :)</h2>
                </div>
            </div>

            {isDesktopView && (
              <Modal
                isOpen={modalStatus}
                onRequestClose={closeModalStatus}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                    <div className="flex flex-col bg-white p-2 shadow-xl rounded-2xl">
                        <div className='flex flex-col text-center mb-2'>
                            <h1 className="text-2xl font-semibold">Select Action</h1>
                            <p>Silahkan masukan Status yang ingin ditambahkan</p>
                        </div>
                        <div className='flex items-center gap-4 px-4'>
                          <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Status</label>
                          <Input 
                            variant='outline'
                            label='Input Status' 
                            required
                          />
                        </div>
                        <div className="flex justify-center space-x-4 mt-5 mb-2">
                            <Button className="border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none" onClick={closeModalStatus}>Cancel</Button>
                            <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Tambah</Button>
                        </div>
                    </div>
                </div>
              </Modal>
            )}
            {!isDesktopView && (
              <Modal
                isOpen={modalStatus}
                onRequestClose={closeModalStatus}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className='modal-content bg-transparent p-4 w-screen'
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                    <div className="flex flex-col bg-white p-2 shadow-xl rounded-2xl">
                        <div className='flex flex-col text-center mb-2'>
                            <h1 className="text-2xl font-semibold">Select Action</h1>
                            <p>Silahkan masukan Status yang ingin ditambahkan</p>
                        </div>
                        <div className='flex items-center gap-4 px-4'>
                          <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Status</label>
                          <Input 
                            variant='outline'
                            label='Input Status' 
                            required
                          />
                        </div>
                        <div className="flex justify-center space-x-4 mt-5 mb-2">
                            <Button className="border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none" onClick={closeModalStatus}>Cancel</Button>
                            <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Tambah</Button>
                        </div>
                    </div>
                </div>
              </Modal>
            )}

            {isDesktopView && (
              <Modal
                isOpen={modalLocation}
                onRequestClose={closeModalLocation}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                    <div className="flex flex-col bg-white p-2 shadow-xl rounded-2xl">
                        <div className='flex flex-col text-center mb-2'>
                            <h1 className="text-2xl font-semibold">Select Action</h1>
                            <p>Silahkan masukan Lokasi yang ingin ditambahkan</p>
                        </div>
                        <div className='flex items-center gap-4 px-4'>
                            <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Location</label>
                            <Input
                              variant='outline' 
                              label='Masukan Lokasi' 
                              required
                            />
                        </div>
                        <div className="flex justify-center space-x-4 mt-5 mb-2">
                            <Button className="border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none" onClick={closeModalLocation}>Cancel</Button>
                            <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Tambah</Button>
                        </div>
                    </div>
                </div>
              </Modal>
            )}
            {!isDesktopView && (
              <Modal
                isOpen={modalLocation}
                onRequestClose={closeModalLocation}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className='modal-content bg-transparent p-4 w-screen'
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                    <div className="flex flex-col bg-white p-2 shadow-xl rounded-2xl">
                        <div className='flex flex-col text-center mb-2'>
                            <h1 className="text-2xl font-semibold">Select Action</h1>
                            <p>Silahkan masukan Lokasi yang ingin ditambahkan</p>
                        </div>
                        <div className='flex items-center gap-4 px-4'>
                            <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Location</label>
                            <Input
                              variant='outline' 
                              label='Masukan Lokasi' 
                              required
                            />
                        </div>
                        <div className="flex justify-center space-x-4 mt-5 mb-2">
                            <Button className="border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none" onClick={closeModalLocation}>Cancel</Button>
                            <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Tambah</Button>
                        </div>
                    </div>
                </div>
              </Modal>
            )}

            {isDesktopView && (
              <Modal
                isOpen={modalCategory}
                onRequestClose={closeModalCategory}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                    <div className="flex flex-col bg-white p-2 shadow-xl rounded-2xl">
                        <div className='flex flex-col text-center mb-2'>
                            <h1 className="text-2xl font-semibold">Select Action</h1>
                            <p>Silahkan masukan Kategori yang ingin ditambahkan</p>
                        </div>
                        <div className='flex gap-4 items-center px-4'>
                        <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Category</label>
                            <Input 
                              variant='outline'
                              label='Masukan Category' 
                              required
                            />
                        </div>
                        <div className="flex justify-center space-x-4 mt-5 mb-2">
                            <Button className="border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none" onClick={closeModalCategory}>Cancel</Button>
                            <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Tambah</Button>
                        </div>
                    </div>
                </div>
              </Modal>
            )}
            {!isDesktopView && (
              <Modal
                isOpen={modalCategory}
                onRequestClose={closeModalCategory}
                contentLabel="Contoh Modal"
                overlayClassName="fixed inset-0 z-50 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                className='modal-content bg-transparent p-4 w-screen'
                shouldCloseOnOverlayClick={false}
              >
                <div className='p-2'>
                    <div className="flex flex-col bg-white p-2 shadow-xl rounded-2xl">
                        <div className='flex flex-col text-center mb-2'>
                            <h1 className="text-2xl font-semibold">Select Action</h1>
                            <p>Silahkan masukan Kategori yang ingin ditambahkan</p>
                        </div>
                        <div className='flex gap-4 items-center px-4'>
                        <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Category</label>
                            <Input 
                              variant='outline'
                              label='Masukan Category' 
                              required
                            />
                        </div>
                        <div className="flex justify-center space-x-4 mt-5 mb-2">
                            <Button className="border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none" onClick={closeModalCategory}>Cancel</Button>
                            <Button className='bg-gray-800 hover:bg-gray-900 shadow-none'>Tambah</Button>
                        </div>
                    </div>
                </div>
              </Modal>
            )}

            <div className='p-2'>
              <div className='bg-white rounded-2xl shadow p-4 space-y-4'>
                <div className='flex p-4 items-baseline max-w-fit rounded-2xl'>
                  <h2 className='text-black text-2xl'>Add Asset Form
                    <span className='text-black text-sm ml-2'>Input Asset data below:</span>
                  </h2>
                </div>
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
                    <Button
                      ripple={false}
                      className='absolute right-0 px-4 z-10 bg-gray-800 hover:bg-gray-900 shadow-none'
                      onClick={openModalStatus}
                    >
                    <FontAwesomeIcon icon={faPlus} />
                    </Button>
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
                      <Button
                        ripple={false}
                        className='absolute right-0 px-4 z-10 bg-gray-800 hover:bg-gray-900 shadow-none'
                        onClick={openModalLocation}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
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
                    <Button
                        ripple={false}
                        className='absolute right-0 px-4 z-10 bg-gray-800 hover:bg-gray-900 shadow-none'
                        onClick={openModalCategory}
                    >
                    <FontAwesomeIcon icon={faPlus} />
                    </Button>
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
                <div className='flex items-center gap-4'>
                  <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Photo</label>
                  <Input type='file' accept='image/*' variant="outline" label="Input Asset Photo" name='photo' />
                </div>
                <div className='flex justify-end'>
                    <Button 
                        type="button" 
                        className='bg-gray-800 hover:bg-gray-900 shadow-none' 
                        id="edit-button" 
                    >
                        Add Asset
                    </Button>
                </div>
              </div>
            </div>   
        </>
    )
}
export default AddAsset