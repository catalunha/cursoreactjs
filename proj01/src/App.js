import React, { Component } from 'react';

class Equipe extends Component {
    render() {
        return (
            <div>
                <Sobre
                    nome={this.props.nome}
                    fb1={this.props.fb}
                />
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.nome} </h1>
                <Social fb2={this.props.fb1} />
            </div>
        );
    }
}
// class Social extends Component {
//     render() {
//         return (
//             <div>
//                 <a href={this.props.fb2}> Facebook</a>
//             </div>
//         );
//     }
// }

const Social = (props) =>{
        return (
            <div>
                <a href={props.fb2}> Facebook</a>
            </div>
        );
    }


function App() {
    return (
        <div>
            <h1>
                Conheça nossa equipe:
            </h1>
            <Equipe nome='aaa' fb='https://www.google.com.br/' />
            <Equipe nome='bb' fb='https://www.google.com.br/' />
        </div>
    );
}

export default App;

