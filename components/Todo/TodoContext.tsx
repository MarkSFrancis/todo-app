import { createContext, useContext } from "react";

export interface TodoItem {
  text: string;
  id: string;
}

export interface TodoContextProps {
  todos: TodoItem[];
  addTodo: (newTodo: TodoItem) => void;
}

const ctx = createContext<TodoContextProps>(undefined!);

export const useTodos = () => useContext(ctx);
export const TodoProvider = ctx.Provider;
