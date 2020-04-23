import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponents } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.services';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponents,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService, AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
