import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesAComponent } from './componentes-a.component';

describe('ComponentesAComponent', () => {
  let component: ComponentesAComponent;
  let fixture: ComponentFixture<ComponentesAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentesAComponent]
    });
    fixture = TestBed.createComponent(ComponentesAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
