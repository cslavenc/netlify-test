import React from 'react';
import defaultLogo from '../images/logo.jpeg';
/*
import redLogo from '../images/logo_red.png';
*/

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="navbar-brand">
          <img src={defaultLogo} alt="Logo" />
        </div>
      </>
    );
  }
}

export default Header;
