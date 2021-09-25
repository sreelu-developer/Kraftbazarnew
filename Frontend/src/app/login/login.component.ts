import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    user:"",
    pwd:"",
    avatar:""
  };

  constructor(private _auth:AuthService, private _router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    // establishing connection to the service
    this._auth.loginUser(this.user)
    .subscribe(
      res=>{
        localStorage.setItem('token',res.token)
        this._router.navigate(['/'])
      }
    )

  }

}
