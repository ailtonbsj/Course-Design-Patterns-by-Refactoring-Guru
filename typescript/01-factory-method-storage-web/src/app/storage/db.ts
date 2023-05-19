import Dexie, { Table } from "dexie";
import { Category } from "../category/category.model";
import { Product } from "../product/product.model";

class AppDB extends Dexie {
    category!: Table<Category, number>;
    product!: Table<Product, number>;

    constructor() {
        super('01-factory-method');
        this.version(1).stores({
            category: '++id',
            product: '++id'
        });
    }
}

export const db = new AppDB();