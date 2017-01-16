import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Storage } from '@ionic/storage';

import { ListPage } from './../pages/list-page/list-page';
import { InfoComponent } from './../pages/Info-page/info-page';
import { FilterTodoPage } from './../pages/filter-todo/filter-todo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = ListPage;
  pages: Array<{title: string, component: any}>;
  myStorage: Storage;
  myCategories: String[];

  constructor(public platform: Platform, storage: Storage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Todo List', component: ListPage},
      { title: 'Info', component: InfoComponent}
    ];

    storage.set('author','Quentin');
    storage.set('categories',[
      "General",
      "Travail",
      "Loisirs"
    ]);
    this.myStorage = storage;
    this.setCategories();
  }

  setCategories(){
    this.myStorage.get('categories').then( (value)=> {
      this.myCategories = value;
    } );
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.component) {
      this.nav.setRoot(page.component);
    }
    else {
      //this.nav.setRoot(FilterTodoPage);
      this.nav.push(FilterTodoPage,{
        categorie: page
      });
    }

  }
}
