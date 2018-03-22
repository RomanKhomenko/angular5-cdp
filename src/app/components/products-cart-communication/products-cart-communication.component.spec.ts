import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsCartCommunicationComponent } from './products-cart-communication.component';

describe('ProductsCartCommunicationComponent', () => {
  let component: ProductsCartCommunicationComponent;
  let fixture: ComponentFixture<ProductsCartCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsCartCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsCartCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
