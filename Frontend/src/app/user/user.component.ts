import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  httpdata;

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    // response is an array
    this.http.get("http://localhost:3000/user")
    .subscribe((users)=>{
      this.httpdata=users;
      console.log(this.httpdata)

    })

  }

}
