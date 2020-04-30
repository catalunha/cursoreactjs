import React, { Component } from 'react'
import {Container,Head, Titulo,BemVindo} from './styles'
class App extends Component {
  render() {
    return (
      <Container>
        <Head>
          <Titulo>a</Titulo>
        </Head>
       Ola1
       <BemVindo cor='00FF00' tamanho='15'>Bem vindo</BemVindo>
       <BemVindo cor='00FF00' tamanho='25'>Bem vindo</BemVindo>
      </Container>
    );
  }
}

export default App
/*
      <div className='container'>
        <header className='header'>
          <a className='titulo'>Projeto Styled</a>
        </header>
        <h1>Bem vindo.</h1>
      </div>
*/