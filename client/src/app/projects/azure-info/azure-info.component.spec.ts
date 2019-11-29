import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureInfoComponent } from './azure-info.component';

describe('AzureInfoComponent', () => {
  let component: AzureInfoComponent;
  let fixture: ComponentFixture<AzureInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
