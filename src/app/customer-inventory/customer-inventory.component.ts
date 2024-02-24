import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import { Component } from '@angular/core';
import { FormsModule, RadioControlValueAccessor } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { getData } from './data';
import { PartialMatchFilter } from './partial-match-filter.component';
import { RadioFilter } from './radio-filter.component';



@Component({
  selector: 'app-customer-inventory',
  standalone: true,
  imports: [AgGridAngular, FormsModule, PartialMatchFilter,RadioFilter],
  templateUrl: './customer-inventory.component.html',
  styleUrl: './customer-inventory.component.less'
})
export class CustomerInventoryComponent {

  private gridApi!: GridApi;

  public columnDefs: ColDef[] = [
    { field: 'year',
    filter: RadioFilter },
    {
      field: 'name',
      filter: PartialMatchFilter,
    },
  ];
  public defaultColDef: ColDef = {
    editable: true,
    flex: 1,
    minWidth: 100,
    filter: true,
  };
  public rowData: any[] | null = getData();
  public themeClass: string =
    "ag-theme-quartz";
frameworkComponents: any;

  onClicked() {
    this.gridApi
      .getColumnFilterInstance<PartialMatchFilter>('name')
      .then((instance) => {
        instance!.componentMethod('Hello World!');
      });
  }
  

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
}