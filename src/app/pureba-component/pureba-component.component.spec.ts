import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurebaComponentComponent } from './pureba-component.component';

describe('PurebaComponentComponent', () => {
  let component: PurebaComponentComponent;
  let fixture: ComponentFixture<PurebaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PurebaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PurebaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
