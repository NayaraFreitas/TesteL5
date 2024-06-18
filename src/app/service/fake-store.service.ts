import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Products } from '../model/products';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FakeStoreService {
  private fakeApi:string =''

  constructor(private http:HttpClient){
    this.fakeApi = environment.fakeApi
  }

  getProduct(products:string):Observable<Products>{
    return this.http.get<Products>(`${this.fakeApi}${products}`)
  }

}
