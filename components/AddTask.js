import * as React from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function AddTask({ onAddTask }) {
	const [text, setText] = React.useState('');
	return (
		<>
			<TextField
				variant="outlined"
				label="Add task"
				size="small"
				sx={{ m: 2 }}
				value={text}
				onChange={(event) => setText(event.target.value)}
			/>
			<Button
				variant="contained"
				sx={{ my: 2 }}
				onClick={() => {
					setText('');
					onAddTask(text);
				}}
			>
				Add
			</Button>
		</>
	)
}