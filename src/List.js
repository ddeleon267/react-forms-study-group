import React, { Component } from 'react'
import { Item } from './Item'
import Form from './Form'

class List extends Component {
    constructor(props) {
        super(props) // gives access to 'this'

        this.state = {
            list: []
        }
    }

    addNewTodo = (data) => {
        const newTodo = {
            title: data.title,
            id: this.state.list.length + 1
        }

        this.setState(previousState => ({
            list: [...previousState.list, newTodo]
        }))
    }




    handleDelete = (id) => {
        this.setState((previousState) => {
            const newState = previousState.list.filter(item => item.id !== id)
            return {
                list: newState
            }
        })
    }

    render() {
        const { list } = this.state
        const itemList = list.map(item => {
            return <Item key={item.id} item={item} handleOnDelete={this.handleDelete} />
        })
        return (
            <div>
                <Form handleOnSubmit={this.addNewTodo} />
                {itemList}
            </div>
        )
    }
}

export default List
