import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidebarContentComponent } from './asidebar-content.component';

describe('AsidebarContentComponent', () => {
  let component: AsidebarContentComponent;
  let fixture: ComponentFixture<AsidebarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsidebarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidebarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
