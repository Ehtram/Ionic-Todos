import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Todo } from './../../app/model/todo.model';

@Component({
  selector: 'list-page',
  templateUrl: 'list-page.html'
})
export class ListPage {

  items: Todo[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = new Array<Todo>();
    this.ajouterTodo({name: "Super", description: "aldjazkdjzald", done: false});
    this.ajouterTodo({name: "Cours ", description: "Suivre Cours de POO", done: false});
  }

  ajouterTodo(todo : Todo) {
    this.items.push(todo);
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
}
