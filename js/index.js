import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import store from "./store"
import App from "./components/App"

const app = document.getElementById('app')

/*ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, app);*/

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
            </Route>
        </Router>
    </Provider>, app);
