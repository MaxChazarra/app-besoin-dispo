import { HomeComponent } from './components/home/home.component';
import { NeedsComponent } from './components/needs/needs.component';
import { AvailabilitiesComponent } from './components/availabilities/availabilities.component';
import { ParametersComponent } from './components/parameters/parameters.component';
import { MarketsComponent } from './components/parameters/markets/markets.component';
import { CustomersComponent } from './components/parameters/customers/customers.component';
import { FilieresComponent } from './components/parameters/filieres/filieres.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'needs',
        component: NeedsComponent
    },
    {
        path: 'availabilities',
        component: AvailabilitiesComponent
    },
    {
        path: 'parameters',
        component: ParametersComponent,
        children: [
          {
            path: '',
            redirectTo: 'markets',
            pathMatch: 'full'
          },
          {
            path: 'markets',
            component: MarketsComponent
          },
          {
            path: 'customers',
            component: CustomersComponent
          },
          {
            path: 'filieres',
            component: FilieresComponent
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
