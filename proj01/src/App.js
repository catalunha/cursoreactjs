import React, { Component } from 'react'
// import Header from './components/Header'
// import Home from './pages/Home'
// import Sobre from './pages/Sobre'
import Routes from './routes'
class App extends Component {
    render() {
        return (
            <div>
                {/* <Header/> */}
                {/* <Home/>
                <Sobre/> */}
                <Routes/>
            </div>
        );
    }
}

export default App