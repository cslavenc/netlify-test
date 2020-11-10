import React from 'react';
import styles from './footer.module.scss';

// TODO : get them on same height
class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.hasBackground}>
        <div className={`columns ${styles.columns}`}>
          <div className={`column ${styles.column}`}>
            <p className={styles.contactDetails}>Tel. 043 229 29 09</p>
          </div>
          <div className={`column ${styles.column} ${styles.notFirstChild}`}>
            <div className={styles.contactDetails}>
              E-Mail: mobilitas@hotmail.com
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
