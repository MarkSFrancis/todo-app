import React, { useCallback, useState } from "react";
import { Button, TextInput, View } from "react-native";
import { useTodos } from "./TodoContext";
import { v4 } from "uuid";

export const AddTodo = () => {
  const { addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const addNewTodo = useCallback(() => {
    addTodo({ text: newTodo, id: v4() });
    setNewTodo("");
  }, [newTodo, addTodo]);

  return (
    <View>
      <TextInput
        value={newTodo}
        onChangeText={(value) => setNewTodo(value)}
        placeholder="New todo item"
      />
      <Button onPress={addNewTodo} title="Add to do" />
    </View>
  );
};
