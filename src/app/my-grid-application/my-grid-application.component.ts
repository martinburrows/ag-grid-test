import { Component, ViewChild } from "@angular/core";

import { Grid, GridOptions, ICellRenderer, GroupCellRenderer, RowNode, Utils, RefSelector, ColDef } from "ag-grid/main";

import {ViewportDataService} from './viewport-data.service';
import { RenderedGroup } from "ag-grid-enterprise/main";
import { GroupCellRendererParams } from "ag-grid/dist/lib/rendering/cellRenderers/groupCellRenderer";
import { AgGridNg2 } from "ag-grid-angular/main";

import {RowGroupCellRenderer} from './row-group-cell-renderer';

let document:any;

@Component({
    selector: 'app-my-grid-application',
    templateUrl: './my-grid-application.component.html'
})
export class MyGridApplicationComponent {
    gridOptions: GridOptions;
    columnDefs: any[]
    rowData: any[];
    @ViewChild('grid') grid:AgGridNg2;

    constructor(private viewportService:ViewportDataService) {
        this.gridOptions = <GridOptions>{
            rowModelType:'viewport',
            viewportDatasource: viewportService
        };

        this.columnDefs = <ColDef[]>[
            {
                headerName: '', 
                field: 'rowLabel',
                cellRenderer: RowGroupCellRenderer,
            },
            {
                headerName: 'Total', 
                field: 'data.total'
            }
        ];
    }

    onGridReady(params) {
        params.api.sizeColumnsToFit();
    }

    selectAllRows() {
        this.gridOptions.api.selectAll();
    }
}

