import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensibleTableComponent } from './extensible-table.component';

describe('ExtensibleTableComponent', () => {
  let component: ExtensibleTableComponent;
  let fixture: ComponentFixture<ExtensibleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtensibleTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtensibleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
