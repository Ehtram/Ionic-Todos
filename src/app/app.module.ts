import { FilterTodoPage } from './../pages/filter-todo/filter-todo';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { InfoComponent } from './../pages/Info-page/info-page';
import { ListPage } from './../pages/list-page/list-page';
import { AddTodoPage } from './../pages/add-todo/add-todo';
import { TodoDetailsPage } from './../pages/todo-details/todo-details';

@NgModule({
  declarations: [
    MyApp,
    InfoComponent,
    ListPage,
    AddTodoPage,
    TodoDetailsPage,
    FilterTodoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoComponent,
    ListPage,
    AddTodoPage,
    TodoDetailsPage,
    FilterTodoPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
    ]
})
export class AppModule {}
