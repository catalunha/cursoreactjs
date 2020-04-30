import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmes: []
    }
    this.loadFilmes = this.loadFilmes.bind(this)
  }
  componentDidMount() {
    this.loadFilmes()
  }
  loadFilmes() {
    let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/'
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ filmes: json })
        console.log(json)
      })

  }
  render() {
    return (
      <div className='container'>
        <div className='lista'>
          {this.state.filmes.map((filme) => {
            return (
              <article key={filme.id}>
                <strong>
                  {filme.nome}
                </strong>
                <img src={filme.foto} alt='...'></img>
                <Link to='/'>Acessar</Link>
              </article>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Home