import ToDoList from "components/ToDoList";

export type ToDo = {
    id?: string,
    name: string,
    description: string,
    createdAt?: string,
    updatedAt?: string,
};

export type ToDos = {
    todos: Array<ToDo>,
};
