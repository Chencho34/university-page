import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Header';
import FirstBlock from '../FirstBlock';

export default function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<FirstBlock />} />
        {/* <Route path='/boleta' element={<Boleta />} /> */}
        {/* <Route path='/maestros' element={<Maestros />} /> */}
        {/* <Route path='/perfil' element={<Perfil />} /> */}
      </Routes>
    </>
  );
}
