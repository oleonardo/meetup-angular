import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

/* Core Modules */
import { SharedModule } from './../shared/shared.module';

/* Feature Modules */
import { ComponentRoutingModule } from './component-routing.module';

/* Components */
import { ComponentComponent } from './component.component';
import { ChildComponentComponent } from './child-component.component';

/* Third-party */
import { MdProgressSpinnerModule } from "@angular/material";

@NgModule({
  imports: [
    SharedModule, 
    ComponentRoutingModule, 
    FormsModule, 
    HttpModule,
    MdProgressSpinnerModule
  ],
  declarations: [
    ComponentComponent,
    ChildComponentComponent
  ],
  providers: []
})
export class ComponentModule { }
