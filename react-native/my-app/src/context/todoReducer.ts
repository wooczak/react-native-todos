import {
  TodoReducerActionType as ActionType,
  type IInitialState,
} from "./types";

export const initialState: IInitialState = {
  todos: [],
};

export function todoReducer(
  state: typeof initialState,
  action: { type: ActionType; payload?: any }
) {
  const { type, payload } = action;

  switch (type) {
    case ActionType.ADD_TODO:
      return {
        todos: [...state.todos, ...payload],
      };
    case ActionType.REMOVE_TODO:
      return {
        todos: [
          ...state.todos.slice(0, payload.input as number),
          ...state.todos.slice((payload.input as number) + 1),
        ],
      };
    case ActionType.RESET_TODOS:
      return {
        todos: [],
      };
    default:
      throw new Error(`No case for type ${type} found in the reducer`);
  }
}
