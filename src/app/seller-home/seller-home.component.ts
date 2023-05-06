import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {faTrash,faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productList: undefined | product[]
  productMsg:undefined|string
  icon=faTrash;
  editIcon=faEdit;
  constructor(private product:ProductService){}

  ngOnInit():void{
    this.list();
  }
  deleteProduct(id:number){
    console.warn("Id",id);
    this.product.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.productMsg="Product is deleted";
        this.list();
      }
    })
    setTimeout(()=>
    {
      this.productMsg=undefined;
    },3000);
  }

  list(){
    this.product.productList().subscribe((result)=>{
      console.warn(result);
      this.productList=result;
    })
  }

}
