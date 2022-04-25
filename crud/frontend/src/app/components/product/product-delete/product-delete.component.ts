import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../produtc.model';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id=+this.route.snapshot.paramMap.get('id')//o simbolo de + transfora string em numero
    this.productService.readById(id).subscribe(product => {
      this.product= product
    })
  }
  deleteProduct():void{
    this.productService.delete(this.product.id).subscribe(product=>this.product=product)
    this.productService.showMessage('Produto EXCLUÍDO')
    this.router.navigate(['/products'])
  }
  cancel(): void{
    this.router.navigate(['/products'])
  }
}
