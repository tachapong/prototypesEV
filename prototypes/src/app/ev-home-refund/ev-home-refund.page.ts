import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-home-refund',
  templateUrl: './ev-home-refund.page.html',
  styleUrls: ['./ev-home-refund.page.scss'],
})
export class EvHomeRefundPage implements OnInit {

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
