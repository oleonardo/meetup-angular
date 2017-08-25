import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* External Modules */
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdButtonModule, MdInputModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        MdButtonModule,
        MdInputModule
    ],
    declarations: [],
    exports: [
        CommonModule,
        FlexLayoutModule,
        MaterialModule,
        MdButtonModule,
        MdInputModule
    ]
})
export class SharedModule { }
