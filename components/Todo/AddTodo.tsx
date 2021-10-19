import React, { useCallback, useState } from "react";
import { useTodos } from "./TodoContext";
import { v4 } from "uuid";
import { Button, Input, VStack } from "native-base";

export const AddTodo = () => {
  const { addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = useCallback(() => {
    addTodo({ text: newTodo, id: v4() });
    setNewTodo("");
  }, [newTodo, addTodo]);

  return (
    <VStack space={4}>
      <Input
        value={newTodo}
        onChangeText={(value) => setNewTodo(value)}
        placeholder="New todo item"
      />
      <Button onPress={addNewTodo}>Add to do</Button>
    </VStack>
  );
};
