import { ProductInterface } from '../../core/models';

export class ProductItem implements ProductInterface {
    public clickedCount: number;

    constructor(
        public id: string,
        public name: string,
        public description: string = '',
        public price: number,
        public count: number,
    ) {
        this.clickedCount = 1;
    }
}
