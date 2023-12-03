import { createContext, useReducer } from "react";
import { initialState, todoReducer } from "./todoReducer";
import { TodoReducerActionType as ActionType } from "./types";

export const TodoContext = createContext(initialState);

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  function addTodo(title: string) {
    dispatch({
      type: ActionType.ADD_TODO,
      payload: { title },
    });
  }

  function removeTodo(index: number) {
    dispatch({
      type: ActionType.REMOVE_TODO,
      payload: { input: index },
    });
  }

  function resetTodos() {
    dispatch({
      type: ActionType.RESET_TODOS,
    });
  }

  const value = {
    todos: state.todos,
    addTodo,
    removeTodo,
    resetTodos,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
