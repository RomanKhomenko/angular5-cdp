import { ProductCategory } from './product-category.model';

import { ProductStatus } from './product-status.model';
import { Guid } from '../../shared/models/guid';
import { Product } from './product';

export class ProductModel implements Product {
    public id: string;

    constructor(
        public name: string,
        public description: string = '',
        public price: number,
        public category: ProductCategory,
        public status: ProductStatus
    ) {
        this.id = Guid.newGuid();
    }
}
