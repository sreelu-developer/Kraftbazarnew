import { Component, OnInit } from '@angular/core';
import { WaitingproductsService } from '../waitingproducts.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsModel } from '../validateproducts/products.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-verifyproduct',
  templateUrl: './verifyproduct.component.html',
  styleUrls: ['./verifyproduct.component.css']
})
export class VerifyproductComponent implements OnInit {

  constructor(private wating:WaitingproductsService, private activatedRoute:ActivatedRoute, private router:Router, public _auth:AuthService ) { }
  

  products = [{
       _id: "",
        pname: "",
         sname: "",
        material: "",
         image: "",
         disc:""
  }]
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.wating.getProduct(params.id).subscribe(data=>{
        this.wait=data
      })
    })
  }
  wait:ProductsModel;

  approveProduct(wait:any){
    this.wating.approveProduct(wait._id)
    .subscribe((data)=>{
      this.products = this.products.filter(p => p !== wait);
      this.router.navigate(['/validate']);

    })
  }

  deleteProduct(wait:any)
  {
    this.wating.deleteProduct(wait._id)
      .subscribe((data) => {
        this.products = this.products.filter(p => p !== wait);
        this.router.navigate(['/validate']);
      })
  

  }

  

}
