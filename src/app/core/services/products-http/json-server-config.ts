import { InjectionToken } from '@angular/core';

const productsUrl = 'http://localhost:3000/products';
const commentsUrl = 'http://localhost:3000/comments';
export const ProductsAPI = new InjectionToken<string>('ProductsAPI');
export const CommentsAPI = new InjectionToken<string>('CommentsAPI');

export const ProductsAPIProvider = {
    provide: ProductsAPI,
    useValue: productsUrl
};
export const CommentsAPIProvider = {
    provide: CommentsAPI,
    useValue: commentsUrl
};
