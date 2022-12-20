import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWinnerComponent } from './item-winner.component';

describe('ItemWinnerComponent', () => {
  let component: ItemWinnerComponent;
  let fixture: ComponentFixture<ItemWinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
