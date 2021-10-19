import React, { FC } from "react";
import { Text } from "react-native";
import { TodoItem as TodoEntry } from "./TodoContext";

export interface TodoItemDisplayProps {
  todo: TodoEntry;
}

export const TodoItemDisplay: FC<TodoItemDisplayProps> = (props) => {
  return <Text>{props.todo.text}</Text>;
};
