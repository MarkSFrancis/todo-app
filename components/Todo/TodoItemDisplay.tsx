import React, { FC } from "react";
import { TodoItem as TodoEntry } from "./TodoContext";
import { Text } from "native-base";

export interface TodoItemDisplayProps {
  todo: TodoEntry;
}

export const TodoItemDisplay: FC<TodoItemDisplayProps> = (props) => {
  return <Text>{props.todo.text}</Text>;
};
