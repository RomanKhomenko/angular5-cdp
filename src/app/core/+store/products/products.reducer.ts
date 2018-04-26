import { Action } from '@ngrx/store';

import { productAdapter, initialProductsState, ProductsState } from './products.state';
import { ProductsActionTypes, ProductsActions } from './products.actions';
import { AppState } from '..';
import { Product } from '../../models';

// export function reducer(state = initialProductsState, action: ProductsActions): ProductsState {
//   switch (action.type) {

//     case ProductsActionTypes.GET_PRODUCTS:
//     {
//       console.log('GET_PRODUCTS action being handled!');
//       return {
//         ...state,
//         loading: true
//       };
//     }
//     case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
//     {
//       console.log('GET_PRODUCTS action being handled!');
//       const products = [...action.payload];
//       return {
//         ...state,
//         products,
//         loading: false,
//         loaded: true,
//         error: null
//       };
//     }
//     case ProductsActionTypes.GET_PRODUCTS_ERROR:
//     {
//       console.log('GET_PRODUCTS action being handled!');

//       return {
//         ...state,
//         loading: false,
//         loaded: false,
//         error: action.payload
//       };
//     }

//     case ProductsActionTypes.GET_PRODUCT:
//     {
//       console.log('GET_PRODUCT action being handled!');
//       return {...state};
//     }
//     case ProductsActionTypes.CREATE_PRODUCT:
//     {
//       console.log('CREATE_PRODUCT action being handled!');
//       return {...state};
//     }
//     case ProductsActionTypes.UPDATE_PRODUCT:
//     {
//       console.log('UPDATE_PRODUCT action being handled!');
//       return {...state};
//     }
//     case ProductsActionTypes.DELETE_PRODUCT:
//     {
//       console.log('DELETE_PRODUCT action being handled!');
//       return {...state};
//     }
//     default:
//       return state;
//   }
// }

export function reducer(
  state = initialProductsState,
  action: ProductsActions
): ProductsState {
  switch (action.type) {

    case ProductsActionTypes.GET_PRODUCTS: {
      return {
        ...state,
        loading: true
      };
    }

    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      const products = [...<Array<Product>>action.payload];

      return productAdapter.addAll(products, {...state, loading: false, loaded: true});
    }


    case ProductsActionTypes.GET_PRODUCT_SUCCESS: {
      const product = { ...<Product>action.payload };

      return productAdapter.addOne(product, state);
    }

    default: {
      return state;
    }
  }
}

