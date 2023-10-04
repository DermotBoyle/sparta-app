import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Todo = {
	id: number;
	title: string;
	message: string;
	completed: boolean;
};


const initialState: Todo[] = [];

export const todoSlice = createSlice({
	name: 'TodoReducers',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.push(action.payload);
		},
		updateTodo: (state, action: PayloadAction<Todo>) => {
			const { id, title, message, completed } = action.payload;
			const existingTodo = state.find((todo) => todo.id === id);
			if (existingTodo) {
				existingTodo.title = title;
				existingTodo.message = message;
				existingTodo.completed = completed;
			} else {
				console.error('[updateTodo]: Todo not found');
			}
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			const existingTodo = state.find((todo) => todo.id === id);
			if (existingTodo) {
				state.splice(state.indexOf(existingTodo), 1);
			} else {
				console.error('[deleteTodo]: Todo not found');
			}
		}
	},
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;


