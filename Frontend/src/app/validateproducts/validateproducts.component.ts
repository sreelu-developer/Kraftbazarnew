import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductsModel } from './products.model';
import { WaitingproductsService } from '../waitingproducts.service';

@Component({
  selector: 'app-validateproducts',
  templateUrl: './validateproducts.component.html',
  styleUrls: ['./validateproducts.component.css']
})
export class ValidateproductsComponent implements OnInit {
  httpdata;
  products:ProductsModel[]=[];

  // constructor(public http:HttpClient) { }

  // ngOnInit(): void {
  //   this.http.get("http://localhost:5555/validate")
  //   .subscribe((waitings)=>{
  //     this.httpdata=waitings;
  //     console.log(this.httpdata)
  // products:ProductsModel[]=[];

  constructor(public http:HttpClient, private router:Router, private waiting:WaitingproductsService) { }

  ngOnInit(): void {
    this.waiting.getProducts().subscribe(data => {
      this.products=JSON.parse(JSON.stringify(data));
      this.http.get("http://localhost:3000/validate")
    .subscribe((waitings)=>{
      this.httpdata=waitings;
      console.log(this.httpdata)})
     

    });

  }
}
