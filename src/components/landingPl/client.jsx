import React from 'react';
import Surma from '../../images/landingPL/surma.svg';
import {
    ClientWrapper
  } from './styled';


const Client = () => {
    return (
        <ClientWrapper>
            <h2>Zobacz wyniki naszych klientów</h2>
            <img src={Surma} alt='surma logo' />
            <button>Zobacz case study</button>
        </ClientWrapper>
    );
  };
  
  export default Client;