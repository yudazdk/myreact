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

    switch (action.type) {
        case 'ADD_TODO':
            return state

        case 'UPDATE_TODO':
            return state

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