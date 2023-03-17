import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { Component } from "@angular/core";


@Component({
  selector: 'app-base',
  template: '<ng-content></ng-content> test'
})

class AppBase {

}

@Component({
  template: `
      <app-base></app-base>
      <app-base></app-base>
      <app-base></app-base>

  `
})

class BaseColumn {

}

describe('TableComponent', () => {
  let component: TableComponent<any>;
  let fixture: ComponentFixture<TableComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent, BaseColumn, AppBase ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.dataSource = [{model: {} as any} as any, {model: {} as any} as any]
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
