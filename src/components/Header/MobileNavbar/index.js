import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './index.css';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    const { menuOpen } = this.state;
    return (
      <Menu
        customBurgerIcon={<h2 className="text-black lusitana">Bio</h2>}
        isOpen={menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
      >
        <ul className="navbar-nav">
          <li className="nav-item mb-20">
            <Link
              to="/"
              className=""
            >
              <h3 className="text-black">Inicio</h3>
            </Link>
          </li>
          <li className="nav-item mb-20">
            <Link
              to="/boletas"
              className=""
            >
              <h3 className="text-black">Boletas</h3>
            </Link>
          </li>
          <li className="nav-item mb-20">
            <Link
              to="/maestros"
              className=""
            >
              <h3 className="text-black">Maestros</h3>
            </Link>
          </li>
          <li className="nav-item mb-20">
            <Link
              to="/perfil"
              className=""
            >
              <h3 className="text-black">Perfil</h3>
            </Link>
          </li>
        </ul>
      </Menu>
    );
  }
}
