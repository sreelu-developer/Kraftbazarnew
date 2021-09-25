import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserModel } from './user.model';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  

  constructor(private authService:AuthService, private router:Router) {}
  userItem = new UserModel("","","","","");

  ngOnInit(): void {
  }
  addUser() {
   
    this.authService.newUser(this.userItem);
    alert("Success");
    this.router.navigate(['/login']);
  
  

}

}
