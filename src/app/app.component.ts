import { Component, NgZone } from '@angular/core';
import { ElectronService } from './providers/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  markets = <any>[];

  constructor(public electronService: ElectronService, private ngZone: NgZone) {
    this.electronService.ipcRenderer.on('getData', (event, arg) => {
        this.ngZone.run(() => {
          this.markets = arg;
        })
    });

    this.sendData();
  }

  ngOnInit() {}

  sendData(){
    this.electronService.ipcRenderer.send('getData');
  }

}
