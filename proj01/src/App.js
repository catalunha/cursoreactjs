import React from 'react';
//criando componente
const Equipe = (props) => {
    return (
        <div>
            <Sobre
                nome={props.nome}
                cargo={props.cargo}
                idade={props.idade}
            />
            <Social fb={props.facebook} />
            <hr />
        </div>

    );
}
const Sobre = (props) => {
    return (
        <div>
            <h2>
                Olá sou o {props.nome}
            </h2>
            <h2>
                Cargo: {props.cargo}
            </h2>
            <h2>
                Idade: {props.idade}
            </h2>
        </div>

    );
}
const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook </a>
        </div>

    );
}
function App() {
    return (
        <div>
            <h1>
                Conheça nossa equipe:
            </h1>
            <Equipe nome='aa' cargo='bb' idade='10' facebook='https://www.google.com.br/' />
            <Equipe nome='aa2' cargo='bb2' idade='11' />
        </div>
    );
}

export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
