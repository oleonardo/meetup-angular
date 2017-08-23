import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'module', pathMatch: 'full'},
    { path: 'module', loadChildren: 'app/module/module.module#ModuleModule' },
    { path: 'template', loadChildren: 'app/template/template.module#TemplateModule' },
    { path: 'component', loadChildren: 'app/component/component.module#ComponentModule' }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  