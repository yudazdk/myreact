import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import store from "./store"
import Sortable from "./components/Sortable"

const app = document.getElementById('app')

ReactDOM.render(<Provider store={store}>
    <Sortable />
</Provider>, app);