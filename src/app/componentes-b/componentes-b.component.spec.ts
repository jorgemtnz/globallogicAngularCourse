import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentesBComponent } from './componentes-b.component';

describe('ComponentesBComponent', () => {
  let component: ComponentesBComponent;
  let fixture: ComponentFixture<ComponentesBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentesBComponent]
    });
    fixture = TestBed.createComponent(ComponentesBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
