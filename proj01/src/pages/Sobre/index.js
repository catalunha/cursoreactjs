import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Sobre extends Component {
    render() {
        return (
            <div>
                Sobre do Projeto
                <br/>
                <Link to='/'>Ir para home</Link>
                <hr/>
            </div>
        );
    }
}

export default Sobre