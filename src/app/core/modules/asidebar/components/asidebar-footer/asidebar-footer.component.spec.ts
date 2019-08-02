import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidebarFooterComponent } from './asidebar-footer.component';

describe('AsidebarFooterComponent', () => {
  let component: AsidebarFooterComponent;
  let fixture: ComponentFixture<AsidebarFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidebarFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidebarFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
