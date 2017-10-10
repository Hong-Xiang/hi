import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerOpenerComponent } from './explorer-opener.component';

describe('ExplorerOpenerComponent', () => {
  let component: ExplorerOpenerComponent;
  let fixture: ComponentFixture<ExplorerOpenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplorerOpenerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplorerOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
