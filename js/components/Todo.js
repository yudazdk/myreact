import React from "react"
import { connect } from "react-redux"
import { deleteTodo } from "../actions/Todos"
import { updateTodo } from "../actions/Todos"
import { hashHistory } from 'react-router';


@connect((store) => {
    return {
        todos: store.todos,
    };
})

export default class Todo extends React.Component {
    onUpdateClick() {
        this.props.dispatch( updateTodo(this.props.item.id, !this.props.item.finished) );
    }

    onEditClick() {
        hashHistory.push("todos/" + this.props.item.id);
    }

    onDeleteClick() {
        this.props.dispatch( deleteTodo(this.props.item.id) );
    }

    render() {
        var checked = this.props.finished ? "checked" : "";

        return <li class="ui-state-default">
            <div class={checked}>
                <label onClick={this.onUpdateClick.bind(this)}>{this.props.item.text}</label>
                <div class="pull-right">
                    <span class="todo-buttons">
                        <button class="btn" onClick={this.onEditClick.bind(this)}>Edit</button>
                    </span>
                    <span class="todo-buttons">
                        <button class="btn" onClick={this.onDeleteClick.bind(this)}>Delete</button>
                    </span>
                </div>
            </div>
        </li>
    }
}