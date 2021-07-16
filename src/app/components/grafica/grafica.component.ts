import { Input } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: [`
  
  .chart-container {
    display:grid;
    height:300px;
  }
  `
  ]
})
export class GraficaComponent implements OnDestroy {

  @Input() results: any[] = [];
  // results: any[] = [
  //   {
  //     "name": "Juego 1",
  //     "value": 20
  //   },
  //   {
  //     "name": "Juego 2",
  //     "value": 25
  //   },
  //   {
  //     "name": "Juego 3",
  //     "value": 15
  //   },
  //   {
  //     "name": "Juego 4",
  //     "value": 30
  //   }
  // ];


  // options
  showXAxis  = true;
  showYAxis  = true;
  gradient   = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme ={
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  

  //intervalo;

  constructor() {

    // this.intervalo = setInterval( () => {
    
    // const newResults = [...this.results];

    // for( let i in newResults ) {
    // newResults[i].value = Math.round( Math.random() * 500 )
    // }

    // this.results = [...newResults];

    // }, 1500 );

  }

  onSelect(event:any) {
    console.log(event);
  }

  ngOnDestroy() {
   // clearInterval( this.intervalo );
  }

  

}
