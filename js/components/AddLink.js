import React from "react"
import { connect } from "react-redux"
import { IndexLink, Link } from "react-router";

@connect((store) => {
    return {
        todos: store.todos,
    };
})


export default class AddLink extends React.Component {
    render() {
        return <div class="new-todo">
            <Link to='/new'>Add Todo</Link>
        </div>
    }
}