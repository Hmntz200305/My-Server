import React, { useState, useEffect } from 'react'
import { useAuth } from './AuthContext';
import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Drawer, Avatar, Popover, PopoverContent,PopoverHandler, Badge } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro, faChalkboard,faComputer,faChevronDown,faAnglesLeft, faUserGear,faBook, faUserPlus, faList,faPlus,faPaperPlane,faClockRotateLeft,faHandHolding,faRotateLeft, faUserShield, faUsers, faCamera, faCirclePlus, faBarcode, faQrcode, faEnvelope, faUser,  faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import Lmd from './resources/img/logo.png'
import Profile from './resources/profile/superadmin.svg'
import Login from './Login'
import Dashboard from './pages/Dashboard';
import ListAsset from './pages/ListAsset'
import AddAsset from './pages/AddAsset'
import Lease from './pages/Lease'
import Return from './pages/Return'
import Submitted from './pages/Submitted'
import QRGen from './pages/QRGen'
import ScanAdd from './pages/ScanAdd'
import ScanCheck from './pages/ScanCheck'
import ScanLease from './pages/ScanLease'
import History from './pages/History'
import MyReport from './pages/MyReport'
import ListUser from './pages/ListUser' 
import AddUser from './pages/AddUser' 
import NotFound from './pages/NotFound'
import Notif from './pages/Notif'
import Test from './pages/Test'
import Gambar1 from './resources/img/1.png';
import Gambar2 from './resources/img/2.png';
import Gambar3 from './resources/img/3.png';
import Gambar4 from './resources/img/4.png';
import { Input, Button, } from "@material-tailwind/react";
import Modal from 'react-modal';
Modal.setAppElement('#root');

const getRandomImage = () => {
  const images = [Gambar1, Gambar2, Gambar3, Gambar4];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const App = () => {

  const [ beforeLogin, setBeforeLogin ] = useState(false)
  const [ afterLogin, setAfterLogin ] = useState(true)

  const loggined = () => {
    setBeforeLogin(false);
    setAfterLogin(true);
  }
  const logouted = () => {
    setAfterLogin(false);
    setBeforeLogin(true);
  }

  const Home1 = () => {
      const { isDesktopView, } = useAuth();
      const [backgroundImage, setBackgroundImage] = useState(getRandomImage);
      const [openModal, setOpenModal] = useState(false);
      const [passwordVisible, setPasswordVisible] = useState(false);

      const openModalHandler = () => {
        setOpenModal(true);
      }
      const closeModalHandler = () => {
          setOpenModal(false);
      }

      const visiblePasswordHandler = () => {
          setPasswordVisible(!passwordVisible);
      };

      useEffect(() => {
        setBackgroundImage(getRandomImage());
      }, []);

      return (
          <>
              <div className='bg-[#efefef]'>
                  <div className=" flex justify-center items-center min-h-screen">
                      <div className={`bg-white p-4 rounded-lg shadow-lg flex justify-center items-center space-x-8 ${isDesktopView ? 'w-1/2' : 'w-[90%]'}`}> 
                          {isDesktopView && (
                          <div
                              className="w-80 h-80 bg-cover object-contain flex items-center justify-center rounded-lg"
                              style={{ backgroundImage: `url(${backgroundImage})` }}
                          />
                          )}
                          <div className='flex-grow p-2'>
                          <h1 className="text-2xl font-semibold text-center mb-12">Login</h1>
                          <div className="space-y-4">
                              <div>
                                  <h2 className="text-sm text-gray-600 mb-2">Email</h2>
                                  <div className="relative">
                                      <i className="absolute inset-y-0 right-0 flex items-center pr-3">
                                          <FontAwesomeIcon icon={faEnvelope} />
                                      </i>
                                      <Input
                                          type="email"
                                          variant='outlined'
                                          label="Enter your email"
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
                                          variant='outlined'
                                          label="Enter your password"
                                          className="w-full py-2 pr-4 border rounded-lg focus:ring focus:ring-blue-200 focus:outline-none"
                                          required
                                      />
                                      <button className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={visiblePasswordHandler}>
                                          <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                      </button>
                                  </div>
                                  <div className='flex items-center justify-end'>
                                      <button className='text-sm p-2' onClick={openModalHandler}>Forgot Password ?</button>
                                  </div>
                              </div>
                              <Button
                                  type="submit"
                                  className="py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none"
                                  onClick={loggined}
                              >
                                  Login
                              </Button>
                          </div>
                          </div>
                      </div>
                      <Modal
                          isOpen={openModal}
                          onRequestClose={closeModalHandler}
                          contentLabel="Contoh Modal"
                          overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center"
                          className={`modal-content bg-none p-4 rounded ${isDesktopView ? 'w-1/2' : 'w-[90%]'}`}
                          shouldCloseOnOverlayClick={false}
                      >
                      <div className='p-2'>
                          <div className="flex flex-col items-center justify-center bg p-2 shadow-xl rounded-2xl gap-2 bg-white">
                              <div className='flex flex-col text-center mb-8 px-8'>
                                  <h1 className="text-2xl font-semibold">Forgot Password</h1>
                                  <p className='mt-2'>Silahkan lakukan Validasi Data, kemudian inputkan Password anda yang baru</p>
                              </div>
                              <hr className="border-t-2 border-gray-300 w-32" />
                              <div className="text-xs text-gray-500 mb-2">Validasi User</div>
                              <div className='flex items-center gap-4 w-full px-8'>
                                  {isDesktopView && (
                                      <label className='pr-4 w-32 text-right'>Username</label>
                                  )}
                                  <div className='flex-grow relative'>
                                      <Input 
                                          variant='outline' 
                                          label='Enter your previous username' 
                                          type='text'
                                      /> 
                                      <button className='absolute inset-y-0 right-0 flex items-center pr-4'>
                                          <FontAwesomeIcon icon={faUser} />
                                      </button>
                                  </div>
                              </div>
                              <div className='flex items-center gap-4 w-full px-8'>
                                  {isDesktopView && (
                                      <label className='pr-4 w-32 text-right'>Email</label>
                                  )}
                                  <div className='flex-grow relative'>
                                      <Input 
                                          variant='outline' 
                                          label='Enter your previous email' 
                                          type='email' 
                                      /> 
                                      <button className='absolute inset-y-0 right-0 flex items-center pr-4'>
                                          <FontAwesomeIcon icon={faEnvelope} />
                                      </button>
                                  </div>
                              </div>
                              <hr className="border-t-2 border-gray-300 mt-8 w-32" />
                              <div className="text-xs text-gray-500 mb-2">New Password</div>
                              <div className='flex items-center gap-4 w-full px-8'>
                                  {isDesktopView && (
                                      <label className='pr-4 w-32 text-right'>Password</label>
                                  )}
                                  <div className='relative flex-grow'>
                                      <Input 
                                          variant='outline' 
                                          label='Enter your  new password' 
                                          type={passwordVisible ? "text" : "password"}
                                      />
                                      <button className='absolute inset-y-0 right-0 flex items-center pr-4' onClick={visiblePasswordHandler}>
                                          <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
                                      </button>
                                  </div>
                              </div>
                              <div className="flex space-x-4 mt-5 mb-2">
                                  <Button className="main-btn hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded" onClick={closeModalHandler}>Cancel</Button>
                                  <Button className="main-btn hover:bg-slate-600 text-white font-semibold py-2 px-4 rounded" type='submit'>Submit</Button>
                              </div>
                          </div>
                      </div>
                  </Modal>
                  </div>
              </div>
          </>
      )
  }

  const Home2 = () => {
    const { openSidebar, setOpenSidebar, openDrawer, setOpenDrawer, isDesktopView, } = useAuth();
    const [rotateButton, setRotateButton] = useState(false);
    const [popoverProfile, setPopoverProfile] = useState(false);
    const [popoverLogout, setPopoverLogout] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(0);

    const popoverProfileHandler = {
      onMouseEnter: () => setPopoverProfile(true),
      onMouseLeave: () => setPopoverProfile(false),
    };

    const openPopoverLogout = () => {
      setPopoverLogout(true);
    };
    const closePopoverLogout = () => {
      setPopoverLogout(false);
    };

    const handleOpenSubmenu = (value) => {
      setOpenSubmenu(openSubmenu === value ? 0 : value);
    };
      
    const handleOpenSidebar = () => {
      setOpenSidebar((prev) => !prev);
      setRotateButton(!rotateButton);
    };
  
    const handleOpenDrawer = () => {
      setOpenDrawer((prev) => !prev);
      setRotateButton(!rotateButton);
    };

      return (
          <>
            <Router>
                <div className={`flex fixed z-[9997] text-white items-center w-full justify-between bg-gray-800 h-[60px] px-7 border-b ${openDrawer ? 'border-[#606060]' : 'border-[#efefef]'}`}>
                  <div className='flex justify-between items-center'>
                    <Link to='http://127.0.0.1:5000/'>
                      <div className='logo'>
                        <img src={Lmd} alt='logohe' className='w-[150px] h-auto flex m-auto items-center' />
                      </div>
                    </Link>
                  </div>

                  <div className='flex items-center'>
                    <div className='flex items-center cursor-default'>
                      <Popover 
                        open={popoverProfile} 
                        handler={setPopoverProfile}
                      >
                        <PopoverHandler {... popoverProfileHandler}>
                          <div className='flex items-center cursor-default bg-icon rounded-full'>
                            <Avatar src={Profile} alt='profile' className='object-contain brightness-0 invert' withBorder={true} color='white' size='sm' />
                          </div>
                        </PopoverHandler>
                          <div className={`font-semibold ml-1.5 overflow-hidden whitespace-nowrap overflow-ellipsis max-w-[60px] ${isDesktopView ? '' : 'hidden'}`}>
                            Hamam
                          </div>
                        <PopoverContent {... popoverProfileHandler} className='border-none z-[9997] bg-transparent shadow-none'>
                          <div className="flex flex-col opacity-90 justify-center shadow-md p-4 rounded-xl bg-gray-900 w-[250px]">
                            <Avatar src={Profile} alt='profile' className="object-contain brightness-0 invert mx-auto" size='lg' />
                            <div className="space-y-2 text-center divide-y divide-gray-700">
                              <div className="my-1 space-y-1 break-all">
                                <h2 className=" font-semibold text-sm break-all">Hamam</h2>
                              </div>
                              <div className="flex justify-center item-center content-center text-gray-400 pt-1 align-center">
                                <div className='tex-gray-400 text-xs pr-2'>
                                  <FontAwesomeIcon icon={faEnvelope} />
                                  <h3 className='text-xs'>hamam@gmail.com</h3>
                                </div>
                                <div className='text-gray-400 text-xs pl-2'>
                                  <FontAwesomeIcon icon={faUserShield} />
                                  <h3 className='text-xs'>Admin</h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>
                </div>
              </div>

              {/* CONTAINER */}
              <div className='flex'>
                {isDesktopView && (
                  <Card 
                    className={`h-screen text-white z-[9998] fixed mt-[60px] w-full bg-gray-800 rounded-none max-w-[296px] ${openSidebar ? 'sidebar-opened' : 'sidebar-closed'}`} 
                    id='sidebar' 
                    style={{left: openSidebar ? '0' : '-296px', 
                            transition: 'left 0.5s ease-in-out',
                          }}
                  >
                    <div className="mb-8 p-8">
                      <Typography variant="h5" className='uppercase text-center font-semibold text-2xl' color="white">
                        asset<br />management
                      </Typography>
                        <div className="relative">
                          <button 
                            onClick={handleOpenSidebar} 
                            className="absolute bottom-10 -right-14 w-10 h-8 bg-gray-800 border-[#efefef] border-2 rounded-full text-[#efefef]" 
                          >
                            <FontAwesomeIcon
                              icon={faAnglesLeft} 
                              size='xs' 
                              style={{transform: openSidebar ? 'rotate(0deg)' : 'rotate(180deg)', 
                                      transition: 'transform 0.8s ease', 
                                    }}
                            />
                          </button>
                        </div>
                    </div>
                    <List className='px-6 overflow-y-auto mb-20'>
                      {/* DASHBOARD */}
                      <Link to='/'>
                        <ListItem className='px-4 text-white hover:bg-[#323b49] hover:text-white focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                          <ListItemPrefix className='mr-3 w-6 h-6'>
                            <FontAwesomeIcon icon={faChalkboard}/>
                          </ListItemPrefix>
                          <Typography>
                            Dashboard
                          </Typography>
                        </ListItem>
                      </Link>
                      {/* ASSET */}
                      <Accordion
                        open={openSubmenu === 1}
                        icon={
                          <FontAwesomeIcon icon={faChevronDown} size=''
                            className={`mx-auto items-center flex h-3 w-4 transition-transform ${openSubmenu === 1 ? "rotate-180" : ""}`}
                          />
                        }
                      >
                        <ListItem className="p-0 px-1 hover:bg-[#323b49] active:bg-gray-600 focus:bg-gray-800 bg-gray-800" selected={openSubmenu === 1}>
                          <AccordionHeader onClick={() => handleOpenSubmenu(1)} className="border-b-0 p-3 bg-none text-white hover:text-white">
                            <ListItemPrefix className='mr-3 w-6 h-6'>
                              <FontAwesomeIcon icon={faComputer} size='sm' />
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                              Assets
                            </Typography>
                          </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="p-0 bg-gray-600">
                          <List className="p-0 gap-0">
                            <Link to='/listasset'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faList} />
                                </ListItemPrefix>
                                List of Asset
                              </ListItem>
                            </Link>
                            <Link to='/addasset'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faPlus} />
                                </ListItemPrefix>
                                Add an Asset
                              </ListItem>
                            </Link>
                            <Link to='/lease'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faHandHolding} />
                                </ListItemPrefix>
                                Lease
                              </ListItem>
                            </Link>
                            <Link to='/return'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faRotateLeft} />
                                </ListItemPrefix>
                                Return
                              </ListItem>
                            </Link>
                            <Link to='/submitted'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faPaperPlane} />
                                </ListItemPrefix>
                                Submitted
                                <ListItemSuffix>
                                  <Badge>
                                    <Chip value="51" size="sm" variant="white" color="gray-800" className="rounded-full" />
                                  </Badge>
                                </ListItemSuffix>
                              </ListItem>
                            </Link>
                            <Link to='/QRGen'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faQrcode} />
                                </ListItemPrefix>
                                QR Generator
                              </ListItem>
                            </Link>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      {/* SCAN */}
                      <Accordion
                        open={openSubmenu === 2}
                        icon={
                          <FontAwesomeIcon icon={faChevronDown} size=''
                            className={`mx-auto items-center flex h-3 w-4 transition-transform ${openSubmenu === 2 ? "rotate-180" : ""}`}
                          />
                        }
                      >
                        <ListItem className="p-0 px-1 hover:bg-[#323b49] active:bg-gray-600 focus:bg-gray-800 bg-gray-800" selected={openSubmenu === 2}>
                          <AccordionHeader onClick={() => handleOpenSubmenu(2)} className="border-b-0 p-3 bg-none text-white hover:text-white">
                            <ListItemPrefix className='mr-3 w-6 h-6'>
                              <FontAwesomeIcon icon={faCameraRetro} size='sm' />
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                              Scan
                            </Typography>
                          </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="p-0 bg-gray-600">
                          <List className="p-0 gap-0">
                            <Link to='/scanadd'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faCirclePlus}/>
                                </ListItemPrefix>
                                Scan Add
                              </ListItem>
                            </Link>
                            <Link to='/scanlease'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faBarcode} />
                                </ListItemPrefix>
                                Scan Lease
                              </ListItem>
                            </Link>
                            <Link to='/scancheck'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faCamera} />
                                </ListItemPrefix>
                                Scan Check
                              </ListItem>
                            </Link>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      {/* REPORT */}
                      <Accordion
                        open={openSubmenu === 3}
                        icon={
                          <FontAwesomeIcon icon={faChevronDown} size=''
                            className={`mx-auto items-center flex h-3 w-4 transition-transform ${openSubmenu === 3 ? "rotate-180" : ""}`}
                          />
                        }
                      >
                        <ListItem className="p-0 px-1 hover:bg-[#323b49] active:bg-gray-600 focus:bg-gray-800 bg-gray-800" selected={openSubmenu === 3}>
                          <AccordionHeader onClick={() => handleOpenSubmenu(3)} className="border-b-0 p-3 bg-none text-white hover:text-white">
                            <ListItemPrefix className='mr-3 w-6 h-6'>
                              <FontAwesomeIcon icon={faBook} size='sm' />
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                              Reports
                            </Typography>
                          </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="p-0 bg-gray-600">
                          <List className="p-0 gap-0">
                            <Link to='/history'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faClockRotateLeft}/>
                                </ListItemPrefix>
                                History
                              </ListItem>
                            </Link>
                            <Link to='myreport'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faFileLines} />
                                </ListItemPrefix>
                                My Report
                              </ListItem>
                            </Link>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      {/* MANAGE USER */}
                      <Accordion
                        open={openSubmenu === 4}
                        icon={
                          <FontAwesomeIcon icon={faChevronDown}
                            className={`mx-auto items-center flex h-3 w-4 transition-transform ${openSubmenu === 4 ? "rotate-180" : ""}`}
                          />
                        }
                      >
                        <ListItem className="p-0 px-1 hover:bg-[#323b49] active:bg-gray-600 focus:bg-gray-800 bg-gray-800" selected={openSubmenu === 4}>
                          <AccordionHeader onClick={() => handleOpenSubmenu(4)} className="border-b-0 p-3 bg-none text-white hover:text-white">
                            <ListItemPrefix className='mr-3 w-6 h-6'>
                              <FontAwesomeIcon icon={faUserGear} size='sm' />
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                              Manage User
                            </Typography>
                          </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="p-0 bg-gray-600">
                          <List className="p-0 gap-0">
                              <Link to='/listuser'>
                                <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                  <ListItemPrefix className='mr-3 w-6 h-6'>
                                    <FontAwesomeIcon icon={faUsers}/>
                                  </ListItemPrefix>
                                  List of User
                                </ListItem>
                              </Link>
                            <Link to='/adduser'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faUserPlus} />
                                </ListItemPrefix>
                                Add an User
                              </ListItem>
                            </Link>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      <Popover
                        open={popoverLogout}
                        handler={setPopoverLogout}
                        placement='bottom'
                      >
                        <PopoverHandler>
                          <ListItem 
                            className=' py-2 mt-4 flex justify-center items-center text-sm text-white bg-gray-600 hover:text-white hover:bg-[#323b49] focus:text-white focus:bg-gray-600 active:bg-gray-600 active:text-white' 
                          >
                              Log Out
                          </ListItem>
                        </PopoverHandler>
                        <PopoverContent className='z-[9999]'>
                            <div className='flex flex-col text-center mb-2'>
                              <Typography variant='paragraph'>Are you sure about that?</Typography>
                            </div>
                            <div className="flex space-x-4 mt-5">
                              <Button 
                                onClick={closePopoverLogout}
                                className="border border-gray-300 bg-transparent text-gray-800 hover:bg-gray-200 shadow-none">
                                Cancel
                              </Button>
                              <Button 
                                onClick={logouted}
                                className="bg-gray-800 hover:bg-gray-900 shadow-none">
                                Logout
                              </Button>
                            </div>
                        </PopoverContent>
                      </Popover>
                    </List>
                  </Card>
                  )}

                  {/* DRAWER */}
                  {!isDesktopView && (
                  <Drawer 
                  open={openDrawer} 
                  className='mt-[60px] z-[9998] w-full bg-gray-800' 
                  onClose={handleOpenDrawer}
                  overlayProps={{
                    className:'z-[9997] fixed mt-[60px]'
                  }}
                >
                    <div className="mb-8 p-8">
                      <Typography variant="h5" className='uppercase text-center font-semibold text-2xl' color="white">
                        asset<br />management
                      </Typography>
                      <div className="relative">
                          <button 
                            onClick={handleOpenDrawer} 
                            className={`absolute bottom-10 -right-14 bg-gray-800 border-2 rounded-full w-10 h-8 text-white ${openDrawer ? 'border-[#606060]' : 'border-[#efefef]'}`}
                          >
                            <FontAwesomeIcon 
                              icon={faAnglesLeft}
                              size='xs'
                              style={{transform: openDrawer ? 'rotate(0deg)' : 'rotate(180deg)', 
                                      transition: 'transform 0.8s ease', 
                                    }}
                            />
                          </button>
                      </div>
                    </div>
                    <List className='px-6 overflow-y-auto mb-20'>
                      {/* DASHBOARD */}
                      <Link to='/'>
                        <ListItem className='px-4 text-white hover:bg-[#323b49] hover:text-white focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                          <ListItemPrefix className='mr-3 w-6 h-6'>
                            <FontAwesomeIcon icon={faChalkboard}/>
                          </ListItemPrefix>
                          <Typography>
                            Dashboard
                          </Typography>
                        </ListItem>
                      </Link>
                      {/* ASSET */}
                      <Accordion
                        open={openSubmenu === 1}
                        icon={
                          <FontAwesomeIcon icon={faChevronDown} size=''
                            className={`mx-auto items-center flex h-3 w-4 transition-transform ${openSubmenu === 1 ? "rotate-180" : ""}`}
                          />
                        }
                      >
                        <ListItem className="p-0 px-1 hover:bg-[#323b49] active:bg-gray-600 focus:bg-gray-800 bg-gray-800" selected={openSubmenu === 1}>
                          <AccordionHeader onClick={() => handleOpenSubmenu(1)} className="border-b-0 p-3 bg-none text-white hover:text-white">
                            <ListItemPrefix className='mr-3 w-6 h-6'>
                              <FontAwesomeIcon icon={faComputer} size='sm' />
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                              Assets
                            </Typography>
                          </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="p-0 bg-gray-600">
                          <List className="p-0 gap-0">
                            <Link to='/listasset'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faList} />
                                </ListItemPrefix>
                                List of Asset
                              </ListItem>
                            </Link>
                            <Link to='/addasset'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faPlus} />
                                </ListItemPrefix>
                                Add an Asset
                              </ListItem>
                            </Link>
                            <Link to='/lease'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faHandHolding} />
                                </ListItemPrefix>
                                Lease
                              </ListItem>
                            </Link>
                            <Link to='/return'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faRotateLeft} />
                                </ListItemPrefix>
                                Return
                              </ListItem>
                            </Link>
                            <Link to='/submitted'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faPaperPlane} />
                                </ListItemPrefix>
                                Submitted
                              </ListItem>
                            </Link>
                            <Link to='/qrgen'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faQrcode} />
                                </ListItemPrefix>
                                QR Generator
                              </ListItem>
                            </Link>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      {/* SCAN */}
                      <Accordion
                        open={openSubmenu === 2}
                        icon={
                          <FontAwesomeIcon icon={faChevronDown} size=''
                            className={`mx-auto items-center flex h-3 w-4 transition-transform ${openSubmenu === 2 ? "rotate-180" : ""}`}
                          />
                        }
                      >
                        <ListItem className="p-0 px-1 hover:bg-[#323b49] active:bg-gray-600 focus:bg-gray-800 bg-gray-800" selected={openSubmenu === 2}>
                          <AccordionHeader onClick={() => handleOpenSubmenu(2)} className="border-b-0 p-3 bg-none text-white hover:text-white">
                            <ListItemPrefix className='mr-3 w-6 h-6'>
                              <FontAwesomeIcon icon={faCameraRetro} size='sm' />
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                              Scan
                            </Typography>
                          </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="p-0 bg-gray-600">
                          <List className="p-0 gap-0">
                            <Link to='/scanadd'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faCirclePlus}/>
                                </ListItemPrefix>
                                Scan Add
                              </ListItem>
                            </Link>
                            <Link to='/scanlease'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faBarcode} />
                                </ListItemPrefix>
                                Scan Lease
                              </ListItem>
                            </Link>
                            <Link to='/scancheck'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faCamera} />
                                </ListItemPrefix>
                                Scan Check
                              </ListItem>
                            </Link>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      {/* REPORT */}
                      <Accordion
                        open={openSubmenu === 3}
                        icon={
                          <FontAwesomeIcon icon={faChevronDown} size=''
                            className={`mx-auto items-center flex h-3 w-4 transition-transform ${openSubmenu === 3 ? "rotate-180" : ""}`}
                          />
                        }
                      >
                        <ListItem className="p-0 px-1 hover:bg-[#323b49] active:bg-gray-600 focus:bg-gray-800 bg-gray-800" selected={openSubmenu === 3}>
                          <AccordionHeader onClick={() => handleOpenSubmenu(3)} className="border-b-0 p-3 bg-none text-white hover:text-white">
                            <ListItemPrefix className='mr-3 w-6 h-6'>
                              <FontAwesomeIcon icon={faBook} size='sm' />
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                              Reports
                            </Typography>
                          </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="p-0 bg-gray-600">
                          <List className="p-0 gap-0">
                            <Link to='/history'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faClockRotateLeft}/>
                                </ListItemPrefix>
                                History
                              </ListItem>
                            </Link>
                            <Link to='myreport'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faFileLines} />
                                </ListItemPrefix>
                                My Report
                              </ListItem>
                            </Link>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      {/* MANAGE USER */}
                        <Accordion
                          open={openSubmenu === 4}
                          icon={
                            <FontAwesomeIcon icon={faChevronDown}
                              className={`mx-auto items-center flex h-3 w-4 transition-transform ${openSubmenu === 4 ? "rotate-180" : ""}`}
                            />
                          }
                        >
                        <ListItem className="p-0 px-1 hover:bg-[#323b49] active:bg-gray-600 focus:bg-gray-800 bg-gray-800" selected={openSubmenu === 4}>
                          <AccordionHeader onClick={() => handleOpenSubmenu(4)} className="border-b-0 p-3 bg-none text-white hover:text-white">
                            <ListItemPrefix className='mr-3 w-6 h-6'>
                              <FontAwesomeIcon icon={faUserGear} size='sm' />
                            </ListItemPrefix>
                            <Typography color="white" className="mr-auto font-normal">
                              Manage User
                            </Typography>
                          </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="p-0 bg-gray-600">
                          <List className="p-0 gap-0">
                              <Link to='/listuser'>
                                <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                  <ListItemPrefix className='mr-3 w-6 h-6'>
                                    <FontAwesomeIcon icon={faUsers}/>
                                  </ListItemPrefix>
                                  List of User
                                </ListItem>
                              </Link>
                            <Link to='/adduser'>
                              <ListItem className='px-4 text-white hover:bg-[#374151] hover:text-white hover:rounded-none focus:rounded-none focus:bg-[#323b49] focus:text-white active:bg-gray-600 active:text-white'>
                                <ListItemPrefix className='mr-3 w-6 h-6'>
                                  <FontAwesomeIcon icon={faUserPlus} />
                                </ListItemPrefix>
                                Add an User
                              </ListItem>
                            </Link>
                          </List>
                        </AccordionBody>
                      </Accordion>
                      <Link to='/'>
                        <ListItem 
                          className=' py-2 mt-4 flex justify-center items-center text-sm text-white bg-gray-600 hover:text-white hover:bg-[#323b49] focus:text-white focus:bg-gray-600 active:bg-gray-600 active:text-white' 
                          onClick={logouted}
                        >
                            Log Out
                        </ListItem>
                      </Link>
                    </List>
                  </Drawer>
                  )}

                <div 
                  className='bg-[#efefef] p-[20px] flex flex-col min-h-screen w-screen mt-[60px]' 
                  style={{marginLeft: isDesktopView ? (openSidebar ? '296px' : '0') : '0', 
                                width: isDesktopView ? (openSidebar ? 'calc(100% - 296px)' : '100%') : '100%', 
                                transition: 'margin 0.5s ease-in-out, width 0.5s ease-in-out',
                              }}
                >
                  <Routes>
                      <Route path="/" element={<Dashboard />} />
                      <Route path="*" element={<NotFound />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/listasset" element={<ListAsset />} />
                      <Route path="/addasset" element={<AddAsset />} />
                      <Route path="/lease" element={<Lease />} />
                      <Route path="/return" element={<Return />} />
                      <Route path="/submitted" element={<Submitted />} />
                      <Route path="/qrgen" element={<QRGen />} />
                      <Route path="/scanadd" element={<ScanAdd />} />
                      <Route path="/scanlease" element={<ScanLease />} />
                      <Route path="/scanCheck" element={<ScanCheck />} />
                      <Route path="/history" element={<History />} />
                      <Route path="/myreport" element={<MyReport />} />
                      <Route path="/listuser" element={<ListUser />} />
                      <Route path="/adduser" element={<AddUser />} />
                      <Route path="/notif" element={<Notif />} />
                      <Route path="/test" element={<Test />} />
                    </Routes>
                </div>
              </div>
            </Router>
          </>
      )
  }

  return (
    <>
      {beforeLogin && (
        <Home1 />
      )}
      {afterLogin && (
        <Home2 />
      )}
    </>
  )
}

export default App;