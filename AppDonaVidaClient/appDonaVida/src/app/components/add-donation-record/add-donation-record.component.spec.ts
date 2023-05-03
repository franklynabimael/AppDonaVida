import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonationRecordComponent } from './add-donation-record.component';

describe('AddDonationRecordComponent', () => {
  let component: AddDonationRecordComponent;
  let fixture: ComponentFixture<AddDonationRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDonationRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDonationRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
