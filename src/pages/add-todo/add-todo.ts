import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

import { Todo } from './../../app/model/todo.model';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html'
})
export class AddTodoPage {
  //newTodo : Todo;
  newTodo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.newTodo = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
    });
  }

  addTodo() {
    //this.navCtrl.pop();
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AddTodoPage');
  }

}
