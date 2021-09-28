import React from 'react';
import { ClientWrapper, Icons } from './styled';
import Icon from '../services/stepIcon';

import { proces } from './data';

const Process = () => {
    return (
        <ClientWrapper>
            <h2>Nasz proces</h2>
            <p>Wierzymy, że skuteczny marketing jest zbudowany na dobrze ułożonym procesie - od pierwszego kontaktu, przez tworzenie strategii z klientem, po wdrażanie działań i mierzenie wyników.</p>
            <Icons className="icons">
                <div className="cnt">
                    {proces.map((s, index) => {
                        return (
                        <>
                            <div className="icon-box">
                                <Icon key={`${index}-${s.text}`} img={s.image} text={s.text} />
                            </div>
                            {index !== proces.length - 1 && (
                            <div key={index} className="line"></div>
                                )}
                            </>
                            );
                        })}
                </div>
            </Icons>

        </ClientWrapper>
    );
  };
  
  export default Process;