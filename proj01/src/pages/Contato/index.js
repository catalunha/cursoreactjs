import React from 'react'
import { HashLink } from 'react-router-hash-link'

function Contato(){
      return (
      <div className='home' id='contato'>
        Contato
        <HashLink smooth to='#home'>Ir para home</HashLink>
      </div>
    );
}

export default Contato
