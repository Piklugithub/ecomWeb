import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import{Router} from '@angular/router'
import { login, SingUp } from '../data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  constructor(private seller:SellerService,private router:Router){}
 showLogin = false;
 authError:string = '';
  ngOnInit(){
    this.seller.reloadSeller()
  }
  signUp(data:SingUp):void
  {
    
    this.seller.userSingUp(data)

  }
  LogIn(data:SingUp):void
  {
    this.authError='';
    // this.seller.userSingUp(data)
    // console.warn(data);
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError)=>{
      if(isError){
        this.authError = "Email or Password Invalid";
      }

    })

  }
  openLogin(){
    this.showLogin=true;

  }
  openSingup(){
    this.showLogin=false;
  }
}
