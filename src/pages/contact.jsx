import React from 'react';
import Layout from '../components/layout';

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ fontSize: 'large' }}>
          Hauptsitz:
          <br />
          Hauptstrasse 54
          <br />
          6045 Meggen
          <br />
          Tel. 043 229 29 09
          <br />
          mobilitas@hotmail.com
          <br />
        </div>
      </Layout>
    );
  }
}

export default Contact;
