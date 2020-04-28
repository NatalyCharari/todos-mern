import React from 'react';

class TodoEditForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            id: props.todo._id,
            title: props.todo.title,
            description: props.todo.description
        }
        this.updateTodo = this.updateTodo.bind(this)
        this.resetTodo = this.resetTodo.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    updateTodo(e) {
        e.preventDefault()
        this.props.onEdit(this.state)
        this.props.onResetForm()
    }

    resetTodo(e) {
        e.preventDefault()
        this.props.onResetForm()
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
                    <form onSubmit={this.updateTodo}>
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
                        <div>
                            <button type="submit" className="btn green darken-2">Update</button>
                            <button type="button" style={{ marginLeft: '4px' }} className="btn blue darken-3" onClick={this.resetTodo}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TodoEditForm