import React, { useEffect } from 'react';
import ReactGA from 'react-ga4';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    ReactGA.initialize('G-0YMYMVD5H7'); // Replace with your tracking ID
    
  }, []);

  return (
    <div>
      {children}
    </div>
  );
};

export default Layout;
