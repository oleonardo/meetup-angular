import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Core Modules */
import { SharedModule } from './../shared/shared.module';

/* Feature Modules */
import { FormsRoutingModule } from './forms-routing.module';

/* Components */
import { FormsComponent } from './forms.component';

@NgModule({
    imports: [
        SharedModule, 
        FormsRoutingModule, 
        FormsModule, 
        ReactiveFormsModule,
        HttpModule
    ],
    declarations: [
        FormsComponent
    ],
    providers: []
})
export class CustomFormsModule { }
