import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidebarHeaderComponent } from './asidebar-header.component';

describe('AsidebarHeaderComponent', () => {
  let component: AsidebarHeaderComponent;
  let fixture: ComponentFixture<AsidebarHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidebarHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
