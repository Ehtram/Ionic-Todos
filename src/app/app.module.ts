import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { MyApp } from './app.component';
import { InfoComponent } from './../pages/Info-page/info-page';
import { ListPage } from './../pages/list-page/list-page';
import { AddTodoPage } from './../pages/add-todo/add-todo';

@NgModule({
  declarations: [
    MyApp,
    InfoComponent,
    ListPage,
    AddTodoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InfoComponent,
    ListPage,
    AddTodoPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage
    ]
})
export class AppModule {}
