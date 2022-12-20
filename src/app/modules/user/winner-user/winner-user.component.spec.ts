import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerUserComponent } from './winner-user.component';

describe('WinnerUserComponent', () => {
  let component: WinnerUserComponent;
  let fixture: ComponentFixture<WinnerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
