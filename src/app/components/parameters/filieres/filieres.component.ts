import { Component, OnInit, Host } from '@angular/core';
import { ParametersComponent } from '../parameters.component';

@Component({
  selector: 'app-filieres',
  templateUrl: './filieres.component.html',
  styleUrls: ['./filieres.component.scss']
})
export class FilieresComponent implements OnInit {

  constructor(@Host() public parent: ParametersComponent) { }

  ngOnInit() {
  }

}
