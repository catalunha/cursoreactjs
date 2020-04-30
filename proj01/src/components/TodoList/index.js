import React, { Component } from 'react';
import TodoItens from '../TodoItens';

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tarefa: '',
            itens: []
        }
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.logItens = this.logItens.bind(this)
    }
    addItem(e) {
        let state = this.state
        if (this._tarefaInput.value !== '') {
            console.log(this._tarefaInput.value)
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now(),
            }
            this.setState({ itens: [...state.itens, newItem] })
        }
        e.preventDefault();
        this.setState({ tarefa: '' });
    }
    logItens() {
        console.log(this.state.itens)
    }
    deleteItem(key) {
        console.log('Deletar: ' + key)
        let filtroIten = this.state.itens.filter((item) => item.key !== key)
        this.setState({ itens: filtroIten })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input
                        type='text'
                        placeholder='Nova tarefa ?'
                        name='tarefa'
                        value={this.state.tarefa}
                        onChange={(e) => this.setState({ tarefa: e.target.value })}
                        ref={(event) => { this._tarefaInput = event }}
                    />
                    <button type='submit'>
                        Adicionar
                    </button>
                </form>
                <button onClick={this.logItens}>log de itens</button>
                <TodoItens lista={this.state.itens} delete={this.deleteItem} />
            </div>
        )
    }
}

export default TodoList;