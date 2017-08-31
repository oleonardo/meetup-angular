import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
    selector: 'app-chid-component',
    template: `
    <div fxLayout="row" fxLayoutAlign="start center">
        <label>ngOnChanges:</label>
        <label class="iteration">{{onChangesIterations}}</label>
        <label>&nbsp;- {{data}}</label>
    </div>`,
    styles: [`
    .iteration  {
        font-weight: 700;  
        margin-left: 10px;
    }`]
})
export class ChildComponentComponent implements OnChanges {
    @Input('data') data: string;
    onChangesIterations: number = 0;

    ngOnChanges(changes: SimpleChanges) {
        console.log('changes:', changes);
        this.onChangesIterations++;
    }
}