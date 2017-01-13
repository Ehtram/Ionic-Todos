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
  }

  ajouterTodo(todo : Todo) {
    this.items.push(todo);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPagePage');
  }

}
