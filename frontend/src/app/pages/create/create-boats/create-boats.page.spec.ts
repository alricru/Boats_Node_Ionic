import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateBoatsPage } from './create-boats.page';

describe('CreateBoatsPage', () => {
  let component: CreateBoatsPage;
  let fixture: ComponentFixture<CreateBoatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBoatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateBoatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
