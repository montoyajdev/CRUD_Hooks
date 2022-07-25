import React, { useContext } from 'react';
import EditToDoForm from './EditTodoForm';
import useToggleState from './hooks/useToggleState';
import { TodosContext } from './context/todos.context';

import {
	ListItem,
	ListItemText,
	Checkbox,
	IconButton,
	ListItemSecondaryAction,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import UndoIcon from '@material-ui/icons/Undo';

function Todo({ id, task, completed }) {
	const { removeTodo, toggleTodo } = useContext(TodosContext);
	const [isEditing, toggle] = useToggleState(false);

	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<>
					<EditToDoForm
						id={id}
						editTodo={editTodo}
						task={task}
						toggleEditForm={toggle}
					/>
					<IconButton aria-label="Edit" onClick={toggle}>
						<UndoIcon />
					</IconButton>
				</>
			) : (
				<>
					<Checkbox
						tabIndex={-1}
						checked={completed}
						onClick={() => toggleTodo(id)}
					/>
					<ListItemText
						style={{ textDecoration: completed ? 'line-through' : 'none' }}
					>
						{task}
					</ListItemText>
					<ListItemSecondaryAction>
						<IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
							<DeleteIcon />
						</IconButton>
						<IconButton aria-label="Edit" onClick={toggle}>
							<EditIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}

export default Todo;
