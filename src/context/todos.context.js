import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';
import { v4 as uuid } from 'uuid';

const defaultTodos = [
	{ id: uuid(), task: 'Mow the lawn using goats', completed: false },
	{ id: uuid(), task: 'Release the lady bugs into garden', completed: true },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
	const todoStuff = useTodoState(defaultTodos);
	return (
		<TodosContext.Provider value={todoStuff}>
			{props.children}
		</TodosContext.Provider>
	);
}
