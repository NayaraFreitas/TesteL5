import { Component, OnInit } from '@angular/core';
import { Products } from '../../model/products';
import { FakeStoreService } from '../../service/fake-store.service';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  public products?:Products | any


  constructor(private service:FakeStoreService){
  }

  ngOnInit(): void {
    this.getProduct('')
  }

  getProduct(searchTitle:string){
    this.service.getProduct(searchTitle).subscribe(
      {
        next: (res) => {
          this.products ={
            id: res.id,
            title: res.title,
            price: res.price,
            description: res.description,
            category: res.category
          }
          console.log(res);
          // console.log(this.products)
        },
        error: (err) => console.log('Not Found')
      })
  }

}
