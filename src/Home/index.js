import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Boleta from '../components/Boleta';
import FirstBlock from '../components/FirstBlock';
import Header from '../Header';
import Maestros from '../components/Maestros';
import Perfil from '../components/Perfil';

export default function Home() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<FirstBlock />} />
        <Route path="/boleta" element={<Boleta />} />
        <Route path="/maestros" element={<Maestros />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  );
}
