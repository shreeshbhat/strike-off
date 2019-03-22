

import { default as PouchDB } from 'pouchdb-browser';
//import PouchDB from 'pouchdb-browser';

var db = new PouchDB('todos');
//var remoteCouch = false;


export function addTodo(todo: any) {
  db.put(todo, function callback(err, result) {
    if (!err) {
      console.log('Successfully posted a todo!');
      console.debug('Result : ' + result);
    }
  });
}

export function showTodos() {
  db.allDocs({include_docs: true, descending: true}, function(err, doc) {
    if (!err) {
      return(doc.rows);
    }
  });
}
