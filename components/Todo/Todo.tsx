import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { useCallback, useEffect, useState } from "react";
import { TodoList } from "./TodoList";
import { TodoItem, TodoProvider } from "./TodoContext";
import { AddTodo } from "./AddTodo";
import { Divider, VStack } from "native-base";

export const Todo = () => {
  const [todos, setTodos] = useState<TodoItem[] | undefined>();
  const { getItem: loadTodos, setItem: saveTodos } =
    useAsyncStorage("todo_list");

  useEffect(() => {
    loadTodos().then((items) => {
      setTodos(items ? JSON.parse(items) : []);
    });
  }, []);

  const addTodo = useCallback(
    (newTodo: TodoItem) => {
      const newTodos = [...(todos ?? []), newTodo];

      saveTodos(JSON.stringify(newTodos));
      setTodos(newTodos);
    },
    [todos, saveTodos]
  );

  if (!todos) {
    return <></>;
  }

  return (
    <TodoProvider value={{ addTodo, todos }}>
      <VStack space={4} divider={<Divider />}>
        <TodoList />
        <AddTodo />
      </VStack>
    </TodoProvider>
  );
};
