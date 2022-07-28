import React, { useContext } from 'react';
import Todo from './Todo';
import { TodosContext } from './context/todos.context';

import { Paper, List, Divider } from '@material-ui/core';

function TodoList() {
	const todos = useContext(TodosContext);

	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((todo, i) => (
						<>
							<Todo key={todo.id} {...todo} />
							{i < todos.length - 1 && <Divider />}
						</>
					))}
				</List>
			</Paper>
		);
	return null;
}

export default TodoList;
