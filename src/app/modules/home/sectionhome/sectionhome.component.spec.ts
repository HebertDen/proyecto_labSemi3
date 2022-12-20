import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionhomeComponent } from './sectionhome.component';

describe('SectionhomeComponent', () => {
  let component: SectionhomeComponent;
  let fixture: ComponentFixture<SectionhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
