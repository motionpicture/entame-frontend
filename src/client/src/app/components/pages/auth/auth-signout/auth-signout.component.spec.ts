import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignoutComponent } from './auth-signout.component';

describe('AuthSignoutComponent', () => {
  let component: AuthSignoutComponent;
  let fixture: ComponentFixture<AuthSignoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
