import React from "react"
import { connect } from "react-redux"
import { IndexLink, Link } from "react-router";


@connect((store) => {
    return {
        todos: store.todos,
    };
})


export default class EditTodo extends React.Component {
    render() {
        return <div class="new-todo">
            <input type="text" id="add_todo" class="form-control add-todo" placeholder="New todo"/>
            <span><button class="btn btn-success pull-left">Edit Todo</button></span>
        </div>
    }
}