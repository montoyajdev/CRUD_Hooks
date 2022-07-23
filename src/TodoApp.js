import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { AppBar, Grid, Toolbar, Typography, Paper } from '@material-ui/core';

function TodoApp() {
	const initialTodos = [
		{ id: 1, task: 'Clean Fishtank', completed: false },
		{ id: 2, task: 'Wash Car', completed: true },
		{ id: 3, task: 'Grow Beard', completed: false },
	];

	const [todos, setTodos] = useState(initialTodos);

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa',
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">Todos with Hooks</Typography>
				</Toolbar>
			</AppBar>
			<TodoForm />
			<TodoList todos={todos} />
		</Paper>
	);
}

export default TodoApp;
