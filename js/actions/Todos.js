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


export function updateTodo(id, updatedFinished) {
    return {
        type: 'UPDATE_TODO',
        details: {
            id: id,
            finished: updatedFinished
        }
    }
}


export function deleteTodo(id) {
    return { type: 'DELETE_TODO', id: id}
}