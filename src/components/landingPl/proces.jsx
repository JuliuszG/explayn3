import React from 'react';
import { ClientWrapper, Icons } from './styled';
import Icon from '../services/stepIcon';

import { proces } from './data';

const Process = () => {
    return (
        <ClientWrapper>
            <div className="header-wrapper">
                <h2>Nasz proces</h2>
                <p>Wierzymy, że skuteczny marketing jest zbudowany na dobrze ułożonym procesie - od pierwszego kontaktu, przez tworzenie strategii z klientem, po wdrażanie działań i mierzenie wyników.</p>
            </div>
            <Icons className="icons">
                <div className="cnt">
                    {proces.map((s, index) => {
                        return (
                            <>
                                <Icon key={`p-${index}-${s.text}`} img={s.image} text={s.text} />
                                {index !== proces.length - 1 && (
                                    <div key={`z-${s.text}`} className="line"></div>
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