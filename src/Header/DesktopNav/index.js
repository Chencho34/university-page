import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const paths = [
  { path: '/', item: 'mi panel' },
  { path: '/boleta', item: 'boleta' },
  { path: '/maestros', item: 'maestros' },
  { path: '/perfil', item: 'perfil' },
];

export default function DesktopNav() {
  return (
    <nav className="nav">
      <figure className="nav__content-logo">
        <h1>Logo</h1>
      </figure>
      <ul className="nav__links scale-up-center">
        {paths.map(({ path, item }) => (
          <li key={item} className="nav__link">
            <Link to={path} className="nav__item">{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
