import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ChartsComponent,
    D3Component,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
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
