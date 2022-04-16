import React from 'react';
import { ClientWrapper } from './styled';
import { CaseWork,CaseWorkRevert } from '../styled'
import Proces1 from '../../images/landingPL/proces1.svg';
import Proces2 from '../../images/landingPL/proces2.svg';
import Proces3 from '../../images/landingPL/proces3.svg';
import Proces4 from '../../images/landingPL/proces4.svg';


const Process = () => {
  return (
    <ClientWrapper>
      <div className="header-wrapper">
        <h2>Nasz proces</h2>
        <p >Wierzymy, że skuteczny marketing jest zbudowany na dobrze ułożonym procesie - od pierwszego kontaktu, przez tworzenie strategii z klientem, po wdrażanie działań i mierzenie&nbsp;wyników.</p>
      </div>
      <CaseWork>
        <img src={Proces1} alt="icon" className="img" />
        <div className="wrapper-work">
          <div className="wrapper">
            <h4>Analiza potrzeb</h4>
          </div>
          <p className="text">Wielkie rzeczy buduje się w oparciu o dobre badania. Pierwszy etap to konsultacje mające na celu poznanie Twoich celów biznesowych. Kiedy już lepiej zrozumiemy Twoje potrzeby, rozpoczynamy wieloplatformowe badania obejmujące analizę grupy docelowej, ścieżki zakupu i warunków rynkowych. </p>
        </div>
      </CaseWork>
      <CaseWorkRevert>
        <div className="wrapper-work">
          <div className="wrapper">
            <h4>Projektowanie</h4>
          </div>
          <p className="text" style={{padding: '0'}}>Kiedy już skończymy z badaniami i określimy zadania, nadchodzi czas na wypracowanie strategii działań. W tym miejscu opracujemy dokładny plan działania, który będzie zgodny z Twoimi celami. Szczegółowa strategia będzie zawierała wszystkie elementy i narzędzia potrzebne do dotarcia do Twojej grupy odbiorców.</p>
        </div>
        <img src={Proces2} alt="icon" className="img" />
      </CaseWorkRevert>
      <CaseWork>
        <img src={Proces3} alt="icon" className="img" />
        <div className="wrapper-work">
          <div className="wrapper">
            <h4>Wdrożenie</h4>
          </div>
          <p className="text">Czas na pokazanie się Twoim klientom. Uruchamiamy kampanię i skupiamy się na realizacji konkretnych celów i dopasowaniu działań tak, aby zmaksymalizować efekt. Czuwamy nad sprawnym przebiegiem kampanii, testujemy treści i analizujemy wyniki. </p>
        </div>
      </CaseWork>
      <CaseWorkRevert>
        <div className="wrapper-work">
          <div className="wrapper">
            <h4>Monitorowanie</h4>
          </div>
          <p className="text" style={{padding: '0'}}>Na tym etapie monitorujemy działania i badamy zachowania klientów. Oceniamy również skuteczność kampanii. Tworzymy raporty i omawiamy kolejne kroki. </p>
        </div>
        <img src={Proces4} alt="icon" className="img" />

      </CaseWorkRevert>
    </ClientWrapper>
  );
};

export default Process;