import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationRecordDetailComponent } from './donation-record-detail.component';

describe('DonationRecordDetailComponent', () => {
  let component: DonationRecordDetailComponent;
  let fixture: ComponentFixture<DonationRecordDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationRecordDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationRecordDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
