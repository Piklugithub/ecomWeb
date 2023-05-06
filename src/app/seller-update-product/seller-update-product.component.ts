import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
 constructor(private route:ActivatedRoute,private product:ProductService){}
productData:undefined | product;
updatemsg:undefined|string;
 ngOnInit():void{
  let productId =  this.route.snapshot.paramMap.get('id');
  console.warn(productId)
  productId && this.product.getProduct(productId).subscribe((data)=>{
    this.productData =  data;
  })
 }
  updateproduct(data:any){
    console.warn(data);
    if(this.productData){
      data.id=this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result)=>{
      if(result){
        this.updatemsg="Update Product's Details";
      }
    });
    setTimeout(()=>{
      this.updatemsg=undefined;
    },3000);
  }

}
