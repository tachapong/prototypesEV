import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-home-pay',
  templateUrl: './ev-home-pay.page.html',
  styleUrls: ['./ev-home-pay.page.scss'],
})
export class EvHomePayPage implements OnInit {
  public slideOpts = {
    zoom: false,
    slidesPerView: 4,
    spaceBetween: 5,
    centeredSlides: false,
    autoplay: false,
    loop: false,
    freeMode: true
  };
  
  constructor() { }

  ngOnInit() {
  }

}
