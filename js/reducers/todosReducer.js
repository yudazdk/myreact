export default function reducer(
    state={
        todos: [
            {
                text: "Clean house",
                finished: true,
                id: 12464535
            },
            {
                text: "Fix window",
                finished: false,
                id: 245643453
            }

        ]
    }, action) {

    var id = 0;
    var finished = false
    var newTodos = [...state.todos];
    var todoToUpdate = 0;
    var textTodo = '';

    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.details],
            }

        case 'UPDATE_TODO':
        case 'UPDATE_TODO2':
            id = action.details.id

            newTodos = [...state.todos]
            todoToUpdate = newTodos.findIndex(todo => todo.id == id)

            if ( action.type == 'UPDATE_TODO') {
                finished = action.details.finished
                newTodos[todoToUpdate].finished = finished
            } else {
                textTodo = action.details.text
                newTodos[todoToUpdate].text = textTodo
            }


            return {
                ...state,
                todos: newTodos,
            }


        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            }

        default:
            return state
    }

    return state;
}