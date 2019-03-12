import UnitOfMeasure from '@/Models/UnitOfMeasure';

interface Item {
    id: string;
    name: string;
    unitOfMeasure: UnitOfMeasure;
    tags: string[];
    price: number;
}

export default Item;
