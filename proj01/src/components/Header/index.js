import React from 'react'
import { HashLink } from 'react-router-hash-link'
function Header() {
  return (
    <header>
      <div className='menu' id='home'>
        <nav>
          <ul>
            <li><HashLink smooth to='#home'>Home</HashLink></li>
            <li><HashLink smooth to='#sobre'>Sobre</HashLink></li>
            <li><HashLink smooth to='#contato'>Contato</HashLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );

}

export default Header
