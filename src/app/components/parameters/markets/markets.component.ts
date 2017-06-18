import { Component, OnInit, Host } from '@angular/core';
import { ParametersComponent } from '../parameters.component';

@Component({
  selector: 'app-markets',
  templateUrl: './markets.component.html',
  styleUrls: ['./markets.component.scss']
})
export class MarketsComponent implements OnInit {

  market = <any>{};

  constructor(@Host() public parent: ParametersComponent) { }

  ngOnInit() {
  }

  getMarkets(){
    return this.parent.parent.markets;
  }

  selectMarket(marketToSelect){
    this.market = marketToSelect;
  }

  editMarket(marketToEdit){
    console.log(marketToEdit);
  }

}
