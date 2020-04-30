import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div>
                Home do Projeto
                <br/>
                <Link to='/sobre'> Ir para sobre</Link>
                <hr/>
            </div>
        )
    }
}

export default Home