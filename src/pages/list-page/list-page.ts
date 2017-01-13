import { AddTodoPage } from './../add-todo/add-todo';
import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, NavParams } from 'ionic-angular';

import { Todo } from './../../app/model/todo.model';

@Component({
  selector: 'list-page',
  templateUrl: 'list-page.html'
})
export class ListPage {
  @ViewChild(Nav) nav: Nav;
  items: Todo[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = new Array<Todo>();
    this.ajouterTodo({name: "Super", description: "aldjazkdjzald", done: false});
    this.ajouterTodo({name: "Cours ", description: "Suivre Cours de POO", done: false});
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
