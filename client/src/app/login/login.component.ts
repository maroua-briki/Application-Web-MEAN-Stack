import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/shared/services/user.service';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]

})
export class LoginComponent implements OnInit {
  loginForm:FormGroup ;
  submitted=false;
  serverErrorMessages: string;


  constructor(private _router:Router, private _formBilder:FormBuilder,private _userService:UserService) { 
    this.loginForm=this._formBilder.group({
      'email':['',[Validators.required,Validators.email,Validators.pattern]],
      'password':['',[Validators.minLength(8), Validators.maxLength(30)]],
       
    });
   }
   get f(){return this.loginForm.controls;}


  ngOnInit() {
    
  }
  moveToRegister(){
    this._router.navigate(['/register']);
  }

  onSubmit(email,password){
    this.submitted=true;
    this._userService.login(email,password).subscribe(
       res => {console.log('j ai depassé subscribe');
       this._userService.setToken(res['token']);
       console.log(this._userService.getToken());
               this._router.navigateByUrl('/home');
       },
       err => { this.serverErrorMessages = err.error.message;
        console.log(this.serverErrorMessages);
       }
      );
  
     
   }
 

}
