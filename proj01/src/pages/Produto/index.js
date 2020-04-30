import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Produto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params
        // console.log(id)
        this.setState({id:id})
    }
    render() {
        return (
            <div>
                Produto {this.state.id} do Projeto
                <br />
                <Link to='/'> Ir para home</Link>
                <hr />
            </div>
        )
    }
}

export default Produto