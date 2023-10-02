import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample_app';
  rowData: any[] =[
    {make:'Toyota','model':'Celice','price':'45000'},
    {make:'BMW','model':'X1','price':'55000'},
    {make:'Audi','model':'Q3','price':'50000'},
  ];

  colDefs: ColDef[]=[
    {field: 'make'},
    {field: 'model'},
    {field: 'price'}
  ];

  defaultColDef: ColDef ={
    sortable: true, filter: true
  }
}
