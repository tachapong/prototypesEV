import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ev-home-comfirm-consent',
  templateUrl: './ev-home-comfirm-consent.page.html',
  styleUrls: ['./ev-home-comfirm-consent.page.scss'],
})
export class EvHomeComfirmConsentPage implements OnInit {
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
