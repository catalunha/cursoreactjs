import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Erro extends Component {
    render() {
        return (
            <div>
                Erro do Projeto - Pag nao encontrada
                <br/>
                <Link to='/'> Ir para Home</Link>
                <hr/>
            </div>
        )
    }
}

export default Erro