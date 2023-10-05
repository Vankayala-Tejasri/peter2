import { Component } from '@angular/core';
import { Chart,registerables} from 'node_modules/chart.js';
import { GraphService } from '../graph.service';
import { HttpClient } from '@angular/common/http';
import { ChartDataset, ChartOptions } from 'node_modules/chart.js';
import { Color } from 'node_modules/chart.js';
Chart.register(...registerables);
import {Router} from '@angular/router'

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {


  blog(){
    this.router.navigate([''])
  }
  log(){
    this.router.navigate(['/covidtesting'])
  }

  totalCases = 10000;
  totalDeaths = 500;
  totalRecovered = 8000;

  lineChartData: any[] = [
    { data: [100, 200, 300, 400, 500, 600,700,800], label: 'Cases' },
  ];

  lineChartLabels: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','jul','aug'];

  lineChartOptions: any = {
    responsive: true
  };

  lineChartLegend = true;
  lineChartType = 'line';

  title="angularcharts";
  constructor(private service: GraphService,private router:Router) { }
  maindataConfirmed: any[] = [];
  maindataRecovered: any[] = [];
  maindataDeaths: any[] = [];
  chartdata: any;
  lineCharts: Chart[] = [];
  pieChart: Chart | undefined;
  maindata: any[] = []; 
  labeldata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];
  linedata: any[] = [];



  ngOnInit(): void {
    this.service.Getchartinfo().subscribe((result: any) => {
      console.log('API data:', result);
  
      if (Array.isArray(result) && result.length > 0) {
        const labeldata = result.map((item: any) => item.loc);
        const maindataConfirmed = result.map((item: any) => item.totalConfirmed);
        const maindataRecovered = result.map((item: any) => item.totalRecovered);
        const maindataDeaths = result.map((item: any) => item.totalDeaths);
  
        this.lineCharts.forEach((chart) => chart.destroy());
        this.lineCharts = [];
        this.lineCharts.forEach((chart) => chart.destroy());
  
     
        this.lineCharts.push(this.RenderLineChart(labeldata, maindataConfirmed, 'Total Confirmed'));
        this.lineCharts.push(this.RenderLineChart(labeldata, maindataRecovered, 'Total Recovered'));
        this.lineCharts.push(this.RenderLineChart(labeldata, maindataDeaths, 'Total Deaths'));
  
      
        const pieData = [ 
          result[0].totalConfirmed,
          result[0].totalRecovered,
          result[0].totalDeaths,
        ];
      //const labeldata = ['Total Confirmed', 'Total Recovered', 'Total Deaths'];
      const maindata = [result[0].totalConfirmed, result[0].totalRecovered, result[0].totalDeaths];
      const colordata = this.generateRandomColors(maindata.length);
  
        // Call the RenderChart method with a unique canvas ID for the pie chart
        // this.RenderLineChart(this.labeldata,this.linedata,);
        this.RenderChart(this.labeldata,this. maindata,this. colordata,'pie','piechart');      
      }
    });
  }
  RenderChart(labeldata: any, maindata: any, colordata: any,type:any, chartId: string) {
    const myChart = new Chart(chartId, {
      type: type, 
      data: {
        labels: labeldata,
        datasets: [{
          data: maindata,
          backgroundColor: colordata,
          borderColor: 'rgba(255, 255, 255, 0.7)',
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: 'bottom',
          }
        }
      }
    });
    return myChart;
  }
  


  RenderLineChart(labeldata: any, linedata: any, label: string): Chart {
    const chart = new Chart('linechart', {
      type: 'line',
      data: {
        labels: labeldata,
        datasets: [{
          label: label,
          data: linedata,
          borderColor: 'red',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    return chart;
  }
  // RenderChart(labeldata: any, linedata: any, label: string): Chart {
  //   const chart = new Chart(id, {
  //     type: type,
  //     data: {
  //       labels: labeldata,
  //       datasets: [{
  //         label: label,
  //         data: linedata,
  //         borderColor: 'red',
  //         borderWidth: 1,
  //         fill: false
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //     }
  //   });

  //   return chart;
  // }





generateRandomColors(count: number) {
  const colors: string[] = [];
  for (let i = 0; i < count; i++) {
    colors.push(this.getRandomColor());
  }
  return colors;
}

getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


  





  RenderBubblechart(){
    const data = {
      datasets: [{
        label: 'First Dataset',
        data: [{
          x: 20,
          y: 30,
          r: 15
        }, {
          x: 40,
          y: 10,
          r: 10
        },
        {
          x: 20,
          y: 38,
          r: 9
        },
      {
        x: 25,
          y: 15,
          r: 35
      }],
        backgroundColor: 'rgb(255, 99, 132)'
      }]
    };
    const myChart = new Chart('bubchart', {
      type: 'bubble',
      data: data,
      options: {
        
      }
    });
  }

  RenderScatterchart(){
    const data = {
      datasets: [{
        label: 'Scatter Dataset',
        data: [{
          x: -10,
          y: 0
        }, {
          x: 0,
          y: 10
        },
        {
          x: 20,
          y: 30
        },
        {
          x: 40,
          y: 50
        },
        {
          x: 60,
          y: 70
        },{
          x: 80,
          y: 90
        },
        {
          x: 10,
          y: 5
        }, {
          x: 0.5,
          y: 5.5
        }],
        backgroundColor: 'rgb(255, 99, 132)'
      }],
    };
    const myChart = new Chart('scchart', {
      type: 'scatter',
      data: data,
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom'
          }
        }
      }
    });
  }

}
