import { Component, OnInit } from '@angular/core';
import { WaitingproductsService } from '../waitingproducts.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsModel } from '../validateproducts/products.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  upproduct={
    _id : "",
    pname : "",
    sname : "",
    material: "",
    image : "",
    disc : ""

}
constructor(private dataservice:DataserviceService,private wating:WaitingproductsService, private activatedRoute:ActivatedRoute, private router:Router, public _auth:AuthService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.wating.getProduct(params.id).subscribe(data=>{
        this.wait=data
        this.upproduct={
          _id : data._id,
          pname : data.pname,
          sname : data.sname,
          material: data.material,
          image : data.image,
          disc : data.disc,
        
      }
      })
    })
  }
  wait:ProductsModel;

uppro(){
  this.dataservice.upp(this.upproduct).subscribe((data)=>{
    console.log('data')
  })
  console.log("uppro")
}
}