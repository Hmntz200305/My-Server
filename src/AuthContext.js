import React, { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [openSidebar, setOpenSidebar] = useState(true);
    const [openDrawer, setOpenDrawer] = useState(false);
    const [isDesktopView, setIsDesktopView] = useState(window.innerWidth > 768);

    const handleResizeMobile = () => {
        setIsDesktopView(window.innerWidth > 768);
    }; 
    
    const handleResizeApp = () => {
      if (window.innerWidth <= 768) {
        setOpenSidebar(false);
      } else {
        setOpenSidebar(true);
      }
    };
    
    useEffect(() => {
        window.addEventListener('resize', handleResizeMobile);
  
        return () => {
        window.removeEventListener('resize', handleResizeMobile);
        };
    }, []);
  
    useEffect(() => {
      window.addEventListener('resize', handleResizeApp);
      return () => {
        window.removeEventListener('resize', handleResizeApp);
      };
    }, []);

    return (
        <AuthContext.Provider value={{ openSidebar, setOpenSidebar, openDrawer, setOpenDrawer, isDesktopView, setIsDesktopView,}}>
          {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};