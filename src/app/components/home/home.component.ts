import { Component, OnInit, NgZone } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = `App works !`;
  markets = <any>[];

  // PolarArea
  public polarAreaChartLabels:string[] = ['PM', 'BA', 'SB', 'ARC', 'CONSEIL'];
  public polarAreaChartData:number[] = [4, 8, 27, 3, 5];
  public polarAreaLegend:boolean = true;
  public polarAreaColor:Array<any> = [
    {
      backgroundColor: ['rgba(213,0,0 ,1)','rgba(98,0,234 ,1)','rgba(0,145,234 ,1)','rgba(139,195,74,1)','rgba(255,193,7,1)']
    }];
  public polarAreaChartType:string = 'polarArea';

  // Bar Chart
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = this.markets.map(a => a.name);
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartColor:Array<any> = [
    {
      backgroundColor: ['rgba(213,0,0 ,1)','rgba(213,0,0 ,1)','rgba(213,0,0 ,1)']
    },
    {
      backgroundColor: ['rgba(0,145,234 ,1)','rgba(0,145,234 ,1)','rgba(0,145,234 ,1)']
    }];

  public barChartData:any[] = [
    {data: [32, 45, 15], label: 'Besoins'},
    {data: [7, 10, 3], label: 'Pistes'}
  ];

  constructor(public electronService: ElectronService, private ngZone: NgZone) {
    this.electronService.ipcRenderer.on('getData', (event, arg) => {
        this.ngZone.run(() => {
          this.markets = arg;
          this.barChartLabels = this.markets.map(a => a.name);
        })
    });

    this.sendData();
  }

  ngOnInit() {}

  sendData(){
    this.electronService.ipcRenderer.send('getData');
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

}
