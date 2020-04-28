import React from 'react';

class TodoCard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            id: props.todo._id,
            title: props.todo.title,
            description: props.todo.description
        }
        this.handleRemoval = this.handleRemoval.bind(this)
        this.handleEdition = this.handleEdition.bind(this)
    }

    handleRemoval(e) {
        this.props.onRemove(this.state.id)
    }

    handleEdition(e) {
        this.props.onEdit(this.state.id)
    }

    render() {
        const { todo } = this.props

        return (
            <div className="card">
                <div className="card-content">
                    <div className="card-header">
                        <h5>{todo.title}</h5>
                    </div>
                    <div className="card-body">
                        <p>{todo.description}</p>
                    </div>
                    <div className="card-footer">
                        <div style={{ marginTop: '10%' }}>
                            <button className="btn blue darken-3" onClick={this.handleEdition}>
                                <i className="material-icons">edit</i>
                            </button>
                            <button className="btn red darken-2" style={{ marginLeft: '4px' }} onClick={this.handleRemoval}>
                                <i className="material-icons">delete</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoCard