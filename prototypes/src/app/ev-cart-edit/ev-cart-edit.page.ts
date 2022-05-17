import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-cart-edit',
  templateUrl: './ev-cart-edit.page.html',
  styleUrls: ['./ev-cart-edit.page.scss'],
})
export class EvCartEditPage implements OnInit {
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
