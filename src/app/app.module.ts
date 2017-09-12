import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AmexioWidgetModule, CommonHttpService } from 'amexio-ng-extensions';
import { AmexioChartModule } from 'amexio-ng-extensions/charts';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { D3Service } from 'd3-ng2-service';
import { D3Component } from './d3/d3.component';
import { BarchartComponent } from './d3/barchart/barchart.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdToolbarModule } from '@angular/material';

import {
  CovalentLayoutModule,
  CovalentStepsModule,
  CovalentExpansionPanelModule
} from '@covalent/core';

import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { ForceComponent } from './force/force.component';
import { GlobeComponent } from './globe/globe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    D3Component,
    BarchartComponent,
    HomeComponent,
    BarChartComponent,
    ScatterplotComponent,
    HeatMapComponent,
    ForceComponent,
    GlobeComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AmexioWidgetModule,
    AmexioChartModule,
    CommonModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentExpansionPanelModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    FlexLayoutModule,
    MaterialModule,
    MdToolbarModule
  ],
  providers: [CommonHttpService, D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
