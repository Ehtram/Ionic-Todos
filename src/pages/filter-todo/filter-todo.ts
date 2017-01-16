import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Todo } from './../../app/model/todo.model';
import { TodoDetailsPage } from './../todo-details/todo-details';
import { AddTodoPage } from './../add-todo/add-todo';

@Component({
  selector: 'page-filter-todo',
  templateUrl: 'filter-todo.html'
})
export class FilterTodoPage<Categorie extends String> {
  myCategorie: String;
  items: Todo[];
  myStorage: Storage;

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage) {
    this.myCategorie = navParams.get('categorie');
    this.myStorage = storage;
  }

  ionViewWillEnter() {
    this.items = new Array<Todo>();
    this.myStorage.forEach( (value: any, key: string, index: number) => {
      if (value.categorie == this.myCategorie)
        this.ajouterTodo({name: value.name, description: value.description, done: value.done, categorie: value.categorie });
    });
  }

  gotToDetails(item) {
    this.navCtrl.push(TodoDetailsPage,{
      name: item.name,
      description: item.description,
      done: item.done,
      categorie: item.categorie,
    });
  }

  checkItem(item) {
    item.done = true;
    this.myStorage.set(item.name,{
      name: item.name,
      description: item.description,
      done: true,
      categorie: item.categorie
    }).then(() => {
      console.log("Item Updated in db");
    });
  }

  uncheckItem(item){
    item.done = false;
    this.myStorage.set(item.name,{
      name: item.name,
      description: item.description,
      done: false,
      categorie: item.categorie
    }).then(() => {
      console.log("Item Updated in db");
    });
  }

  /**
   * Delete an item from the local todo list,
   * and delete it from the db if it works
   */
  deleteItem(item) {
    var index = this.items.indexOf(item, 0);
    if (index > -1) {
      if(this.items.splice(index, 1)) {
        // The item have been suppressed
        this.myStorage.remove(item.name);
      }
    }
    //delete this.items[this.items.indexOf(item)];
  }

  clearDb() {
    this.myStorage.clear().then(() => {
      console.warn("Database has been cleared !");
      this.ionViewWillEnter(); // Force the UI to refresh and pull from the db
    });
  }

  addTodo() {
    this.navCtrl.push(AddTodoPage);
  }

  /**
   * For Testing purpose only
   */
  ajouterTodo(todo : Todo) {
    this.items.push(todo);
  }

}
