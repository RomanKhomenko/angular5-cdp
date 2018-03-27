import { Product } from '.';

export class ProductResult {
    constructor(
        public products: Array<Product>,
        public totalAmount: number
    ) { }
}
