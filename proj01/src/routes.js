import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
//components
import Header from './components/Header'
//pages
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Erro from './pages/Erro'
import Produto from './pages/Produto'
const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/sobre' component={Sobre} />
                <Route path='/produto/:id' component={Produto} />
                <Route path='*' component={Erro} />
            </Switch>
        </BrowserRouter>
    );
}
export default Routes