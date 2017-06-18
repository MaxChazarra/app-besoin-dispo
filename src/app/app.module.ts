import 'zone.js';
import 'reflect-metadata';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ParametersComponent } from './components/parameters/parameters.component';
import { MarketsComponent } from './components/parameters/markets/markets.component';
import { CustomersComponent } from './components/parameters/customers/customers.component';
import { FilieresComponent } from './components/parameters/filieres/filieres.component';
import { NeedsComponent } from './components/needs/needs.component';
import { AvailabilitiesComponent } from './components/availabilities/availabilities.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParametersComponent,
    MarketsComponent,
    CustomersComponent,
    FilieresComponent,
    NeedsComponent,
    AvailabilitiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
