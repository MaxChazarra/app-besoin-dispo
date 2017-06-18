import { Component, OnInit, Host } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  constructor(@Host() public parent: AppComponent) { }

  ngOnInit() {
  }

}
