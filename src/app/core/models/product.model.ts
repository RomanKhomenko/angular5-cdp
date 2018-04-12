import { Guid } from '../../shared/models/guid';

export class Product {
    public id: number;
    public name: string;
    public description = '';
    public price: number;
    public count: number;
    public comments: string[];
}
