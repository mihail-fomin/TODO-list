import * as React from 'react';
import Checkbox from '@mui/material';
import DeleteIcon from '@mui/material';
import IconButton from '@mui/material';

export default function TaskList({ tasks, onDeleteTask }) {
	return (
		<ul>
			{tasks.map((task) => {
				<li key={task.id}>
					<Task task={task} onDelete={onDeleteTask} />
				</li>
			})}
		</ul>
	)
}

function Task({ task, onDelete }) {
	return <>
		<Checkbox
			checked={task.done}
		/>
		{task.text}
		<IconButton
			aria-label="delete"
			onClick={() => onDelete(task.id)}
		>
			<DeleteIcon />
		</IconButton>



		{/* <input
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
		<button onClick={() => onDelete(task.id)}>Delete</button> */}
	</>
}
