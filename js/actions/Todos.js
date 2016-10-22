export function addTodo(title) {
    return {
        type: 'ADD_TODO',
        details: {
            text: title,
            finished: false,
            id: new Date().getTime()
        },
    }
}

export function updateTodo(id) {
    return { type: 'UPDATE_TODO', id: id}
}

export function deleteTodo(id) {
    return { type: 'DELETE_TODO', id: id}
}