import { StyleSheet } from "react-native";

export const todoStyles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30
  },
  text: {
    color: "#000",
    textAlign: 'center'
  },
  item: {
    marginBottom: 10,
    marginHorizontal: 50,
    backgroundColor: "#202020",
    padding: 10
  },
  itemText: {
    textAlign: 'left',
    color: "#fff",
  }
})