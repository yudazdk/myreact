export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        details: {
            text: text,
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


export function updateTodoText(id, todoText) {
    return {
        type: 'UPDATE_TODO2',
        details: {
            id: id,
            text: todoText
        }
    }
}


export function deleteTodo(id) {
    return { type: 'DELETE_TODO', id: id}
}