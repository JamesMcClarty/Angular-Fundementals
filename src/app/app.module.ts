import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponents } from './courses.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponents,
    AuthorComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
