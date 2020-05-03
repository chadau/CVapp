/*
** Component for display one contact
** use: <app-contact-card icon="icon-name" text="text-card"></app-contact-card>
*/ 

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss'],
})
export class ContactCardComponent implements OnInit {

  @Input() public icon: string;
  @Input() public text: string;

  constructor() { 
  }

  ngOnInit() {}

}
