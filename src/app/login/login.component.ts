import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = new User();

  constructor(private loginService: LoginService,private router: Router){
    
  }
  ngOnInit() {
   
  }

  showProfile(): void {
    this.router.navigateByUrl('/employee');
  }

  login(login: NgForm){
    console.log(this.user);
      if(login.valid){
          this.loginService.login(this.user)
                            .subscribe( data => {
                                console.log(data);
                               if(data.error == 'invalid_grant'){
                                 alert('Incorrect username or password');
                                 return;
                               }
                                this.loginService.token = data?.access_token;
                               // this.getEmployees();
                               this.router.navigateByUrl('/employee');
                            });
      }else{
        login.controls['username'].markAsTouched();
        login.controls['username'].markAsDirty();
        login.controls['password'].markAsTouched();
        login.controls['password'].markAsDirty();
      }
  }

  
}
