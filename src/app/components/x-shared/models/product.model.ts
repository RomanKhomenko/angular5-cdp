import { ProductCategory } from './product-category.model';

export class Product {
    constructor(
        public name: string,
        public description: string,
        public price: number,
        public count: number,
        public category: ProductCategory) { }

    isAvailable() {
        return this.count > 0;
    }
}
