import {Component} from '@angular/core';


@Component({
    selector: 'courses', //<courses>
    template: `
    {{course.title | uppercase}} <br/>
    {{course.students | number}} <br/>
    {{course.rating | number:'1.2-2' }} <br/>
    {{course.price | currency:'AUD':true:'3.2-2' }} <br/>
    {{course.releaseDate | date:'shortDate' }} <br/>
    {{ text | summary:10 }}

    <div (click) = onDivClicked()>
    <button (click) = "onSave($event)" class="btn btn-primary" [style.backgroundColor] ="isActive ? 'blue' : 'white'">Save</button>
    </div>
    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
    <div>
    {{ course.title}} <br/>
    </div>
    `
})
export class CoursesComponents {
    title = "List of courses";
    colSpan = 2;
    isActive = true;
    course = {
        title: "The Complete Course",
        rating: 4.321,
        students: 321,
        price: 109.32,
        releaseDate: new Date(2016,3,1)
    }
    email = "me@example.com";
    text = 'fkjbrnthkjbnhtrelnhretlnrehlnkrelknreblkngreklngrkngrem grm,gre,mgrjgrenlkgrel.grel gr;jng; r;nrqg;k rgqe;knrge;kngre;kngr;kn;kn;knr;knfk;nhf khtr. mhrtknl htrk lhtrknlhtrklnhtklnrklnrthklnhtlkntrhnkhtrklklnhtrnklthk;nterh;kner;knethk;nekn;hre;nkr;nr;kn;nkirh;knrehgk;n'

    onDivClicked(){
        console.log("Div was clicked");
    }

    getTitle() {
        return this.title;
    }

    onSave($event){
        //Prevents events from bubbling up.
        $event.stopPropagation();
        console.log("Button was pressed.", $event);
    }

    onKeyUp(){
        console.log(this.email);
    }
}