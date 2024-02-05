import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {
  wholesalePrice: any;
  bundleId: any;
  bundleName: any;
  bundlePrice: number = 0;
  active: any;
  retailPrice: any;
  currency: any;
  margin: any;
  quantity: any;
  note: any;
  tags: any;
  category: any;
  description: any;
  productCode: any;

  constructor() { }

  setBundleData(bundle: any) {
    this.bundleId = bundle.id;
    this.bundleName = bundle.name;
    this.bundlePrice = bundle.price;
    this.active = bundle.active;
    this.wholesalePrice = bundle.wholesalePrice;
    this.retailPrice = bundle.retailPrice;
    this.currency = bundle.currency;
    this.margin = bundle.margin;
    this.quantity = bundle.quantity;
    this.note = bundle.note;
    this.tags = bundle.tags;
    this.category = bundle.category;
    this.description = bundle.description;
    this.productCode = bundle.productCode;




    console.log('setData', this.bundleId ,
    this.bundleName ,
    this.bundlePrice ,this.productCode,
    this.active, this.wholesalePrice, this.retailPrice, this.currency, this.margin,
    this.quantity,this.note,this.tags,this.category,this.description
    );
  }

  getBundleData() {
    console.log('setData', this.bundleId ,
    this.bundleName ,
    this.bundlePrice , this.productCode,
    this.active, this.wholesalePrice, this.retailPrice, this.currency, this.margin,
    this.quantity,this.note,this.tags,this.category,this.description
    );

    return {
      id: this.bundleId,
      name: this.bundleName,
      price: this.bundlePrice,
      active: this.bundlePrice
    }
  }

}
