import { openDB } from 'idb/with-async-ittr.js';

export async function openDb() {
  const db = await openDB('Todos', 1, {
    upgrade(db: any) {
      const store = db.createObjectStore('todos', {
        keyPath: 'todoId'
      });
      store.createIndex('tags', 'tags');
      db.createObjectStore('settings');
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
  await await db.put('todos', todo);
}

export async function deleteTodo(todo: any) {
  const db = await openDb();
  return await db.delete('todos', todo.todoId);
}

export async function addToDB(key: string, value: any) {
  const db = await openDb();
  const store = db.transaction('settings', 'readwrite').objectStore('settings');
  await store.put(value,key);
}

export async function getFromDB(key: string) {
  const db = await openDb();
  const store = db.transaction('settings').objectStore('settings');
  return await store.get(key);
}
