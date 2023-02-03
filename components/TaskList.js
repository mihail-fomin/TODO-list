import * as React from 'react';
import { Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const FILTER_ALL = 0
const FILTER_DONE = 1
const FILTER_ACTIVE = 2

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
	const [filter, setFilter] = React.useState(FILTER_ALL)

	let filteredTodos = tasks.filter(task => {
		switch (filter) {
			case FILTER_DONE: return task.done
			case FILTER_ACTIVE: return !task.done
			default: return true
		}
	})

	return <div>
		<ul style={{ listStyleType: "none", paddingLeft: 0 }}>
			{filteredTodos.map((task) =>
				<li key={task.id}>
					<Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
				</li>
			)}
		</ul>
		<Footer filter={filter} setFilter={setFilter} />
	</div>
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


function Footer({ filter, setFilter }) {
	return <div>
		<p>
			Show:
			{" "}
			{filter == FILTER_ALL
				? <Button variant="contained">All</Button>
				: <Button variant="text" onClick={e => { e.preventDefault(); setFilter(FILTER_ALL) }}>All</Button>
			}
			{filter == FILTER_ACTIVE
				? <Button variant="contained">Active</Button>
				: <Button variant="text" onClick={e => { e.preventDefault(); setFilter(FILTER_ACTIVE) }}>Active</Button>
			}
			{filter == FILTER_DONE
				? <Button variant="contained">Done</Button>
				: <Button variant="text" onClick={e => { e.preventDefault(); setFilter(FILTER_DONE) }}>Done</Button>
			}
		</p>
	</div>
}