import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions/Todos"


@connect((store) => {
    return {
        todos: store.todos,
    };
})


export default class AddTodo extends React.Component {

    render() {
        return <div class="new-todo">
            <input type="text" id="add_todo" class="form-control add-todo" placeholder="New todo"/>
            <span><button class="btn btn-success pull-left">Add Todo</button></span>
        </div>
    }
}