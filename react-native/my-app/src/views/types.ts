export type TUser = {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
}

export type TodoItem = {
  title: string;
  id?: number;
  userId?: number;
}

export type TUserData = TUser[]

export type TodosStructure = TodoItem[]

export type PressType = 'ADD' | 'REMOVE' 

export type TodoTextOrTodoIndex = string | number

export interface HelperArgs {
  setTodos: React.Dispatch<React.SetStateAction<TodosStructure>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface UserHelperArgs {
  userId: string;
  setUserData: React.Dispatch<React.SetStateAction<TUser>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}