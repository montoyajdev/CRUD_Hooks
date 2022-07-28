import { v4 as uuid } from 'uuid';

const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD':
			// take everything from existing state then put in an array, then add in new object
			return [...state, { id: uuid(), task: action.task, completed: false }];
		case 'REMOVE':
			return state.filter((todo) => todo.id !== action.id);
		case 'TOGGLE':
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);
		case 'EDIT':
			return state.map((todo) =>
				todo.id === action.id ? { ...todo, task: action.newTask } : todo
			);

		default:
			return state;
	}
};

export default reducer;
