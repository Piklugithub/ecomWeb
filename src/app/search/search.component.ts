import { Component } from '@angular/core';
import {ActivatedRoute}from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchResult:undefined|product[];
  constructor(private activatedRoute:ActivatedRoute,private product:ProductService){}
  ngOnInit():void{
    let query=this.activatedRoute.snapshot.paramMap.get('query');
    query && this.product.searchProduct(query).subscribe((result)=>{
      this.searchResult=result;
    })
  }

}
