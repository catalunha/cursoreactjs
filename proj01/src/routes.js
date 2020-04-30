import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
const Routes = ()=>{
  return(
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route>
        <Route exact path='/' component={Home}/>
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes