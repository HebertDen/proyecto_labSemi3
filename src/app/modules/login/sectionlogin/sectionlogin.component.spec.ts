import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionloginComponent } from './sectionlogin.component';

describe('SectionloginComponent', () => {
  let component: SectionloginComponent;
  let fixture: ComponentFixture<SectionloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
