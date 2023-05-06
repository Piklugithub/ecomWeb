import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMsg:string|undefined;

  constructor(private product:ProductService){}
  addproduct(data:product){
    console.warn(data)
    this.product.addProduct(data).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.addProductMsg="Product Successfully Added"
      }
      setTimeout(()=>(this.addProductMsg=undefined),3000)
    })

  }

}
