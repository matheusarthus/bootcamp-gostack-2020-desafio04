import React, { Component } from 'react';

import './Header.css';

import logo from '../assets/Facebook_f_logo_(2019).png';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo}/>
        <h1>Meu perfil</h1>
      </header>
    )
  }
}

export default Header;