import React from 'react';
import {
	Paper,
	List,
	ListItem,
	Divider,
	ListItemText,
} from '@material-ui/core';
import Todo from './Todo';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
	return (
		<Paper>
			<List>
				{todos.map((todo) => (
					<>
						<Todo
							id={todo.id}
							task={todo.task}
							key={todo.id}
							completed={todo.completed}
							removeTodo={removeTodo}
							toggleTodo={toggleTodo}
							editTodo={editTodo}
						/>
						<Divider />
					</>
				))}
			</List>
		</Paper>
	);
}

export default TodoList;
