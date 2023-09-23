import React from 'react';
import MobileNavbar from './MobileNavbar';
import DesktopNav from './DesktopNav';

export default function Header() {
  return (
    <>
      <DesktopNav />
      <MobileNavbar />
    </>
  );
}
