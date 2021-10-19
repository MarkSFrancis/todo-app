import { Text, VStack } from "native-base";
import React from "react";
import { useTodos } from "./TodoContext";
import { TodoItemDisplay } from "./TodoItemDisplay";

export const TodoList = () => {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return <Text>Looks like your work is done here - well done!</Text>;
  }

  return (
    <VStack>
      {todos.map((t) => (
        <TodoItemDisplay key={t.id} todo={t} />
      ))}
    </VStack>
  );
};
