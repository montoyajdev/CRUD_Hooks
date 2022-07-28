import React, { createContext } from 'react';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducer';
import { v4 as uuid } from 'uuid';

const defaultTodos = [
	{ id: uuid(), task: 'Mow the lawn using goats', completed: false },
	{ id: uuid(), task: 'Release the lady bugs into garden', completed: true },
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
	const [todos, dispatch] = useLocalStorageReducer(
		'todos',
		defaultTodos,
		todoReducer
	);
	return (
		<TodosContext.Provider value={todos}>
			<DispatchContext.Provider value={dispatch}>
				{props.children}
			</DispatchContext.Provider>
		</TodosContext.Provider>
	);
}
