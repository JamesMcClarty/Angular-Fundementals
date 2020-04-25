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
    <div (click) = onDivClicked()>
    <button (click) = "onSave($event)" class="btn btn-primary" [style.backgroundColor] ="isActive ? 'blue' : 'white'">Save</button>
    </div>
    <input (keyup.enter)="onKeyUp()"/>
    `
})
export class CoursesComponents {
    title = "List of courses";
    colSpan = 2;
    isActive = true;
    courses;

    onDivClicked(){
        console.log("Div was clicked");
    }

    getTitle() {
        return this.title;
    }
    

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

    onSave($event){
        //Prevents events from bubbling up.
        $event.stopPropagation();
        console.log("Button was pressed.", $event);
    }

    onKeyUp(){
        console.log("Enter is pressed");
    }
}