import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { StocksComponent } from './stocks/stocks.component';
import { CryptoComponent } from './crypto/crypto.component';
import { OverallComponent } from './overall/overall.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    StocksComponent,
    CryptoComponent,
    OverallComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents(null)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
