import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AmexioWidgetModule, CommonHttpService } from 'amexio-ng-extensions';
import { AmexioChartModule } from 'amexio-ng-extensions/charts';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ChartsComponent } from './charts/charts.component';
import { D3Service } from 'd3-ng2-service';
import { D3Component } from './d3/d3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChartsComponent,
    D3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmexioWidgetModule,
    AmexioChartModule,
    CommonModule
  ],
  providers: [CommonHttpService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
