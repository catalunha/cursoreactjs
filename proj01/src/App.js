import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            sexo: '',
        };
        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSenha = this.trocaSenha.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
    }
    trocaEmail(event) {
        let valorDigitado = event.target.value;
        this.setState({ email: valorDigitado });
    }
    trocaSenha(event) {
        let valorDigitado = event.target.value;
        this.setState({ senha: valorDigitado });
    }
    trocaSexo(event) {
        // let valorDigitado = event.target.value;
        this.setState({ sexo: event.target.value });
    }
    render() {
        return (
            <div>
                <h2>Login</h2>
                Email:<input type='email' name='email' value={this.state.email} onChange={this.trocaEmail} />
                <br />
                Senha:<input type='password' name='senha' value={this.state.senha} onChange={this.trocaSenha} />
                <br />
                Sexo:
                <select name='sexo' value={this.state.sexo} onChange={this.trocaSexo} >
                    <option value='masc'>Masc</option>
                    <option value='fem'>Fem</option>
                </select>
                <div>
                <h3>{this.state.email}</h3>
                <h3>{this.state.senha}</h3>
                <h3>{this.state.sexo}</h3>
            </div>
            </div>

        );
    }
}

export default App;