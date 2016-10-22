import React from "react"
import { connect } from "react-redux"
import Todo from './Todo'
import AddTodo from './AddTodo'


@connect((store) => {
    return {
        todos: store.todos,
    };
})


export default class Sortable extends React.Component {

    render() {

        var todoLeft = 0;

        var todosComponents = this.props.todos.todos.map(function(todo) {
            var finished = (todo.finished) ? "checked" : "";

            if ( !todo.finished ) {
                todoLeft++;
            }


            return <Todo finished={finished} key={todo.id} item={todo}/>
        });


        return <div>
            <h1>Todos</h1>
            <AddTodo />
            <hr/>
            <ul id="todo_list" class="list-unstyled">{todosComponents}</ul>
            <div class="todo-footer">
                <strong>Items Left to do: </strong><span class="count-todos">{todoLeft}</span>
            </div>
        </div>


    }
}