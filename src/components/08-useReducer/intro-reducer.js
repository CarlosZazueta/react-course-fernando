// Es una clase con metodos basicamente.
// El initialState (o estado inicial de mi app)
// es el constructor con las propiedades de mi
// casi "clase" ya que es muy semejante pero no
// es lo mismo.

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {
    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

// Nuevo todo
const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
};

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, agregarTodoAction );

console.log(todos);