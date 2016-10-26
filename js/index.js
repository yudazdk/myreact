import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import store from "./store"
import App from "./components/App"
import AddTodo from "./components/AddTodo"
import EditTodo from "./components/EditTodo"


const app = document.getElementById('app')

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}/>
            <Route path="/new" component={AddTodo}/>
            <Route path="/todos/:id" name="todos" component={EditTodo}></Route>
        </Router>
    </Provider>, app);
