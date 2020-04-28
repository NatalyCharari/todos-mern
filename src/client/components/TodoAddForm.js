import React from 'react';

class TodoAddForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            description: ''
        }
        this.submmitTodo = this.submmitTodo.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    submmitTodo(e) {
        e.preventDefault()

        this.props.onAdd(this.state)
        this.setState({ id: null, title: '', description: '' })
    }

    handleInput(e) {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className="card">
                <div className="card-content">
                    <form onSubmit={this.submmitTodo}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input name="title" type="text" placeholder="Task title" value={this.state.title} onChange={this.handleInput}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea name="description" placeholder="Task Description" className="materialize-textarea" value={this.state.description} onChange={this.handleInput}></textarea>
                            </div>
                        </div>
                        <button type="submit" className="btn green darken-2">Send</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoAddForm