import {Component} from '@angular/core';
import { CoursesService } from './courses.services';


@Component({
    selector: 'courses', //<courses>
    template: `<h2>{{ getTitle() }}</h2>
    <li *ngFor="let course of courses">
    {{course}}
</li>
    <table>
        <tr>
            <td [attr.colspan]="colSpan"></td>
        </tr>
    </table>
    <button class="btn btn-primary" [style.backgroundColor] ="isActive ? 'blue' : 'white'">Save</button>
    `
})
export class CoursesComponents {
    title = "List of courses";
    colSpan = 2;
    isActive = true;

    getTitle() {
        return this.title;
    }
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

}