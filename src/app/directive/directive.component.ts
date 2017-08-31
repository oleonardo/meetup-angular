import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  color: string = 'yellow';
  ngIfValue: boolean = true;
  TWD: string[] = ['Rick Grimes', 'Daryl Dixon'];
  characterSelected: string;

  constructor() { }

  ngOnInit() {
  }

}
