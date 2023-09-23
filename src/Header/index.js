import React, { useEffect, useState } from 'react';
import MobileNavbar from './MobileNavbar';
import DesktopNav from './DesktopNav';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const handleSetIsMobile = () => {
    if (window.innerWidth <= 820) {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleSetIsMobile();
  });

  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <DesktopNav />
      )}
    </>
  );
}
