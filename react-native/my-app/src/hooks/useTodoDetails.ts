import { useEffect, useState } from "react";
import { type TUser } from "../views/types";
import { fetchTodoDetails } from "../views/helpers";

interface HookReturn {
  userData: TUser;
  isError: boolean;
  isLoading: boolean;
}

export default function useTodoDetails(userId: string): HookReturn {
  const [userData, setUserData] = useState<TUser>({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    fetchTodoDetails({ userId, setUserData, setIsLoading, setIsError });
  }, []);

  return { userData, isError, isLoading };
}
