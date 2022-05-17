import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;

  @Output() filter = new EventEmitter<string[]>();

  constructor(
    private storeService: StoreService,

  ) { }

  ngOnInit(): void {
    this.storeService.myCard$.subscribe(products => {
      this.counter = products.length;
    })
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }

  enlace(category: string[]){
    this.filter.emit(category)
  }
}
