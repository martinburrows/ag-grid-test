import {ViewportDataService} from './viewport-data.service';

export interface IRowData {
    rowNumber:number,
    level: number,
    data: any,
    rowLabel:any,
    rowLabelSourceColumn?:any,
    expanded?: boolean, 
    hasChildren?: boolean,
    visible?: boolean,
    parent?: number
  }
  
  export class RowData implements IRowData {  
    constructor(private viewportDataService:ViewportDataService) { 
  
    }
  
    public toggleExpanded(expanded:boolean) { 
      this.expanded = !this.expanded;
      this.viewportDataService.onRowExpandToggled(this);
    }
  
    public rowNumber:number;
    public level: number;
    public rowLabel:any;
    public data: any;
    public expanded?: boolean;
    public hasChildren?: boolean;
    public visible?: boolean;
    public parent?: number;
  }
  