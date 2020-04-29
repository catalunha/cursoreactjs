import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            email: '',
            senha: '',
            error: '',
        };
        this.cadastrar = this.cadastrar.bind(this);
    }
    cadastrar(event) {
        const {
            nome, email, senha
        } = this.state;
        if (nome !== '' && email !== '' && senha !== '') {
            alert(`${nome} ${email} ${senha}`);
            this.setState({ error: '' });
        } else {
            this.setState({ error: 'Ops...' });
        }
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>Novo Usuario</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    Nome: <input type='text' value={this.state.nome} onChange={(event) => this.setState({ nome: event.target.value })} /><br />
                    Email: <input type='email' value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} /><br />
                    Senha: <input type='password' value={this.state.semha} onChange={(event) => this.setState({ senha: event.target.value })} /><br />
                    <button type='submit'>Cadastrar</button>
                </form>
            </div>

        );
    }
}

export default App;