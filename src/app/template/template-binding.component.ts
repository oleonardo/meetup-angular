import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-template-binding',
    template: `
    <label>{{text}}</label>
    `
})
export class TemplateBindingComponent {
    @Input('text') text: string;
}
