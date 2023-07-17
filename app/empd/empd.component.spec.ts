import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdComponent } from './empd.component';

describe('EmpdComponent', () => {
  let component: EmpdComponent;
  let fixture: ComponentFixture<EmpdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
