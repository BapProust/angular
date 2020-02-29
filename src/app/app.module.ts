import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1MenuComponent } from './component1-menu/component1-menu.component';
import { Component2LeftSidebarComponent } from './component2-left-sidebar/component2-left-sidebar.component';
import { Component3RightSidebarComponent } from './component3-right-sidebar/component3-right-sidebar.component';
import { Component4MiddleContentComponent } from './component4-middle-content/component4-middle-content.component';
import { Component5FooterComponent } from './component5-footer/component5-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Component1MenuComponent,
    Component2LeftSidebarComponent,
    Component3RightSidebarComponent,
    Component4MiddleContentComponent,
    Component5FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
