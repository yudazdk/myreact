import React from "react"
import { connect } from "react-redux"
import { IndexLink, Link } from "react-router";

import { hashHistory } from 'react-router';
import { updateTodoText } from "../actions/Todos"

@connect((store) => {
    return {
        todos: store.todos,
    };
})


export default class EditTodo extends React.Component {
    onChangeClick() {
        console.log('Done');
    }

    onEditClick() {
        var todoText = document.getElementById('edit_todo').value;

        var idParam = this.props.params.id;

        if ( todoText ) {
            this.props.dispatch( updateTodoText(idParam, todoText) );

            hashHistory.push('/');
        }
    }

    render() {

        var idParam = this.props.params.id;

        var currentTodo = this.props.todos.todos.filter(function(todo) {
            return todo.id == idParam;
        });

        var text2Edit = currentTodo[0].text;

        return <div class="edit-todo">
            <input type="text" id="edit_todo" class="form-control edit-todo" defaultValue={text2Edit}/>
            <span>
                <button class="btn btn-success pull-left" onClick={this.onEditClick.bind(this)}>Edit Todo</button>
            </span>
        </div>
    }
}