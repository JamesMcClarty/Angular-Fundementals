import {Component} from '@angular/core';
import { CoursesService } from './courses.services';


@Component({
    selector: 'courses', //<courses>
    template: `<h2>{{ getTitle() }}</h2>
    <li *ngFor="let course of courses">
    {{course}}
</li>
    `
})
export class CoursesComponents {
    title = "List of courses";

    getTitle() {
        return this.title;
    }
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

}