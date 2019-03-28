import { openDB } from 'idb/with-async-ittr.js';

export async function openDb() {
  const db = await openDB('Todos', 1, {
    upgrade(db: any) {
      const store = db.createObjectStore('todos', {
        keyPath: 'todoId'
      });
      store.createIndex('tags', 'tags');
    },
  });
  return db;
}

export async function addTodo(todo: any) {
  const db = await openDb();
  await db.add('todos', todo);
}

export async function getTodos() {
  const db = await openDb();
  return await db.getAll('todos');
}

export async function updateTodo(todo: any) {
  const db = await openDb();
  await db.put('todos', todo);
}
