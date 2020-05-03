import { Activity } from './../models/activity';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public activities: Activity[] = [
    {"company": "Ergoss", "job": "DevOps Engineer"},
    {"company": "Epitech", "job": "Teaching assistant"},
    {"company": "Inforsud Diffusion", "job": "Fullstack Developer"}
  ];
  constructor() {}

}
