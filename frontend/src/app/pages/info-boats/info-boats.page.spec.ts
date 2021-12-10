import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoBoatsPage } from './info-boats.page';

describe('InfoBoatsPage', () => {
  let component: InfoBoatsPage;
  let fixture: ComponentFixture<InfoBoatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoBoatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoBoatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
