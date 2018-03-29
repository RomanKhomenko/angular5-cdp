import { Guid } from '../../shared/models/guid';
import { ProductInterface } from './product.interface';

export class Product implements ProductInterface {
    public id: string;

    constructor(
        public name: string,
        public description: string = '',
        public price: number,
        public count: number,
    ) {
        this.id = Guid.newGuid();
    }
}
