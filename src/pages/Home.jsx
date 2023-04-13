import { TodoList } from "../components/TodoList";
import { Formulario } from "../components/Formulario";
import { ToDoProvider } from "../contexts/ToDoProvider";
import { useToDos } from "../contexts/useToDos";

export const Home = () => {
  const { completedToDos, pendingToDos, addToDo, markTodo } = useToDos;

  return (
    <ToDoProvider>
      <div>
        <div className="row">
          <Formulario onSubmit={addToDo} />
        </div>
        <div className="row">
          <TodoList name="A fazer" list={pendingToDos} onClick={markTodo} />
          <TodoList
            name="Finalizados"
            list={completedToDos}
            onClick={markTodo}
          />
        </div>
      </div>
    </ToDoProvider>
  );
};
