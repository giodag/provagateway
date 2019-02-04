export interface IProduct {
    id?: number;
    price?: number;
    name?: string;
}

export class Product implements IProduct {
    constructor(public id?: number, public price?: number, public name?: string) {}
}
