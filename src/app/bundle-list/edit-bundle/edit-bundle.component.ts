import { Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PictureRendererComponent } from './picture-renderer.component';
import { MockDataService } from '../../mock-data.service';
import { bundle } from '../bundles';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-bundle',
  templateUrl: './edit-bundle.component.html',
  styleUrl: './edit-bundle.component.css',
})
export class EditBundleComponent implements OnInit {
  @ViewChild('modalContent') modalContent!: TemplateRef<any>;
  constructor(public dataService: MockDataService,public dialog: MatDialog) {}

  bundleData: any = {};

  tableData: any;


  ngOnInit() {
    this.bundleData = this.dataService.getBundleData();
    // console.log('oninit', this.bundleData);

    bundle?.forEach(
      (element: {
        productCode: any;
        quantity: any;
        wholesalePrice: any;
        retailPrice: any;
        totalPrice: any;
        margin: any;
        name: any;
      }) => {
        this.gridRowDataAddBundle.push({
          product: element.name,
          sku: element.productCode,
          quantity: element.quantity,
          wholesalePrice: element.wholesalePrice,
          retailPrice: element.retailPrice,
          totalPrice: element.totalPrice,
          margin: element.margin,
        });
      }
    );
    console.log(this.gridRowDataAddBundle,'gridRowDataAddBundle');
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(this.modalContent, {
      width: '600px', // Adjust the width to match your design
      panelClass: 'custom-dialog', // This is your custom class for the dialog panel
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  @ViewChild('f')
  form!: NgForm;
  drivers: any;
  isLoading: any;
  cancel() {}
  formState: any;
  isActive: boolean = true;
  gridColumnDefsAddBundle: any = [
    {
      headerName: 'Product',
      field: 'product',
      width: 400,
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

  onGridReady(params: any) {}


  gridRowDataAddBundle = [{
    product: "Cottage Delight Classic Piccalilli Pickle 280g",
    sku: 250024,
    quantity: 12,
    wholesalePrice: 220,
    retailPrice: 250,
    totalPrice: 300,
    margin: "5%"
  },
  {
    product: "Goldenfry Yorkshire Pudding & Pancake Mix (142g)",
    sku: 250025,
    quantity: 32,
    wholesalePrice: 320,
    retailPrice: 350,
    totalPrice: 300,
    margin: "5%"
    },
    {
      product: "Haywards Silverskin Onions (400g)g",
      sku: 250026,
      quantity: 42,
      wholesalePrice: 420,
      retailPrice: 450,
      totalPrice: 300,
      margin: "5%"
    },
    {
      product: "Baileys (UK) Chocolate Luxe 9 Mini Easter Eggs, 138g",
      sku: 250027,
      quantity: 52,
      wholesalePrice: 520,
      retailPrice: 550,
      totalPrice: 300,
      margin: "5%"
    }];


}
