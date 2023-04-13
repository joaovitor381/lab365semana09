import { useContext } from "react";
import { todoContext } from "./ToDoProvider";
import { useToDos } from "../contexts/useToDos";

export const useToDos = () => {
  const context = useContext(todoContext);
  if (context) {
    return context;
  } else {
    alert("useTodos não está dentro do ToDoProvider");
  }
};
