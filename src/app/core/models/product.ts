import { ProductStatus } from './product-status.model';
import { ProductCategory } from './product-category.model';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: ProductCategory;
    status: ProductStatus;
}
