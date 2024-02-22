import React, { useState} from 'react'
import { faPenToSquare, faTrash, faUserShield, faUser, } from '@fortawesome/free-solid-svg-icons';
import {  faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input, Menu, MenuList, MenuItem, MenuHandler, Button } from "@material-tailwind/react";
import Modal from 'react-modal';
import { MaterialReactTable, createMRTColumnHelper,} from 'material-react-table';
import { useAuth } from '../AuthContext';

const ListUser = () => {

    const { openSidebar, isDesktopView,} = useAuth();
    const [ modalEdit, setModalEdit ] = useState(false)
    const [ modalDelete, setModalDelete ] = useState(false)
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [selectedRole, setSelectedRole] = useState(null);

    const handleOptionSelectRole = (role) => {
        setSelectedRole({ ...selectedRole, role });
    };
    const StatusOptions = [
        { id: 1, role: 'Super Admin' },
        { id: 2, role: 'Admin' },
        { id: 3, role: 'User' },
    ];

    const visiblePasswordHandler = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleModalEdit = () => {
        setModalEdit((prev) => !prev);
    }

    const handleModalDelete = () => {
        setModalDelete((prev) => !prev);
    }

    const fakeData = [
        {
            no: 1,
            username: 'john_doe',
            email: 'john.doe@example.com',
            role: 'Admin',
            createdDate: '2022-01-01',
        },
        {
            no: 2,
            username: 'jane_smith',
            email: 'jane.smith@example.com',
            role: 'User',
            createdDate: '2022-02-15',
        },
        {
            no: 3,
            username: 'bob_marley',
            email: 'bob.marley@example.com',
            role: 'Moderator',
            createdDate: '2022-03-20',
        },
        {
            no: 4,
            username: 'alice_wonderland',
            email: 'alice.wonderland@example.com',
            role: 'User',
            createdDate: '2022-04-05',
        },
        {
            no: 5,
            username: 'charlie_brown',
            email: 'charlie.brown@example.com',
            role: 'Admin',
            createdDate: '2022-05-10',
        },
        {
            no: 6,
            username: 'diana_prince',
            email: 'diana.prince@example.com',
            role: 'User',
            createdDate: '2022-06-15',
        },
        {
            no: 7,
            username: 'edward_scissorhands',
            email: 'edward.scissorhands@example.com',
            role: 'Moderator',
            createdDate: '2022-07-20',
        },
        {
            no: 8,
            username: 'fiona_shrek',
            email: 'fiona.shrek@example.com',
            role: 'Admin',
            createdDate: '2022-08-25',
        },
        {
            no: 9,
            username: 'gandalf_gray',
            email: 'gandalf.gray@example.com',
            role: 'User',
            createdDate: '2022-09-30',
        },
        {
            no: 10,
            username: 'harry_potter',
            email: 'harry.potter@example.com',
            role: 'Admin',
            createdDate: '2022-10-05',
        },
    ];

    const columnHelper = createMRTColumnHelper();
    const fakeColumn = [
        columnHelper.accessor('no', {
            header: 'No',
            size: 40,
        }),
        columnHelper.accessor('username', {
            header: 'Username',
            size: 120,
        }),
        columnHelper.accessor('email', {
            header: 'Email',
            size: 120,
        }),
        columnHelper.accessor('role', {
            header: 'Role',
            size: 120,
        }),
        columnHelper.accessor('createdDate', {
            header: 'Created Date',
            size: 120,
        }),
        columnHelper.accessor('action', {
            header: 'Action',
            size: 120,
            enableSorting: false,
            enableColumnFilter: false,
            Cell: ({row}) => (
              <div className='text-white'>
                <button className='bg-green-500 p-2 rounded-lg hover:bg-green-700 m-0.5' onClick={handleModalEdit}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button className='bg-red-500 p-2 rounded-lg hover:bg-red-700 m-0.5' onClick={handleModalDelete}>
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
                    <h2 className='text-white'>Welcome, List of User page :)</h2>
                </div>
            </div>

            <div className='p-2 ' id='data tabel'>
                {isDesktopView && (
                    <Modal
                        isOpen={modalDelete}
                        onRequestClose={handleModalDelete}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                        shouldCloseOnOverlayClick={false}
                    >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin ingin menghapus User ini?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded" onClick={handleModalDelete}>Cancel</Button>
                                    <Button className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded">Delete</Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
                {!isDesktopView && (
                    <Modal
                        isOpen={modalDelete}
                        onRequestClose={handleModalDelete}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className='modal-content bg-transparent p-4 w-screen'
                        shouldCloseOnOverlayClick={false}
                    >
                        <div className='p-2'>
                            <div className="flex flex-col items-center justify-center bg-white p-2 shadow-xl rounded-2xl">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Apakah anda yakin ingin menghapus User ini?</p>
                                </div>
                                <div className="flex space-x-4 mt-5">
                                    <Button className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded" onClick={handleModalDelete}>Cancel</Button>
                                    <Button className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded">Delete</Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
                
                {isDesktopView && (
                    <Modal 
                        isOpen={modalEdit}
                        onRequestClose={handleModalEdit}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className={`modal-content bg-transparent p-4 w-screen ${openSidebar ? ' pl-[315px]' : ''}`}
                        shouldCloseOnOverlayClick={false} 
                    >
                        <div className=''>
                            <div className="flex flex-col bg-white p-2 shadow-xl rounded-2xl space-y-4">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Silahkan inputkan data User yang baru</p>
                                </div>
                                <div className='flex items-center gap-4 relative'>
                                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Username</label>
                                    <Input 
                                        variant="outline"
                                        label="Input Username"
                                        required
                                    />
                                    <button className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                        <FontAwesomeIcon icon={faUser} />
                                    </button>
                                </div>
                                <div className='flex items-center gap-4 relative'>
                                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Password</label>
                                    <Input 
                                        variant="outline"
                                        label="Input Password"
                                        type={passwordVisible ? "text" : "password"}
                                        required
                                    />
                                    <button className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={visiblePasswordHandler}>
                                        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                    </button>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Role</label>
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
                                            <MenuList className="max-w-[18rem] z-[1000]">
                                                {StatusOptions.map((role) => (
                                                <MenuItem key={role.id} value={role.role} onClick={() => handleOptionSelectRole(role.role)}>
                                                    {role.role}
                                                </MenuItem>
                                                ))}
                                            </MenuList>
                                        </Menu>
                                        <Input 
                                            className='w-full rounded-l-none'
                                            type="text"
                                            value={selectedRole?.role}
                                            onChange={(e) => setSelectedRole({ ...selectedRole, role: e.target.value })}
                                            disabled
                                            required
                                            label='Input Role'
                                        />
                                        <button className='absolute inset-y-0 right-0 flex items-center pr-3'>
                                            <FontAwesomeIcon icon={faUserShield} />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4 mt-5 mb-2">
                                    <Button className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded" onClick={handleModalEdit}>Cancel</Button>
                                    <Button className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded">Submit</Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
                {!isDesktopView && (
                    <Modal 
                        isOpen={modalEdit}
                        onRequestClose={handleModalEdit}
                        contentLabel="Contoh Modal"
                        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[1000]"
                        className='modal-content bg-transparent p-4 w-screen'
                        shouldCloseOnOverlayClick={false} 
                    >
                        <div className=''>
                            <div className="flex flex-col bg-white p-2 shadow-xl rounded-2xl space-y-4">
                                <div className='flex flex-col text-center mb-2'>
                                    <h1 className="text-2xl font-semibold">Select Action</h1>
                                    <p>Silahkan inputkan data User yang baru</p>
                                </div>
                                <div className='flex items-center gap-4 relative'>
                                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Username</label>
                                    <Input 
                                        variant="outline"
                                        label="Input Username"
                                        required
                                    />
                                    <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                                        <FontAwesomeIcon icon={faUser} />
                                    </button>
                                </div>
                                <div className='flex items-center gap-4 relative'>
                                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Password</label>
                                    <Input 
                                        variant="outline"
                                        label="Input Password"
                                        type={passwordVisible ? "text" : "password"}
                                        required
                                    />
                                    <button className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={visiblePasswordHandler}>
                                        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                    </button>
                                </div>
                                <div className='flex items-center gap-4'>
                                    <label className={`pr-4 w-32 text-right ${isDesktopView ? 'hidden lg:inline' : ''}`}>Role</label>
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
                                            <MenuList className="max-w-[18rem] z-[1000]">
                                                {StatusOptions.map((role) => (
                                                <MenuItem key={role.id} value={role.role} onClick={() => handleOptionSelectRole(role.role)}>
                                                    {role.role}
                                                </MenuItem>
                                                ))}
                                            </MenuList>
                                        </Menu>
                                        <Input 
                                            className='w-full rounded-l-none'
                                            type="text"
                                            value={selectedRole?.role}
                                            onChange={(e) => setSelectedRole({ ...selectedRole, role: e.target.value })}
                                            disabled
                                            required
                                            label='Input Role'
                                        />
                                        <button className="absolute inset-y-0 right-0 flex items-center pr-3">
                                            <FontAwesomeIcon icon={faUserShield} />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-center space-x-4 mt-5 mb-2">
                                    <Button className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded" onClick={handleModalEdit}>Cancel</Button>
                                    <Button className=" hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded">Submit</Button>
                                </div>
                            </div>
                        </div>
                    </Modal>
                )}
                <div>
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
        </>
    )
}
export default ListUser;