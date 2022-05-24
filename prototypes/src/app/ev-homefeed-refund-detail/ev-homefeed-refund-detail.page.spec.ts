import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvHomefeedRefundDetailPage } from './ev-homefeed-refund-detail.page';

describe('EvHomefeedRefundDetailPage', () => {
  let component: EvHomefeedRefundDetailPage;
  let fixture: ComponentFixture<EvHomefeedRefundDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvHomefeedRefundDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvHomefeedRefundDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
