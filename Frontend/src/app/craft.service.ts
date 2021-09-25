import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CraftService {

  constructor(public http: HttpClient) {}

  getCrafts() {
    return this.http.get('http://localhost:5555/crafts');
  }
  getCraft(id: any) {
    return this.http.get('http://localhost:5555/craft/' + id);
  }
  delCraft(id: any) {
    return this.http.delete('http://localhost:5555/deletecraft/' + id);
  }
}
