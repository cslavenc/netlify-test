import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import styles from './layout.module.scss';
import Navbar from './navbar';

const Layout = ({ children }) => {
  // TODO : use graphql to extract title and description

  return (
    <div className={`${styles.layoutBase} ${styles.layoutCenter}`}>
      <Helmet>
        <html lang="en" />
        <title>title</title>
        <meta name="description" content={'dummy'} />
        {/*todo : add description var to content when taking from metasite*/}
      </Helmet>
      <Header />
      <Navbar />
      <main
        className={{
          margin: '2rem auto',
          maxWidth: '90vw',
          width: '550px',
          display: 'inline-block',
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
