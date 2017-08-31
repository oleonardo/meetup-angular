import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

/* Core Modules */
import { SharedModule } from './../shared/shared.module';

/* Feature Modules */
import { DirectiveRoutingModule } from './directive-routing.module';

/* Components */
import { DirectiveComponent } from './directive.component';

@NgModule({
  imports: [SharedModule, DirectiveRoutingModule, FormsModule, HttpModule],
  declarations: [
    DirectiveComponent
  ],
  providers: []
})
export class DirectiveModule { }
