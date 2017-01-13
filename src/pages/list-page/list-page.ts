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

    this.myStorage.forEach( (value: any, key: string, index: number) => {
      this.ajouterTodo({name: value.name, description: value.description, done: false});
    });
  }


  ionViewDidLoad() {
    //console.log('ionViewDidLoad ListPagePage');
  }

  deleteItem(item) {
    var index = this.items.indexOf(item, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }
    //delete this.items[this.items.indexOf(item)];
  }

  addTodo() {
    this.navCtrl.push(AddTodoPage);
    //this.nav.setRoot(AddTodoPage);
  }

  /**
   * For Testing purpose only
   */
  ajouterTodo(todo : Todo) {
    this.items.push(todo);
  }

}
