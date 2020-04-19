import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrecisodoacaoPage } from './precisodoacao.page';

describe('PrecisodoacaoPage', () => {
  let component: PrecisodoacaoPage;
  let fixture: ComponentFixture<PrecisodoacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecisodoacaoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrecisodoacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
