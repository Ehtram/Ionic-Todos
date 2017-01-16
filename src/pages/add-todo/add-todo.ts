import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html'
})
export class AddTodoPage {
  newTodo: FormGroup;
  myStorage: Storage;
  myCategories: String[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, storage: Storage) {
    this.newTodo = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['',Validators.maxLength(300)],
      categorie: ['',Validators.required]
    });

    this.myStorage = storage;
    this.myStorage.get('categories').then( (categories) => this.myCategories = categories);
 }

  addTodo() {
    this.myStorage.set(this.newTodo.value.name,{
      name: this.newTodo.value.name,
      description: this.newTodo.value.description,
      done: false,
      categorie: this.newTodo.value.categorie,
    }).then(() => {
      console.log(this.newTodo);

      if(this.navCtrl.getPrevious)
      {
        this.navCtrl.pop();
      }
    });
  }

}
