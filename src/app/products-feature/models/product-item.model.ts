export class ProductItem {
    public clickedCount: number;

    constructor(
        public id: number,
        public name: string,
        public description: string = '',
        public price: number,
        public count: number,
    ) {
        this.clickedCount = 1;
    }
}
