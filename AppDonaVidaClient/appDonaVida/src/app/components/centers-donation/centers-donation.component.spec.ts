import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersDonationComponent } from './centers-donation.component';

describe('CentersDonationComponent', () => {
  let component: CentersDonationComponent;
  let fixture: ComponentFixture<CentersDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentersDonationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentersDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
