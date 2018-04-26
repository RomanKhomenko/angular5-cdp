import { createFeatureSelector, createSelector } from '@ngrx/store';

import { productAdapter, ProductsState } from './products.state';

import { getRouterState } from './../router';
import { Product } from '../../models';

export const getProductsState = createFeatureSelector<ProductsState>('products');

export const {
    selectEntities: getProductsEntities,
    selectAll: getProductsData
} = productAdapter.getSelectors(getProductsState);

export const getProductsError = createSelector(getProductsState, (state: ProductsState) => state.error);
export const getProductsLoaded = createSelector(getProductsState, (state: ProductsState) => state.loaded);

export const getSelectedProductById = createSelector(
    getProductsEntities,
    getRouterState,
    (products, router): Product => {
        const id = router.state.params.productId;
        if (id) {
            return products[id];
        } else {
            return null;
        }
    }
);
