import { API_TODO, API_USER } from "./constants";
import {
  type HelperArgs,
  type UserHelperArgs,
  type TodosStructure,
  type TUser,
} from "./types";

export async function fetchTodos({
  setTodos,
  setIsLoading,
  setIsError,
}: HelperArgs) {
  setIsError(false);
  setIsLoading(true);

  try {
    const todosResponse = await fetch(API_TODO);
    const todos: TodosStructure = await todosResponse.json();
    setTodos(todos);
  } catch (error) {
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
}

export async function fetchTodoDetails({
  userId,
  setUserData,
  setIsError,
  setIsLoading,
}: UserHelperArgs) {
  setIsError(false);
  setIsLoading(true);

  try {
    const userDataResponse = await fetch(API_USER(userId));
    const userData: TUser = await userDataResponse.json();
    setUserData(userData);
  } catch (error) {
    setIsError(true);
  } finally {
    setIsLoading(false);
  }
}
