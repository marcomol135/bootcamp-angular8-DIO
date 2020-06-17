import { Error404Component } from './error404/error404.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { CourseListComponent } from './courses/course-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    CourseListComponent,
    ReplacePipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'courses', pathMatch:'full'}, // padrao, raiz
      {path:'courses', component: CourseListComponent},
      {path:'**', component:Error404Component} //padrao, quando nao encontra a url 

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
