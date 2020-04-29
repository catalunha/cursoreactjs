import React from 'react';
//criando componente
const BemVindo = (props) => {
    return (
        <div>
            <h2>Bem vindo {props.nome} com {props.idade}</h2>
        </div>

    );
}

function App() {
    return (
        <div>
            Olá Mundo 1 !
            <BemVindo nome='aa' idade='10'/>
            <h1>
                Curso react.
            </h1>
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
