import React from 'react';
import Layout from '../components/layout';

class CareAtHome extends React.Component {
  render() {
    return (
      <Layout>
        <h2>Betreuungsdienste zu Hause</h2>
        <div>
          Wir unterstützen Seniorinnen und Senioren in der ganzen Deutschschweiz
          in sämtlichen Bereichen im Umfeld Ihrer gewohnten Umgebung und mit den
          verbundenen Dienstleitungen wie:
          <ul>
            <li>Betreuungsdienste 1 bis 24 Std. am Tag an 365 Tage im Jahr</li>
            <li>Im Haushalt aushelfen</li>
            <li>
              Begleitung zu verschiedenen Terminen wie ärztliche Besuche,
              Spital, Therapien usw.
            </li>
            <li>Kundenfahrten (auch Behindertentransporte, Rollstuhlgängig)</li>
            <li>Botengänge erledigen</li>
            <li>Tagesstruktur planen</li>
            <li>Nachtwache / Nachtbetreuung</li>
            <li>Kochen</li>
            <li>Einkaufen</li>
            <li>Gesellschaft leisten</li>
            <li>Freizeitangebote organisieren und begleiten</li>
          </ul>
          Unsere Betreuungspersonen erbringen keine pflegerischen und
          insbesondere keine medizinischen Tätigkeiten. Für derartige
          Dienstleistungen wird zusätzlich eine, wenn bereits bestehende, oder
          unsere Partner Spitex-Institution einbezogen. Unser Pflegepersonal aus
          dem Pflegeverleih-Pool kann nach Wünschen auch einbezogen werden, nach
          abgeschlossenem Verleihvertrag zwischen der Mobilitas GmbH und
          involvierten Spitex-Institution.
        </div>
        <h3>Das können Sie von uns zusätzlich erwarten...</h3>
        <ul>
          <li>
            Wir gewährleisten Ihnen Betreuungsdienste, das heisst, Sie werden
            Hauptsächlich von der gleichen Personen betreut
          </li>
          <li>Die Einsatzzeit richtet sich nach Ihren Wünschen </li>
          <li>
            Wir übernehmen Aufträge, die den zeitlichen Aufwand der
            Gemeinde-Betreuungsdienste, überschreiten
          </li>
          <li>Wir begleiten Sie bei Ausflügen und in den Ferien</li>
        </ul>
        <h3>Auch die Koordination der anderen Dienste ist uns wichtig!</h3>
        <p>
          Die Mobilitas GmbH arbeitet mit den städtischen Spitex-Zentren,
          privaten Spitex-Organisationen und anderen sozialen Institutionen
          zusammen. Wir bemühen uns aktiv um eine reibungslose Zusammenarbeit
          mit ambulanten sowie stationären Einrichtungen ebenso mit anderen
          Leistungserbringern im Gesundheits- und Sozialbereich. Wir fühlen uns
          verpflichtet, gut koordiniert mit den anderen Leistungserbringern
          zusammenzuarbeiten und verstehen uns als Ergänzung zu diesen.
        </p>
        <h3>Unsere Pflichtleistungen</h3>
        <div>
          Unsere Mitarbeiter werden nach CH-Normen entlöhnt und versichert. Die
          Mobilitas GmbH untersteht den gesetzlichen Bestimmungen des
          Personalverleihs und ist im Besitz der kantonalen Bewilligung zum
          Personalverleih des Kantons Luzern.
        </div>
        <h3>Beschwerdemanagement</h3>
        <div>
          Mobilitas GmbH informiert Ihre Kundinnen und Kunden über die
          Beschwerde Instanzen (Beschwerdestelle für das Alter, die Kindes- und
          Erwachsenenschutzbehörde (KESB)) beim Aufnahmegespräch und gibt auch
          Auskunft über Telefon. Die eingegangenen Beschwerden werden durch die
          Mobilitas GmbH systematisch erfasst, bearbeitet und archiviert.{' '}
        </div>
        <p style={{ fontSize: 'large', fontWeight: 'bold' }}>
          Wir beraten und offerieren Ihnen unsere Dienstleistungen gerne auch in
          einem persönlichen Gespräch!
        </p>
      </Layout>
    );
  }
}

export default CareAtHome;
