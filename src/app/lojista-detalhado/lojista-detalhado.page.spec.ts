import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LojistaDetalhadoPage } from './lojista-detalhado.page';

describe('LojistaDetalhadoPage', () => {
  let component: LojistaDetalhadoPage;
  let fixture: ComponentFixture<LojistaDetalhadoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LojistaDetalhadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LojistaDetalhadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
