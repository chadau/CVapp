/*
** Component for display the profile
** <app-profile-card avatar="path/to/avatar" name="user_name"></app-profile-card>
*/ 

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
