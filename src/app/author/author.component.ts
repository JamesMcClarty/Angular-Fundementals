import {Component} from '@angular/core';
import { AuthorService } from '../author.service';


@Component({
    selector: 'author', //<author>
    template: `<h2>{{ getTitle() }}</h2>
    <li *ngFor="let author of authors">
    {{author}}
</li>
    `
})
export class AuthorComponent {
    title = "List of authors";

    getTitle() {
        return this.title;
    }
    authors;

    constructor(service: AuthorService){
        this.authors = service.getAuthors
    }
}