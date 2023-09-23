import React from 'react';
import Navbar from '../Header';
import FirstBlock from '../FirstBlock';
import { Routes, Route } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path='/' element={<FirstBlock />} />
        {/* <Route path='/boleta' element={<Boleta />} /> */}
        {/* <Route path='/maestros' element={<Maestros />} /> */}
        {/* <Route path='/perfil' element={<Perfil />} /> */}
      </Routes>
    </>
  );
}
