import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdBannerComponent } from './motd-banner.component';

describe('MotdBannerComponent', () => {
  let component: MotdBannerComponent;
  let fixture: ComponentFixture<MotdBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotdBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotdBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
