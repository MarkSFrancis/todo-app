import React from "react";
import { FlatList } from "react-native";
import { useTodos } from "./TodoContext";
import { TodoItemDisplay } from "./TodoItemDisplay";

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItemDisplay todo={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};
