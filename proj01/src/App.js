import React, { Component } from 'react';
import './estilo.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textoFrase: '',
        };
        this.frases = ['aa', 'bb', 'cc'];
        this.abrir = this.abrir.bind(this);
    }
    abrir() {
        let state = this.state;
        let numQq = Math.floor(Math.random()*this.frases.length);
        state.textoFrase = this.frases[numQq];
        this.setState(state);
    }
    render() {
        return (
            <div className='container'>
                <img src={require('./assets/biscoito.png')} className='img' />
                <Botao nome='Abrir biscoito' acaoBtn={this.abrir} />
                <h3 className='frase'>Frase: "{this.state.textoFrase}"</h3>
            </div>

        );
    }
}

class Botao extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
            </div>
        );
    }
}

export default App;