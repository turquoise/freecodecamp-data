import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import * as d3 from 'd3';


@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit, AfterViewInit {

  private chartData: Array<any>;

  constructor() { }

  // http://www.palador.com/2017/02/28/create-a-pie-chart-with-dynamic-data-using-d3-js-angular-2/
  // https://keathmilligan.net/create-reusable-chart-components-with-angular-2-and-d3-js-version-4/
  // https://github.com/keathmilligan/angular2-d3-v4/tree/master/src/app/shared/barchart

  ngOnInit() {
    // give everything a chance to get loaded before starting the animation to reduce choppiness
    setTimeout(() => {
      this.generateData();

      // change the data periodically
      setInterval(() => this.generateData(), 3000);
    }, 1000);
  }

  ngAfterViewInit() {

  }

  generateData() {
    this.chartData = [];
    for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
      this.chartData.push([
        `Index ${i}`,
        Math.floor(Math.random() * 100)
      ]);
    }
  }

}
