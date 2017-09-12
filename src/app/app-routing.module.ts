import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ScatterplotComponent } from './scatterplot/scatterplot.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { ForceComponent } from './force/force.component';
import { GlobeComponent } from './globe/globe.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'scatterplot', component: ScatterplotComponent },
  { path: 'heat-map', component: HeatMapComponent },
  { path: 'force', component: ForceComponent },
  { path: 'globe', component: GlobeComponent },
  { path: '**', redirectTo: '/home'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
