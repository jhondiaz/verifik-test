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
import { of } from "rxjs";
import { catchError, finalize, switchMap } from "rxjs/operators";
import { DataApis } from "./dataapis";

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
  timerEven: number = 10000;
  polling: any;
  listStatus: Map<number, number[]>;
  listLatencia: Map<number, number[]>;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptionsConductor: Partial<ChartOptions>;
  public chartOptionsAntecedentes: Partial<ChartOptions>;
  public chartOptionsVehiculo: Partial<ChartOptions>;
  public listChartOptions: Array<Partial<ChartOptions>>;
  public chartOptionsApi: Partial<ChartOptions>;

  constructor(private _statusApiService: StatusApiService) {}

  ngOnInit(): void {
    this.listStatus = new Map<number, number[]>();
    this.listLatencia = new Map<number, number[]>();
      this.pollData();
    this.initDatos();
  }

  initDatos() {
    this.listChartOptions = [];

    DataApis.slice(0, 5).forEach((element) => {
      this.chartOptionsApi = {
        series: [
          {
            name: "% Tempo de repuesta",
            data: this.listLatencia.get(element.id),
          },
          {
            name: "% Latencia",
            data: this.listStatus.get(element.id),
          },
        ],
        title: {
          text: "Dashboard and API",
          align: "right",
        },
        subtitle: {
          text: element.name,
          align: "right",
        },
        chart: {
          type: "bar",
          height: 150,
          stacked: true,
          stackType: "100%",
          toolbar: {
            show: false,
          },
        },
        colors: [element.color, "#FF4560"],
        dataLabels: {
          enabled: false,
        },
        fill: {
          opacity: 1,
        },
        xaxis: {
          position: "top",
          labels: {
            offsetY: -18,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },

          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
          title: {
            text: "Tempos Ms",
          },
        },
      };

      this.listChartOptions.push(this.chartOptionsApi);
    });
  }
  ngOnDestroy() {
    clearInterval(this.polling);
  }

  pollData() {
    this.polling = setInterval(() => {
      DataApis.slice(0, 5).forEach((el) => {
        /* if (this.listStatus[el.id].length > 60) {
          this.listStatus= new Map<number, number[]>();
    this.listLatencia= new Map<number, number[]>();
        }*/
        let mlistStatus = this.listStatus.get(el.id) || [];
        let mlistLatencia = this.listLatencia.get(el.id) || [];

        try {
          const payload = {
            url: el.url,
            params: {
              documentType: "CC",
              documentNumber: "15171399",
            },
          };
          //  console.log( this._statusApiService);
          let startFrom = new Date().getTime();

          this._statusApiService.get(payload).subscribe(
            (response) => {
              console.log(response);
              let timer = new Date().getTime() - startFrom;
              console.log(timer, " ms");
              let porcentaje = Math.floor((timer * 100) / 500);
              mlistStatus.push(porcentaje);
              this.listStatus.set(el.id, mlistStatus);
              mlistLatencia.push(Math.floor(100 - porcentaje));
              this.listLatencia.set(el.id, mlistLatencia);
            },
            (error) => {
              console.log(error);
              let timer = new Date().getTime() - startFrom;
              console.log(timer, " ms");
              let porcentaje = Math.floor((timer * 100) / 500);
              mlistStatus.push(porcentaje);
              this.listStatus.set(el.id, mlistStatus);
              mlistLatencia.push(Math.floor(100 - porcentaje));
              this.listLatencia.set(el.id, mlistLatencia);
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
      this.initDatos();
    }, this.timerEven);
  }
}
