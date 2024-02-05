import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PictureRendererComponent } from './picture-renderer.component';
@Component({
  selector: 'app-add-bundle',
  templateUrl: './add-bundle.component.html',
  styleUrl: './add-bundle.component.css',
})
export class AddBundleComponent {
  @ViewChild('f')
  form!: NgForm;
  drivers: any;
  isLoading: any;
  cancel() {}
  formState: any;
  isActive: boolean = true;
  onGridReady(params: any) {}
  gridColumnDefsAddBundle: any = [
    {
      headerName: 'Product',
      field: 'product',
      width: 400,
      cellRendererFramework: PictureRendererComponent,
      cellRendererParams: {
        onClick : this.onGridClick(this)
      },
    },
    {
      headerName: 'SKU',
      field: 'sku',
      width: 150,
    },
    {
      headerName: 'Quantity',
      field: 'quantity',
      width: 150,
    },
    {
      headerName: 'Wholesale Price',
      field: 'wholesalePrice',
      width: 150,
    },
    {
      headerName: 'Retail Price',
      field: 'retailPrice',
      width: 150,
    },
    {
      headerName: 'Total Price',
      field: 'totalPrice',
      width: 150,
    },
    {
      headerName: 'Margin',
      field: 'margin',
      width: 150,
    },
  ];
  gridRowDataAddBundle = [{
    product: "Add",
    sku: 1,
    quantity: 10,
    wholesalePrice: 220,
    retailPrice: 250,
    totalPrice: 300,
    margin: "5%"

  }];

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted!', this.form.value);
      // Here you can also call a service to send the form data to a server
      // this.someService.sendData(this.form.value).subscribe(...);
    }
  }

  onGridClick(data : any) { }
}
