import { useContext } from "react";
import { TodoContext } from "./todoContext";

export default function useTodosInStore() {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error("useTodosInStore must be used within TodoContext");
  }

  return context;
}
