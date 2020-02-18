import React, { Component } from 'react';

import logo from '../assets/Facebook_f_logo_(2019).png';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={logo}/>
          <div>
            <span>Meu perfil</span>
            <i className="material-icons">account_circle</i>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;