import React from 'react';
import useInputState from './hooks/useInputState';
import { TextField, Paper } from '@material-ui/core';

function TodoForm({ addToDo }) {
	const [value, handleChange, reset] = useInputState('');

	return (
		<Paper>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addToDo(value);
					reset();
				}}
			>
				{value}
				<TextField value={value} onChange={handleChange} />
			</form>
		</Paper>
	);
}

export default TodoForm;
