import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                nome: '',
                email: '',
                senha: '',
                sexo: '',
            }
        };
        this.dadosForm = this.dadosForm.bind(this);
    }
    dadosForm(event) {
        let form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState(
            { form: form }
        );
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
Nome: <input type='text' name='nome' value={this.state.form.nome} onChange={this.dadosForm} /><br />
Email: <input type='text' name='email' value={this.state.form.email} onChange={this.dadosForm} /><br />
Senha: <input type='password' name='senha' value={this.state.form.senha} onChange={this.dadosForm} /><br />
Sexo:
                <select name='sexo' value={this.state.form.sexo} onChange={this.dadosForm}>
                    <option value='masc'>Masc</option>
                    <option value='fem'>Fem</option>
                </select>
                <br />
                <div>
                    {this.state.form.nome}
                    {this.state.form.email}
                    {this.state.form.senha}
                    {this.state.form.sexo}
                </div>
            </div>

        );
    }
}

export default App;