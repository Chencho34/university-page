import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/logo_tecnm.png';
import './styles.css';

const paths = [
  { path: '/', item: 'mi panel' },
  { path: '/boleta', item: 'boleta' },
  { path: '/maestros', item: 'maestros' },
  { path: '/perfil', item: 'perfil' },
];

export default function DesktopNav() {
  return (
    <nav className="nav shadow-md rounded-b-lg">
      <figure className="nav__content-logo pl-0">
        <img src={Logo} className="nav__logo" alt="Logo" />
      </figure>
      <ul className="nav__links">
        {paths.map(({ path, item }) => (
          <li key={item} className="nav__link">
            <Link to={path} className="nav__item">{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
