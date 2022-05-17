import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '../assets/img/bici1.jpg';
  showImg = true;
  category: string[]  = [];


  onLoaded(img: string){
    console.log('log padre', img);
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }
  getCategory(category: string[]){
    this.category = category;
  }
}
