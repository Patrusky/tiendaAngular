import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  activeDescription = false;


  @Input() product: Product = {
    id: 0,
    title: '',
    price: 0,
    image: '',
    category: '',
    description: ''
  };

  @Output() addedProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<Product>();
  ngOnInit(): void {

  }
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

  deleteToCart(){
    this.deleteProduct.emit(this.product);
  }

  toggleDescription() {
    this.activeDescription = !this.activeDescription;
  }
}
