import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit {

  @Input() img: string = '';
  imgDefault = '../../../assets/img/placeholder-image.jpg'

  @Output() loaded = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  imgError(){
    this.img = this.imgDefault;
  }
  imgLoaded(){
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
