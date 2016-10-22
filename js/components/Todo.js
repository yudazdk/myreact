import React from "react"
import { connect } from "react-redux"
import { deleteTodo } from "../actions/Todos"

@connect((store) => {
    return {
        todos: store.todos,
    };
})

export default class Todo extends React.Component {
    onDeleteClick() {
        this.props.dispatch( deleteTodo(this.props.item.id) );
    }

    render() {
        var checked = this.props.finished ? "checked" : "";

        return <li class="ui-state-default">
            <div class={checked}>
                <label>{this.props.item.text}</label>
                <span class="todo-buttons pull-right">
                    <button class="btn" onClick={this.onDeleteClick.bind(this)}>Delete</button>
                </span>
            </div>
        </li>
    }
}