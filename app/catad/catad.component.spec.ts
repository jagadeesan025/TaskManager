import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatadComponent } from './catad.component';

describe('CatadComponent', () => {
  let component: CatadComponent;
  let fixture: ComponentFixture<CatadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
