import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponents } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.services';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
