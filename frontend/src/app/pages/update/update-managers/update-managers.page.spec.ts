import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateManagersPage } from './update-managers.page';

describe('UpdateManagersPage', () => {
  let component: UpdateManagersPage;
  let fixture: ComponentFixture<UpdateManagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateManagersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateManagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
