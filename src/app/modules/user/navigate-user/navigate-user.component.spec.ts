import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigateUserComponent } from './navigate-user.component';

describe('NavigateUserComponent', () => {
  let component: NavigateUserComponent;
  let fixture: ComponentFixture<NavigateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigateUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
