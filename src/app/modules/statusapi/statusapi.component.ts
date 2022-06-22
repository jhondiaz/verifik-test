import { Component, OnInit, ViewChild } from "@angular/core";
import { StatusApiService } from "app/core/statusapi/statusapi.service";
import { map, result } from "lodash";
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexYAxis,
  ApexTitleSubtitle,
} from "ng-apexcharts";


export type ChartOptions = {
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
  colors: string[];
};

@Component({
  selector: "app-statusapi",
  templateUrl: "./statusapi.component.html",
  styleUrls: ["./statusapi.component.scss"],
})
export class StatusapiComponent implements OnInit {
  
    user: any;
    
    accessToken: string;
  
    constructor() {
      this.user = JSON.parse(localStorage.getItem('user'));
  
      this.accessToken = localStorage.getItem('accessToken');
      console.log(this.user);
    }
  
    ngOnInit(): void {
      
    }
  
  }