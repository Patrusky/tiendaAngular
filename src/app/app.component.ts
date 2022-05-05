import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  imgParent = '../assets/img/bici1.jpg';

  onLoaded(img: string){
    console.log('log padre', img);
  }
}
