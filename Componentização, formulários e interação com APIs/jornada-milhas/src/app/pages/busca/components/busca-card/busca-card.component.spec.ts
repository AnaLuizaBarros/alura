import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaCardComponent } from './busca-card.component';

describe('BuscaCardComponent', () => {
  let component: BuscaCardComponent;
  let fixture: ComponentFixture<BuscaCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscaCardComponent]
    });
    fixture = TestBed.createComponent(BuscaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
