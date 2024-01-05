"use client";

import { SetStateAction, useEffect, useState } from "react";

interface Todo {
  id: number;
  text: string;
  isChecked: boolean;
}

export default () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <section className="flex flex-col pt-20 items-center">
      <span>hello</span>
      <MakeTodo id={1} text="hello" setter={setTodos} />
      <Todos todos={todos} />
    </section>
  );
};

const Todos = ({ todos }: { todos: Todo[] }) => {
  return todos.map((todo) => <span key={todo.id}>{todo.text}</span>);
};

const MakeTodo = ({
  id,
  text,
  setter,
}: {
  id: number;
  text: string;
  setter: (dispather: SetStateAction<Todo[]>) => void;
}) => {
  useEffect(() => {
    setter((todos) => [...todos, { id, text, isChecked: false }]);
  }, [id, text, setter]);
  return <></>;
};
