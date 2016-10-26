import React from "react"
import { connect } from "react-redux"

@connect((store) => {
    return {
        todos: store.todos,
    };
})


export default class AddLink extends React.Component {
    render() {
        return <div class="new-todo">
            <span><button class="btn btn-success pull-left">Add Todo</button></span>
        </div>
    }
}