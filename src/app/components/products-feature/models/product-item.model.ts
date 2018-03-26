import { ProductCategory } from '../../core/models';

export class ProductItemModel {
    public totalAmount: number;

    constructor(
        public name: string,
        public description: string = '',
        public price: number,
        public category: ProductCategory,
        public count: number
    ) { }
}
