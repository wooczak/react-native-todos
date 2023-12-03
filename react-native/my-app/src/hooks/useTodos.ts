import { useEffect, useState } from "react";
import { PressType, TodoTextOrTodoIndex, TodosStructure } from "../views/types";
import { fetchTodos } from "../views/helpers";

interface HookReturn {
  todos: TodosStructure;
  setTodos: React.Dispatch<React.SetStateAction<TodosStructure>>;
  isError: boolean;
  isLoading: boolean;
}

export default function useTodos(): HookReturn {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [todos, setTodos] = useState<TodosStructure>([
    {
      title: "",
    },
  ]);

  useEffect(function () {
    fetchTodos({ setTodos, setIsLoading, setIsError });
  }, []);


  return { todos, setTodos, isError, isLoading };
}
