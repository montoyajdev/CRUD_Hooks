import React from 'react';
import {
	Paper,
	//List,
	ListItem,
	Divider,
	ListItemText,
	//ListItemAvatar,
} from '@material-ui/core';

function TodoList(props) {
	return (
		<Paper>
			{props.todos.map((todo) => (
				<>
					<ListItem>
						<ListItemText>{todo.task}</ListItemText>
					</ListItem>
					<Divider />
				</>
			))}
		</Paper>
	);
}

export default TodoList;
