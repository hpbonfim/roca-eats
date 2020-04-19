import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuerodoarPage } from './querodoar.page';

describe('QuerodoarPage', () => {
  let component: QuerodoarPage;
  let fixture: ComponentFixture<QuerodoarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuerodoarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuerodoarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
