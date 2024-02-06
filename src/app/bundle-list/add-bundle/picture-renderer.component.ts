import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  template: `
    <div class="product-selector">
      <div class="image-placeholder">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
        <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
        <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
      </svg>
      </div>
      <button class="select-button" (click)="selectProduct()">
        Tap to select a product from inventory
      </button>
    </div>
  `,
  styles: `
  .product-selector {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 5px;
  border: 1px solid #ddd;
  margin-top: 2px;
}

.image-placeholder {
  width: 67px; 
  height: 30px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
}

.select-button {
  background-color: #fff;
  border: none;
  padding: 0px 0px;
  cursor: pointer;
  text-align: center;
}

.select-button:hover {
  background-color: #f8f8f8; /* Slight change for hover effect */
}

  `,
})
export class PictureRendererComponent implements ICellRendererAngularComp {
  params: any;
  rowData: any;

  agInit(params: any): void {
    this.params = params;
    this.rowData = params.data;
  }

  selectProduct() {
    console.log("Product select button clicked");
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick() {
    if (this.params.onClick instanceof Function) {
      this.params.onClick(this.rowData);
    }
  }
}
