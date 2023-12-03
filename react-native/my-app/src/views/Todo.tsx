import { Text, TouchableOpacity } from "react-native";
import { TodoItem } from "./types";
import { todoStyles } from "./Todos.styles";
import { useNavigation } from "@react-navigation/native";

interface TodoProps {
  key: number;
  todo: TodoItem;
}

export default function Todo({ todo }: TodoProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={todoStyles.item}
      // @ts-ignore
      onPress={() => navigation.navigate("Details", { todo })}
    >
      <Text style={todoStyles.itemText}>{todo.title}</Text>
    </TouchableOpacity>
  );
}
