import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from "@angular/router";
import { DriverComponent } from './driver.component';
import { Driver } from './util';

describe(
  'DriverComponent',
  () => {
    let activatedRouteSnapshot = {
      snapshot: {
        data: {
          drivers: [
            { name: "Dani" } as Driver,
          ],
        },
      },
    };
    let component: DriverComponent;
    let fixture: ComponentFixture<DriverComponent>;
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ DriverComponent ],
        providers: [
          {
            provide: ActivatedRoute,
            useValue: activatedRouteSnapshot,
          },
        ],
      })
        .compileComponents();
      fixture = TestBed.createComponent(DriverComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it(
      'should create',
      () => {
        expect(component)
          .toBeTruthy();
      },
    );
  },
);
