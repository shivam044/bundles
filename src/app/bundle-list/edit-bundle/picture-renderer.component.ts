import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  template: `
    <div >
    <button (click)="onClick()">
      Tap to Select a product from inventory
    </button>
    </div>
  `,
})
export class PictureRendererComponent implements ICellRendererAngularComp {
  params: any;
  rowData: any;

  agInit(params :any): void {
    this.params = params;
    this.rowData = params.data;
  }

  refresh(params? :any): boolean {
    return true;
  }

  onClick() {
    if (this.params.onClick instanceof Function) {
      this.params.onClick(this.rowData);
    }
  }
}
