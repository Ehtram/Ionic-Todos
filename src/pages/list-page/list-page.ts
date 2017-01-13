import { AddTodoPage } from './../add-todo/add-todo';
import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Todo } from './../../app/model/todo.model';

@Component({
  selector: 'list-page',
  templateUrl: 'list-page.html'
})
export class ListPage {
  @ViewChild(Nav) nav: Nav;
  items: Todo[];
  myStorage: Storage;

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage) {
    this.items = new Array<Todo>();
    this.myStorage = storage;
  }

  ionViewWillEnter() {
    this.myStorage.forEach( (value: any, key: string, index: number) => {
      this.ajouterTodo({name: value.name, description: value.description, done: false});
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
