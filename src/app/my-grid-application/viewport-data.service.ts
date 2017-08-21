import { Injectable } from '@angular/core';
import { IViewportDatasource, IViewportDatasourceParams, RowNode } from "ag-grid/main";
import { RowData, IRowData } from './row-data';

@Injectable()
export class ViewportDataService implements IViewportDatasource  {
  private firstRow: number;
  private lastRow: number;
  
  private params: IViewportDatasourceParams;

  private rowDataArray:RowData[];

  constructor() { 
    this.rowDataArray = [
      this.createRowData({
        rowNumber: 0, 
        level: 0, 
        rowLabel: 'Jack',
        data: {
          total: 1000
        },
        expanded: true,
        hasChildren: true,
        visible: true
      }),
      this.createRowData({
        rowNumber: 1, 
        level: 1,
        rowLabel: 'Nationbank',
        data: { 
          total: 500
        },
        expanded: true,
        hasChildren: true,
        parent: 0,
        visible: true
      }),
      this.createRowData({
        rowNumber:2, 
        level: 2,
        rowLabel: 'Current Account',
        data: {
          total: 400
        },
        parent: 1,
        visible: true
      }),
      this.createRowData({
        rowNumber: 3, 
        level: 2, 
        rowLabel: 'ISA', 
        data: { 
          total: 100
        },
        parent: 1,
        visible: true
      }),
      this.createRowData({
        rowNumber: 4, 
        level: 0,
        rowLabel: 'Jill',
        data: {
          total: 0
        },
        visible: true
      })
    ];
  }

  createRowData(properties:IRowData):RowData { 
    let rowData = new RowData(this);
    
    Object.assign(rowData, properties);

    return rowData;
  }

  init(params: IViewportDatasourceParams): void {
    this.params = params;

    // this would be a call to the backend
    setTimeout(() => {
      params.setRowCount(this.rowDataArray.length);
    },100);
  }

  setViewportRange(firstRow: number, lastRow: number): void {
    console.log('setViewportRange', firstRow, lastRow);
    this.firstRow = firstRow;
    this.lastRow = lastRow;
    
    if (firstRow === 0 && lastRow === 0) {
      // app is starting up.
    }
    else { 
      this.refreshData();
    }
  }

  //TODO: fix double call to refreshData on expand/collapse
  refreshData() { 
    let visibleRows = this.rowDataArray.filter(r => r.visible);

    // this would be a call to the backend
    setTimeout(() => {
      let rowsForGrid = {};
      let rowsForGridIndex:number= 0;

      visibleRows.forEach(r => {
        rowsForGrid[rowsForGridIndex++] = r
      });

      console.log(`Setting data for ${visibleRows.length} rows`, visibleRows);
      this.params.setRowCount(visibleRows.length);
      this.params.setRowData(rowsForGrid);
    }, 100);
  }

  public onRowExpandToggled(toggledRow:IRowData) {

    // this would all happen on the backend
    setTimeout(() => {
      let childRowsAllowed = toggledRow.expanded;
      let parents = [toggledRow.rowNumber];

      for (var i = 0; i < this.rowDataArray.length; i++) { 

        let row:IRowData = this.rowDataArray[i];
        
        let isRowUnaffected = parents.every(parentRowNumber => {

          let isMatch:boolean = parentRowNumber === row.parent;
          return !isMatch;
        });

        if (!isRowUnaffected)  {
          row.visible = childRowsAllowed;
          parents.push(row.rowNumber);
        }
      }
      this.refreshData();
    },0);
  }

  destroy?(): void {
    
  }
}

