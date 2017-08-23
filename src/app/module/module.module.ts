import { NgModule }           from '@angular/core';

/* Core Modules */
import { SharedModule } from '../shared/shared.module';

/* Feature Modules */
import { ModuleRoutingModule } from './module-routing.module';

/* Components */
import { ModuleComponent } from './module.component';

@NgModule({
  imports:      [ SharedModule, ModuleRoutingModule ],
  declarations: [ ModuleComponent ],
  providers:    [ ]
})
export class ModuleModule { }
