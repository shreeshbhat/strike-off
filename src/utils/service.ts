import { get, set } from 'idb-keyval';

export async function setTodos(todos: any) {
  set('todos',todos);
}

export async function getTodos() {
  return get('todos');
}
