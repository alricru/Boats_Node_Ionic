import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoManagersPage } from './info-managers.page';

describe('InfoManagersPage', () => {
  let component: InfoManagersPage;
  let fixture: ComponentFixture<InfoManagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoManagersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoManagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
