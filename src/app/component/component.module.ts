import { NgModule }           from '@angular/core';

/* Feature Modules */
import { ComponentRoutingModule } from './component-routing.module';

/* Components */
import { ComponentComponent } from './component.component';

@NgModule({
  imports:      [ ComponentRoutingModule ],
  declarations: [ ComponentComponent ],
  providers:    [ ]
})
export class ComponentModule { }
