import React, { useState } from 'react';
import { useAuth } from '../AuthContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-tailwind/react';
import 'react-toastify/dist/ReactToastify.css';

const Notif = () => {
  
  const { isDesktopView } = useAuth();

  const handleSuccess = () => {
    toast.success(
        <p className='ml-3'>
          Success!
        </p>,
      {
        icon: (
          <div className='bg-green-500 p-2 rounded-xl flex items-center w-8 h-8'>
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
        )
      });
  };

  const handleError = () => {
    toast.error(
        <p className='ml-3'>
          Error!
        </p>,
      {
        icon: (
          <div className='bg-red-500 p-2 rounded-xl flex items-center w-8 h-8 '>
            <FontAwesomeIcon icon={faThumbsDown} />
          </div>
        )
    });
  };

  const handleWarning = () => {
    toast.warning(
        <p className='ml-3'>
          Warning!
        </p>,
      {
        icon: (
          <div className='bg-yellow-700 p-2 rounded-xl flex items-center w-8 h-8'>
            <FontAwesomeIcon icon={faTriangleExclamation} />
          </div>
        )
    });
  };

  return (
    <>
      <div>
        {isDesktopView && (
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        )}
        {!isDesktopView && (
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            style={{ width: '250px' }}
          />
        )}
      </div>
      <div className='flex flex-col gap-2 h-min-screen justify-center'>
        <div>
            <Button onClick={handleSuccess}>Success Notif</Button>
        </div>
        <div>
            <Button onClick={handleError}>Error Notif</Button>
        </div>
        <div>
            <Button onClick={handleWarning}>Warning Notif</Button>
        </div>
      </div>
    </>
  );
};

export default Notif;
