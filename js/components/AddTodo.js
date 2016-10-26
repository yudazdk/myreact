import React from "react"
import { connect } from "react-redux"
import { IndexLink, Link } from "react-router";
import { hashHistory } from 'react-router';

import { addTodo } from "../actions/Todos"


@connect((store) => {
    return {
        todos: store.todos,
    };
})


export default class AddTodo extends React.Component {
    onAddClick() {
        var todoTitle = document.getElementById('add_todo').value;

        if ( todoTitle ) {
            // Clear before dispatching
            document.getElementById('add_todo').value = '';

            this.props.dispatch( addTodo(todoTitle) );

            hashHistory.push('/');
        }
    }


    render() {
        return <div class="new-todo">
            <input type="text" id="add_todo" class="form-control add-todo" placeholder="New todo"/>
            <span>
                <button class="btn btn-success pull-left" onClick={this.onAddClick.bind(this)}>Add Todo</button>
            </span>
        </div>
    }
}