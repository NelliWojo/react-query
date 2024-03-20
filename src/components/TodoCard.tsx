import { Todo } from "../models/Todo";

interface TodoProps {
  todo: Todo;
}

export default function TodoCard({ todo }: TodoProps) {
  return <div>{todo.title}</div>;
}
