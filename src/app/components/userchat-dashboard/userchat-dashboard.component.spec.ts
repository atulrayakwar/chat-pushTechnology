import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserchatDashboardComponent } from './userchat-dashboard.component';

describe('UserchatDashboardComponent', () => {
  let component: UserchatDashboardComponent;
  let fixture: ComponentFixture<UserchatDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserchatDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserchatDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
