import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { ModuleComponent } from './module.component';

export const routes: Routes = [
    { path: 'module', component: ModuleComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ModuleRoutingModule {}
  