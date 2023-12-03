import { Text, View } from "react-native";
import useTodoDetails from "../hooks/useTodoDetails";
import { style } from "./TodoDetails.style";

export default function TodoDetails({ route }) {
  const {
    todo: { title, userId },
  } = route.params;
  const { userData, isLoading } = useTodoDetails(userId);

  if (isLoading) {
    return (<View><Text>Loading...</Text></View>)
  }

  return (
    <View>
      <Text style={style.text}>Title: {title}</Text>
      <Text style={style.text}>Author: {userData.name}</Text>
    </View>
  );
}
