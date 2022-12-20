import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionadminComponent } from './sectionadmin.component';

describe('SectionadminComponent', () => {
  let component: SectionadminComponent;
  let fixture: ComponentFixture<SectionadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
