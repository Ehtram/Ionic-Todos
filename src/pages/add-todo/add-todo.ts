import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

import { Todo } from './../../app/model/todo.model';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html'
})
export class AddTodoPage {
  //newTodo : Todo;
  newTodo: FormGroup;
  myStorage: Storage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, storage: Storage) {
    this.newTodo = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
    });

    this.myStorage = storage;
  }

  addTodo() {
    //this.navCtrl.pop();
    this.myStorage.set(this.newTodo.value.name,{
      name: this.newTodo.value.name,
      description: this.newTodo.value.description
    }).then(() => {
      if(this.navCtrl.getPrevious)
      {
        this.navCtrl.pop();
      }
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AddTodoPage');
  }

}
