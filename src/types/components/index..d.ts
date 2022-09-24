declare interface IProductCard {
    id: string;
    image: string;
    price: number;
    name: string;
    category: string;
}

declare interface IOption {
    content: string;
    value: string;
    id?: string;
}
