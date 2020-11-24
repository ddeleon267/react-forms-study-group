import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props) // gives access to this
        this.input = React.createRef()

        this.state = {
            title: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleOnSubmit(this.state)
        this.setState({
            title: ""
        })
    }

    handleChange = (e) => {
        // console.log(e.target.value)

        this.setState({
            title: e.target.value
        })


    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <label>New Todo:     </label>
                    <input type="text" value={this.state.title} onChange={this.handleChange}></input>
                    <input type="submit" value="Add Todo"></input>
                </form>
            </div>
        )
    }
}

export default Form
