import { NgModule }           from '@angular/core';

/* Feature Modules */
import { ModuleRoutingModule } from './module-routing.module';

/* Components */
import { ModuleComponent } from './module.component';

@NgModule({
  imports:      [ ModuleRoutingModule ],
  declarations: [ ModuleComponent ],
  providers:    [ ]
})
export class ModuleModule { }
