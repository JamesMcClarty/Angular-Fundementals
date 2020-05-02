import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponents } from './courses.component';
import { AuthorComponent } from './author/author.component';
import { AuthorService } from './author.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleComponent } from './title/title.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponents,
    AuthorComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleComponent,
    TitleCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AuthorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
