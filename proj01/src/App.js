import React, { Component } from 'react';
import './estilo.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: 0,
            txtVai: 'Iniciar'
        };
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }
    vai() {
        let state = this.state;
        if (this.timer !== null) {
            state.txtVai = 'Continuar';
            clearInterval(this.timer);
            this.timer = null;
        } else {
            this.timer = setInterval(() => {
                state.numero += 0.1;
                this.setState(state);
            }, 100);
            state.txtVai = 'Pausar';
        }
        this.setState(state);

    }
    limpar() {
        let state = this.state;
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        state.numero = 0;
        state.txtVai = 'Iniciar';
        this.setState(state);

    }
    render() {
        return (
            <div className='container'>
                <img src={require('./assets/cronometro.png')} className='img' />
                <a className='timer'>{this.state.numero.toFixed(1)}</a>
                <div className='btns'>
                    <a className='btn' onClick={this.vai}>{this.state.txtVai}</a>
                    <a className='btn' onClick={this.limpar}>Limpar</a>
                </div>
            </div>
        );
    }
}

export default App;