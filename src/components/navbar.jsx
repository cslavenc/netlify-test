import React from 'react';
import styles from './navbar.module.scss';
import { Link } from 'gatsby';

const Navbar = () => {
  return (
    <nav>
      <table className={styles.navbarMenu}>
        {/*<div className="navbar-brand">
            <img src={defaultLogo} alt="Logo" />
          </div>*/}
        <tr>
          <td>
            <Link
              to="/"
              className={`${styles.navLink} ${styles.navItem}`}
              activeClassName="current-page"
            >
              Home
            </Link>
          </td>
          <td>
            <Link
              to="/spital/"
              className={`${styles.navLink} ${styles.navItem}`}
              activeClassName="current-page"
            >
              Spital
            </Link>
          </td>
          <td>
            <Link
              to="/spitex/"
              className={`${styles.navLink} ${styles.navItem}`}
              activeClassName="current-page"
            >
              Spitex
            </Link>
          </td>
          <td>
            <Link
              to="/pricing/"
              className={`${styles.navLink} ${styles.navItem}`}
              activeClassName="current-page"
            >
              Preise
            </Link>
          </td>
          <td>
            <Link
              to="/careathome/"
              className={`${styles.navLink} ${styles.navItem}`}
              activeClassName="current-page"
            >
              Pflege zu Hause
            </Link>
          </td>
          <td>
            <Link
              to="/contact/"
              className={`${styles.navLink} ${styles.navItem}`}
              activeClassName="current-page"
            >
              Kontakt
            </Link>
          </td>
        </tr>
      </table>
    </nav>
  );
};

export default Navbar;
