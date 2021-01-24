import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagensComponent } from './vantagens.component';

describe('VantagensComponent', () => {
  let component: VantagensComponent;
  let fixture: ComponentFixture<VantagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VantagensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
