import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

/* Core Modules */
import { SharedModule } from '../shared/shared.module';

/* Feature Modules */
import { TemplateRoutingModule } from './template-routing.module';

/* Components */
import { TemplateComponent } from './template.component';
import { TemplateBindingComponent } from './template-binding.component';

@NgModule({
  imports: [SharedModule, TemplateRoutingModule, FormsModule],
  declarations: [TemplateComponent, TemplateBindingComponent],
  providers: []
})
export class TemplateModule { }
