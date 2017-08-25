import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  interpolationExpression = '{{expression}}';
  interpolationSyntax = '{{ ... }}';
  interpolationData: string = 'Meetup interpolation data to display.';
  TWD: string[] = ['Rick Grimes', 'Daryl Dixon'];
  isHighlight: boolean = true;
  innerHtml: string = 'Element property inner html';
  componentPropertyText: string = 'Component property text';
  name: string = 'Negan';

  constructor() { }

  ngOnInit() {
  }
}
