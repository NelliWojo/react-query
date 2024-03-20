import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../mock-api/todos";
import TodoCard from "./TodoCard";

export default function Demo() {
  const { data: todos, isLoading } = useQuery({
    queryFn: () => fetchTodos(),
    queryKey: ["todos"],
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {todos?.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
