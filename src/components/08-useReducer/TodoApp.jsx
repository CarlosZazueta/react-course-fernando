import React, { useReducer } from "react";
import { todoReducer } from "./todoReducer";

import "./styles.css";

const initialState = [
    {
        id: new Date().getTime(),
        desc: "Aprender React",
        done: false,
    },
];

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    console.log(todos);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: "New task",
            done: false,
        };

        const action = {
            type: "add",
            payload: newTodo,
        };

        dispatch(action);
    };

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group list-group-flush">
                        {todos.map((todo, i) => (
                            <li key={todo.id} className="list-group-item">
                                <p className="text-center">
                                    {i + 1}. {todo.desc}
                                </p>
                                <button className="btn btn-danger">
                                    Borrar
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-5">
                    <h4>Add ToDo</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            autoComplete="off"
                            className="form-control"
                            name="description"
                            placeholder="Learn ..."
                            type="text"
                        />
                        <div className="d-grid gap-2">
                            <button
                                className="btn btn-outline-primary mt-1"
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
