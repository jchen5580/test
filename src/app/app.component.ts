import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: 
  `
  <p>{{ someProperty }}</p>

  <p [@myAwesomeAnimation]='state' (click)="animateMe()">I will animate</p>

  <h1 [ngStyle]="titleStyles">Hello!</h1> 
  <h1 [class] = "titleClass">Hi! </h1>
  <h1 [ngClass] = "titleClasses"> My Title!</h1>

  <!-- Component
  <p>I am a {{myObject.gender}} and I am {{myObject.age}} old. I live in {{myObject.location}}</p>
  
  <ul>
    <li *ngFor="let arr of myArr">{{arr}}</li>
    <li *ngIf="myArr">Yeah, myArr exist.</li>
    <li *ngIf="!yourArr">Yeah, yourArr doesn't exist.</li>
    <li *ngIf="var1=='something'">Yeah, something exist.</li>
    
  </ul>
  <div *ngIf="var2; then tmpl1 else tmpl2"></div>
  <ng-template #tmpl1>tmpl1 - I'm here</ng-template>
  <ng-template #tmpl2>tmpl2 - I'm not here</ng-template>
  -->
  <img src="{{ angularLogo }}">
  <img [src]="angularLogo">
  <img bind-src="angularLogo">

  <button (click)="myEvent($event)">My Button</button>
  `,
  styles: [`
    h1 {
        text-decoration:underline;
    }
    .red-title {
      color:red;
    }
    .large-title {
      font-size: 5em;
    }
    p {
      width:200px;
      background:lightgray;
      margin: 100px auto;
      text-align:center;
      padding:20px;
      font-size:1.5em;
    }
  `],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
          transform: 'scale(1)',
      })),
      state('large', style({
          transform: 'scale(1.2)',
      })),
      transition('small <=> large', animate('300ms ease-in', keyframes([
        style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
        style({opacity: 1, transform: 'translateY(35px)',  offset: 0.5}),
        style({opacity: 1, transform: 'translateY(0)',     offset: 1.0})
      ]))),
  ]),
  ]
})
export class AppComponent {

  constructor(private dataService:DataService) {

  }

  someProperty:string = '';

  ngOnInit() {
    console.log(this.dataService.cars);

    this.someProperty = this.dataService.myData();
  }

  title = 'the western world';
  /*Component
  
  otherTmpl;

  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };
  var1 = 'something';
  var2 ;
  myArr = ['him', 'hers', 'yours', 'theirs'];*/
  angularLogo = 'https://angular.io/resources/images/logos/angular2/angular.png';
  buttonStatus = 'enabled'; 

  titleStyle = true;
  titleClass = 'red-title';
  myEvent(event) {
    console.log(event);
  }

  titleStyles = {
    'color' : 'red',
    'font-size' : '4em'
  }

  titleClasses = {
    'red-title': true,
    'large-title': false
  }

  state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

  
}
