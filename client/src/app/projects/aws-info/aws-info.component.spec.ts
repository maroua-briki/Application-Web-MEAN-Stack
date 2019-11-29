import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsInfoComponent } from './aws-info.component';

describe('AwsInfoComponent', () => {
  let component: AwsInfoComponent;
  let fixture: ComponentFixture<AwsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
