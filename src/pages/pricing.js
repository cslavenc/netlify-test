import React from 'react';
import Layout from '../components/layout';
import styles from './pricing.module.scss';

class Pricing extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <h2>Rundum gut betreut!</h2>
          <ul>
            <li>Betreuungsdienste 1 bis 24 Std. am Tag an 365 Tage im Jahr</li>
            <li>Im Haushalt aushelfen</li>
            <li>
              Begleitung zu verschiedenen Terminen wie ärztliche Besuche, Spital
              usw.
            </li>
            <li>Kundenfahrten (auch Behindertentransporte, Rollstuhlgängig)</li>
            <li>Botengänge erledigen</li>
            <li>Tagesstruktur planen</li>
            <li>Nachtbetreuung</li>
            <li>Kochen, einkaufen</li>
            <li>Freizeitangebote organisieren und begleiten</li>
            <li>Gesellschaft leisten</li>
          </ul>
          <h2>Tarifanordnungen</h2>
          <div>
            Die folgenden Ansätze verstehen sich als Richtpreise. Jeder einzelne
            Fall wird individuell abgeklärt und die Offerte dem Kunden und der
            Situation gerecht angepasst.
          </div>
          <div className={`columns ${styles.columns}`}>
            <div className={`column ${styles.column}`}>
              <h3>Anleitung, Prävention, Beratung, Abklärung</h3>
              <div>
                Unterstützende Massnahmen, Gespräch mit Klientin/Angehörigen
                Dienstleistungsbedarf Betreuung, Hauswirtschaft bestimmen
              </div>
            </div>
            <div className={`column ${styles.column}`}>Fr. 70.00</div>
          </div>
          <div className={`columns ${styles.columns}`}>
            <div className={`column ${styles.column}`}>
              <h3>Grundtarif pro Stunde</h3>
              <div>
                Gilt für 1 bis 3 Stunden Betreuung bzw. Hauswirtschaft pro Tag,
                bei weiteren Stunden wird eine Offerte erstellt.
              </div>
            </div>
            <div className={`column ${styles.column}`}>Fr. 4.00</div>
          </div>
          <div className={`columns ${styles.columns}`}>
            <div className={`column ${styles.column}`}>
              <h3>Nachtwache (10 Std. pauschal)</h3>
              <div>
                Gilt für 1 bis 3 Nächte pro Monat, bei weiteren Nachtdiensten
                wird eine Offerte erstellt.
                <table style={{ width: '20%' }}>
                  <tr>
                    <td>
                      <li>Montag bis Freitag</li>
                    </td>
                    <td>Fr. 300.00</td>
                  </tr>
                  <tr>
                    <td>
                      <li>Samstag und Sonntag</li>
                    </td>
                    <td>Fr. 325.00</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div className={`columns ${styles.columns}`}>
            <div className={`column ${styles.column}`}>
              <h3>24-Stunden-Betreuung</h3>
            </div>
            <div className={`column ${styles.column}`}>Offerte</div>
          </div>
          <div className={`columns ${styles.columns}`}>
            <div className={`column ${styles.column}`}>
              <h3>Transporte für Kunden der Mobilitas</h3>
              <div>
                <table style={{ width: '25%' }}>
                  <tr>
                    <td>
                      <li>
                        pro geleistete Std. (inkl. Fahrt, Begleitung, Wartezeit)
                      </li>
                    </td>
                    <td>Fr. 40.00</td>
                  </tr>
                  <tr>
                    <td>
                      <li>pro gefahrenen Kilometer (kein Anfahrtskosten)</li>
                    </td>
                    <td>Fr. 0.90</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div>
            Rund-um-die-Uhr-Betreuungseinsätze, Nachtwachen/-pikett (bei
            komplexen Situationen) sowie Daueraufträge werden von Fall zu Fall
            mit der Kundin, dem Kunden abgeklärt und zu speziellen Konditionen
            offeriert.
            <br />
            Betreuerische bzw. hauswirtschaftliche Leistungen, wenn ein Anspruch
            auf Ergänzungsleistungen zur AHV/IV (EL) besteht, kann nach
            Abklärung mit der zuständigen EL-Stelle ein Teil zurückgefordert
            werden. Bei nichtbestehender Hilflosen-Entschädigung(HL) kann man
            beantragen, die entsprechenden Kosten durch HL-Entschädigungen
            abzudecken. Allfällige Abklärungen werden auf Wunsch ebenfalls durch
            uns übernommen.
          </div>

          <div>
            <hr></hr>
            <h3>
              Wir beraten und offerieren Ihnen unsere Dienstleistungen gerne
              auch in einem persönlichen Gespräch!
            </h3>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Pricing;
