import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* External Modules */
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdButtonModule, MdInputModule, MdNativeDateModule, MdDatepickerModule } from '@angular/material';

/* Directives */
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        MdButtonModule,
        MdInputModule,
        MdNativeDateModule,
        MdDatepickerModule
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
        MdDatepickerModule,
        HighlightDirective        
    ]
})
export class SharedModule { }
