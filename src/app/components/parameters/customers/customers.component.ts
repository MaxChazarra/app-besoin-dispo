import { Component, OnInit, Host } from '@angular/core';
import { ParametersComponent } from '../parameters.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor(@Host() public parent: ParametersComponent) {
    console.log(parent.parent);
  }

  ngOnInit() {
  }

}
