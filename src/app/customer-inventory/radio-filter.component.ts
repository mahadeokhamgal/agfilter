import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IFilterAngularComp } from 'ag-grid-angular';
import { IDoesFilterPassParams, IFilterParams } from 'ag-grid-community';

@Component({
 selector:'./radio-filter.component',
  standalone: true,
  imports: [FormsModule],
  templateUrl:'./radio-filter.Component.html',
})  
export class RadioFilter implements IFilterAngularComp {
  params!: IFilterParams;
  year = 'All';
  years: any[] = ["2010", "2013"];
  isFilterActiveBool:boolean = false;

  agInit(params: IFilterParams): void {
    this.params = params;
    console.log("aginit");
    
  }

  isFilterActive(): boolean {
    /**
     * Return true if the filter is active. If active then 1) the grid will show the filter icon in the column
     * header and 2) the filter will be included in the filtering of the data.
     */
    return this.year === this.year;
  }

  doesFilterPass(params: IDoesFilterPassParams): boolean {
    console.log("params are", params);
    
    /**
     * The grid will ask each active filter, in turn, whether each row in the grid passes. If any
     * filter fails, then the row will be excluded from the final set. A params object is suppliedcontaining attributes of node (the rowNode the grid creates that wraps the data) and data (the data
     * object that you provided to the grid for that row).
     */
    
    return params.data.year == this.year;
  }

  getModel() {}

  setModel(model: any) {}

  updateFilter() {
    this.params.filterChangedCallback();
  }

  filteStatusChange(){
    this.isFilterActiveBool = !this.isFilterActiveBool;
  }
}
