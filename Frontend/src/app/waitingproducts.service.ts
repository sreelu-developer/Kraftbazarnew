import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WaitingproductsService {

  constructor( private http:HttpClient) { }
  getProducts() {
    return this.http.get('http://localhost:3000/validate/verify');
  }

  getProduct(id:any){
    return this.http.post<any>('http://localhost:3000/validate/product', {"id":id});
  }

  deleteProduct(id: any) {
    return this.http.delete('http://localhost:3000/delete/'+id);
  }

  approveProduct(id: any){
    return this.http.delete('http://localhost:3000/approve/'+id);
  }
}
