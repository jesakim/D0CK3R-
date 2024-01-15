import { Component } from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  actions: Array<any>=[
    {"title":"Competitions","route":"/competitions"},
    {"title":"hunts","route":"/hunts"},
    {"title":"Podium","route":"/podium"},
    {"title":"participations","route":"/participations"},
  ];

  currentAction: any;
  setCurrentAction(action: any){
    this.currentAction = action;
  }
}
