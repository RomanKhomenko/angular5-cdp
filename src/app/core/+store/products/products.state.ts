import { createEntityAdapter, EntityState, EntityAdapter } from '@ngrx/entity';

import { Product } from '../../models';

export interface ProductsState extends EntityState<Product> {
    readonly loaded: boolean;
    readonly loading: boolean;
    error: Error | string;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialProductsState: ProductsState = productAdapter.getInitialState({
    loaded: false,
    loading: false,
    error: null
});
