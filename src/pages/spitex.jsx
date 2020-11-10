import React from 'react';
import Layout from '../components/layout';
import styles from './spitex.module.scss';

class Spitex extends React.Component {
  render() {
    return (
      <Layout>
        <h2 className={styles.spitexHeading}>Personalverleih für Spitex</h2>
        <div>Wir springen gern und schnell für Sie ein!</div>
        <ul>
          <li>
            Dipl. Fachpersonal spezialisiert für spezifische Bereiche wie:
            <ul>
              <li>Colo-/Ileo-/Uro-Stoma</li>
              <li>Tracheostoma & Trachealkanüle / Beatmungspflege 24</li>
              <li>Gastrostoma & PEG-Sonde Ernährung</li>
              <li>Port-a-Cath & Portpunktion</li>
              <li>Hickman-Katheter</li>
              <li>Wundversorgung</li>
              <li>Palliative Care</li>
              <li>
                Bedarfsabklärung / auch mit Zulassung für Psychiatriepflege
              </li>
            </ul>
          </li>
          <li>
            Fachpersonal für spezifische Gebiete (Spitäler, Psychiatrien,
            Kliniken, Heime)
          </li>
          <li>
            Dipl. Pflegepersonal für allgemeine-/komplexe-/
            Grund-/Psychiatriepflege
          </li>
          <li>Fachangestellte Gesundheit (FaGe)</li>
          <li>Fachangestellte Betreuung (FaBe)</li>
          <li>Pflegeassistent-/innen SRK</li>
          <li>Pflegehilfe SRK</li>
          <li>Personal für sozialbetreuerische Leistungen</li>
          <li>Personal für hauswirtschaftliche Dienstleistungen</li>
          <li>Berufsbildner, Pflegeleitung, Institutionsleitung </li>
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

export default Spitex;
