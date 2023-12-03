import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";

import Todos from "./src/views/Todos";
import AddTodo from "./src/views/AddTodo";
import { TodoProvider } from "./src/context/todoContext";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <TodoProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              switch (route.name) {
                case "Todos":
                  return <Entypo name="list" size={24} color="black" />;
                case "Add todo":
                  return <Entypo name="add-to-list" size={24} color="black" />;
              }
            },
          })}
        >
          <Tab.Screen
            name="Todos"
            component={Todos}
            options={{ title: "My todos!" }}
          />
          <Tab.Screen name="Add todo" component={AddTodo} />
        </Tab.Navigator>
      </NavigationContainer>
    </TodoProvider>
  );
}
