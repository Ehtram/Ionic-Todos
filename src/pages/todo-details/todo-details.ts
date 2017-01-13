import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Todo } from './../../app/model/todo.model';

@Component({
  selector: 'page-todo-details',
  templateUrl: 'todo-details.html'
})
export class TodoDetailsPage {
  currentItem: Todo;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
    this.currentItem = {name: navParams.get('name'), description: navParams.get('description'), done: false}
    console.log(this.currentItem);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoDetailsPage');
  }

}
