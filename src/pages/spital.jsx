import React from 'react';
import Layout from '../components/layout';
import styles from './spital.module.scss';

class Hospital extends React.Component {
  render() {
    return (
      <Layout>
        <h2 className={styles.spitalHeading}>
          Personalverleih für Spitäler, Heime und Kliniken
        </h2>
        <div>Wir springen gern und schnell für Sie ein!</div>
        <ul>
          <li>
            Personalverleih-Pflegebereich
            <ul>
              <li>Dipl. Pflegefachpersonen HF</li>
              <li>Dipl. Pflegefachpersonen AKP</li>
              <li>Dipl. Pflegefachpersonen Psychiatrie</li>
              <li>Fachangestellte Gesundheit</li>
              <li>Fachangestellte Betreuung</li>
              <li>Pflegeassistent-/innen SRK</li>
              <li>Pflegehelfer-/innen SRK</li>
              <li>Berufsbildner für medizinische</li>
            </ul>
          </li>
          <li>
            Fachpersonal für spezifische Gebiete (Spitäler, Psychiatrien,
            Kliniken, Heime)
            <ul>
              <li>OP-Pfleger-/Lagerungspfleger</li>
              <li>Notfallzimmer</li>
              <li>Gipszimmer</li>
              <li>Hämodialyse</li>
              <li>Personal für Psychiatrien (akut)</li>
              <li>Neurorehabilitation</li>
              <li>Gerontopsychiatrische Abteilung</li>
              <li>Palliative Care</li>
            </ul>
          </li>
        </ul>
        <p style={{ fontSize: 'large', fontWeight: 'bold' }}>
          Wir beantworten gerne Ihre Fragen zu unserem Personalverleih auch in
          einem persönlichen Gespräch!
        </p>
        <p style={{ fontSize: 'small' }}>
          Mobilitas GmbH verfügt über eine kantonale Betriebsbewilligung für den
          Personalverleih
        </p>
      </Layout>
    );
  }
}

export default Hospital;
