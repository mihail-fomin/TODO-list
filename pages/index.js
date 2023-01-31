import * as React from 'react';
import { Box } from '@mui/material';
import tasksReducer from '../components/tasksReducer';
import TaskList from '../components/taskList';
import AddTask from '../components/AddTask';

export default function TaskApp() {
	const [tasks, dispatch] = React.useReducer(tasksReducer, initialTasks);

	function handleAddTask(text) {
		dispatch({
			type: 'added',
			id: nextID++,
			text: text,
		});
	}

	function handleDeleteTask(taskID) {
		dispatch({
			type: 'deleted',
			id: taskID,
		})
	}

	return <>
		<Box sx={{ m: 4 }}>
			<h1>Countries to visit</h1>
			<AddTask onAddTask={handleAddTask} />
			<TaskList
				tasks={tasks}
				onDeleteTask={handleDeleteTask}
			/>
		</Box>
	</>
}

let nextID = 3;
const initialTasks = [
	{ id: 0, text: 'Visit Venice', done: true },
	{ id: 1, text: 'Visit Athens', done: true },
	{ id: 3, text: 'Visit Rome', done: false },
]