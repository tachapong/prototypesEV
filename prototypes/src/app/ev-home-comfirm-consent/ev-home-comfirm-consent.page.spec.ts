import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EvHomeComfirmConsentPage } from './ev-home-comfirm-consent.page';

describe('EvHomeComfirmConsentPage', () => {
  let component: EvHomeComfirmConsentPage;
  let fixture: ComponentFixture<EvHomeComfirmConsentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvHomeComfirmConsentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EvHomeComfirmConsentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
