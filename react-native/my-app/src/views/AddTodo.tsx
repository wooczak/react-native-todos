import { View, Text, TextInput, Button } from "react-native";
import useTodosInStore from "../context/useContext";
import { useState } from "react";

export default function AddTodo() {
  const [textInput, setTextInput] = useState("");
  const { addTodo } = useTodosInStore();

  return (
    <View>
      <TextInput onChangeText={(text) => setTextInput(text)} />
      <Button onPress={() => addTodo(textInput)} title="Add a new todo" />
    </View>
  );
}
