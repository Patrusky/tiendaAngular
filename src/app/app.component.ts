import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '../assets/img/bici1.jpg';
  showImg = true;



  onLoaded(img: string){
    console.log('log padre', img);
  }
  toggleImg(){
    this.showImg = !this.showImg;
  }
}
