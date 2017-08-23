import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { TemplateComponent } from './template.component';

export const routes: Routes = [
    { path: '', component: TemplateComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TemplateRoutingModule {}
  