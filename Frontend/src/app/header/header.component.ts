import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router:Router, public _auth:AuthService) { }
  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['login'])
  }

  ngOnInit(): void {
  }

}
