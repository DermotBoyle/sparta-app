import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./actions/addTodoSlice";

export const store = configureStore({
	reducer: {
		todos: todoSlice.reducer,
	},
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
