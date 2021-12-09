import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  columnDefs = [
    { headerName: 'Ticker', field: 'ticker', editable: true },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Quantity', field: 'quantity', editable: true  },
    { headerName: 'Price', field: 'price' },
    { headerName: 'Total Value', field: 'total_value' }
  ];

  rowData = [
    { ticker: 'VWRL', name: 'VWRL', quantity: 36.203764, price: 92.87, total_value: 10000},
  ];

  constructor() { }

  ngOnInit(): void {
    this.rowData.forEach((element) => {
      element.total_value = element.quantity * element.price;
    })
  }

}
