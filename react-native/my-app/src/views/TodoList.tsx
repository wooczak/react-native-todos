import { FlatList, Text, View } from "react-native";
import Todo from "./Todo";
import { todoStyles } from "./Todos.styles";
import useTodos from "../hooks/useTodos";

export default function TodoList() {
  const { todos, isLoading, isError } = useTodos();

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>Błąd!</Text>
      </View>
    );
  }

  return (
    <View style={todoStyles.wrapper}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id as unknown as string}
        renderItem={({ item, index }) => <Todo key={index} todo={item} />}
      />
    </View>
  );
}
