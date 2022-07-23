import React from 'react';
import useInputState from './hooks/useInputState';
import { TextField, Paper } from '@material-ui/core';

function TodoForm({ addToDo }) {
	const [value, handleChange, reset] = useInputState('');

	return (
		<Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					addToDo(value);
					reset();
				}}
			>
				{value}
				<TextField
					value={value}
					onChange={handleChange}
					margin="normal"
					label="Add New Todo"
					fullWidth
				/>
			</form>
		</Paper>
	);
}

export default TodoForm;
