import { TodosStructure } from "../views/types";

export enum TodoReducerActionType {
  ADD_TODO = "ADD_TODO",
  REMOVE_TODO = "REMOVE_TODO",
  RESET_TODOS = "RESET_TODOS"
}

export interface IInitialState {
  todos: TodosStructure,
  addTodo?: (title: string) => void;
  removeTodo?: (index: number) => void;
  resetTodos?: () => void;
}