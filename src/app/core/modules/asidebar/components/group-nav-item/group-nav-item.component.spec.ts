import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupNavItemComponent } from './group-nav-item.component';

describe('GroupNavItemComponent', () => {
  let component: GroupNavItemComponent;
  let fixture: ComponentFixture<GroupNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
