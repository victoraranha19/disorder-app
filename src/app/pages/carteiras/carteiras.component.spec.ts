import localePt from '@angular/common/locales/pt';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyPipe, registerLocaleData } from '@angular/common';

import { CarteirasComponent } from './carteiras.component';

registerLocaleData(localePt);

describe('CarteirasComponent', () => {
  let component: CarteirasComponent;
  let fixture: ComponentFixture<CarteirasComponent>;
  const currencyPipe = new CurrencyPipe('us');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarteirasComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CarteirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
