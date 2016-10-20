import React from "react"
import { connect } from "react-redux"
import Todo from './Todo'


@connect((store) => {
    return {
        todos: store.todos,
    };
})


export default class Sortable extends React.Component {
    render() {

        var todosComponents = this.props.todos.todos.map(function(todo) {
            var finished = (todo.finished) ? "checked" : "";

            return <Todo finished={finished} key={todo.id} item={todo}/>
        });

        console.log(this.totodoLeft);
        return <ul id="todo_list" class="list-unstyled">{todosComponents}</ul>
    }
}