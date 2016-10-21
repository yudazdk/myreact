import React from "react"
import { connect } from "react-redux"

@connect((store) => {
    return {
        todos: store.todos,
    };
})

export default class Todo extends React.Component {
    render() {
        var checked = this.props.finished ? "checked" : "";

        console.log(this);

        return <li class="ui-state-default">
            <div class={checked}>
                <label>{this.props.item.text}</label>
                <span class="todo-buttons pull-right">
                    <button class="btn">Delete</button>
                </span>
            </div>
        </li>
    }
}