import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* External Modules */
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdButtonModule, MdInputModule } from '@angular/material';

/* Directives */
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        MdButtonModule,
        MdInputModule
    ],
    declarations: [
        HighlightDirective
    ],
    exports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        MdButtonModule,
        MdInputModule,
        HighlightDirective        
    ]
})
export class SharedModule { }
