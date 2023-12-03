import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TodoList from "./TodoList";
import TodoDetails from "./TodoDetails";

export default function Todos() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="TodoList" component={TodoList} />
      <Stack.Screen name="Details" component={TodoDetails} />
    </Stack.Navigator>
  );
}
