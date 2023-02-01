import * as React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
	return (
		<ul>
			{tasks.map((task) =>
				<li key={task.id}>
					<Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
				</li>
			)}
		</ul>
	)
}

function Task({ task, onDelete, onChange }) {
	return <>
		<Checkbox
			type="checkbox"
			checked={task.done}
			onChange={(e) => {
				onChange({
					...task,
					done: e.target.checked,
				});
			}}
		/>
		{task.text}
		<IconButton
			aria-label="delete"
			onClick={() => onDelete(task.id)}
		>
			<DeleteIcon />
		</IconButton>
	</>
}
