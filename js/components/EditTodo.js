import React from "react"
import { connect } from "react-redux"
import { IndexLink, Link } from "react-router";


@connect((store) => {
    return {
        todos: store.todos,
    };
})


export default class EditTodo extends React.Component {
    onEditClick() {
        //
    }

    render() {

        var idParam = this.props.params.id;console.log('param: ' + idParam);

        var currentTodo = this.props.todos.todos.filter(function(todo) {
            return todo.id == idParam;
        });

        var text2Edit = currentTodo[0].text;

        return <div class="new-todo">
            <input type="text" id="add_todo" class="form-control add-todo" placeholder="New todo" value={text2Edit}/>
            <span><button class="btn btn-success pull-left">Edit Todo</button></span>
        </div>
    }
}