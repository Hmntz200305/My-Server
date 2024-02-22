import React, { useEffect, useState} from 'react'
import { Input, Menu, MenuList, MenuItem, MenuHandler, Button } from "@material-tailwind/react";
import { faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAuth } from '../AuthContext';
import Gambar1 from '../resources/img/1.png'
import Gambar2 from '../resources/img/2.png'
import Gambar3 from '../resources/img/3.png'
import Gambar4 from '../resources/img/4.png'

const getRandomImage = () => {
  const images = [Gambar1, Gambar2, Gambar3, Gambar4];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const AddUser = () => {

    const { isDesktopView,} = useAuth();
    const [backgroundImage, setBackgroundImage] = useState(getRandomImage);
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

    useEffect(() => {
      setBackgroundImage(getRandomImage());
    }, []);

    return (
        <>
            <div className='p-2'>
                <div className='bg-gray-800 mb-5 rounded-2xl p-4 shadow'>
                    <h2 className='text-white'>Welcome, Add User page :)</h2>
                </div>
            </div>

            <div className='flex justify-center items-center'>
              <div className={`bg-white p-4 rounded-lg shadow-lg flex justify-center items-center space-x-8 ${isDesktopView ? 'w-3/2' : 'w-[90%]'}`}>
                  {isDesktopView && (
                    <div
                      className="w-80 h-80 bg-cover object-contain flex items-center justify-center rounded-lg"
                      style={{ backgroundImage: `url(${backgroundImage})` }}
                    />
                  )}
                  <div className='flex-grow p-2'>
                    <h1 className="text-2xl font-semibold text-center mb-4">Register</h1>
                    <div className="space-y-4">
                        <div>
                            <h2 className="text-sm text-gray-600 mb-2">Username</h2>
                            <div className="relative">
                                <i className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <FontAwesomeIcon icon={faUser} />
                                </i>
                                <Input
                                  type="user"
                                  variant='outlined'
                                  label="Enter username"
                                  className="w-full py-2 pr-4 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                                  required
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-sm text-gray-600 mb-2">Email</h2>
                            <div className="relative">
                                <i className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </i>
                                <Input
                                  type="email"
                                  variant='outlined'
                                  label="Enter email"
                                  className="w-full py-2 pr-4 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                                  required
                                />
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 mb-2">Password</label>
                            <div className="relative">
                                <Input
                                  type={passwordVisible ? "text" : "password"}
                                  label="Enter password"
                                  className="w-full py-2 pr-4 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                                  required
                                />
                                <button className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={visiblePasswordHandler}>
                                  <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm text-gray-600 mb-2">Role</label>
                            <div className='flex relative items-center'>
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
                                <button className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={visiblePasswordHandler}>
                                <FontAwesomeIcon icon={faUserShield} />
                                </button>
                            </div>
                        </div>
                        <Button
                          type="submit"
                          className="py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none"
                        >
                            Add User
                        </Button>
                    </div>
                  </div>
              </div>
          </div>
        </>
    )
};

export default AddUser;