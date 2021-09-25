import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
addproduct={
    pname : "",
    sname : "",
    material: "",
    image : "",
    disc : ""

}
  constructor(private dataservice:DataserviceService , private router:Router) { }

  ngOnInit(): void {
  }
  addpro(){
    this.dataservice.addp(this.addproduct).subscribe((data)=>{
      console.log('data');
      
    })
  }
}
