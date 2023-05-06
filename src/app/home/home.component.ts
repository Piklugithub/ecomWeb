import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 popularProduct:undefined|product[];
 trandyProducts:undefined|product[];
 constructor(private product:ProductService){}

 ngOnInit():void{
  this.product.popularProducts().subscribe((data)=>{
    console.warn(data);
    this.popularProduct= data;
  });
  this.product.trandyProducts().subscribe((data)=>{
    this.trandyProducts=data;
  })
 }
}
