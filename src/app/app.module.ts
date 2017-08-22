import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/* App Root */
import { AppComponent } from './app.component';

/* External Modules */
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdSidenavModule, MdButtonModule } from '@angular/material';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
import { ModuleModule } from './module/module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    MdSidenavModule,
    MdButtonModule,
    ModuleModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
