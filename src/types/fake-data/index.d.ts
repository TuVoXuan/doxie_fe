declare interface ICategory {
    id: string;
    name: string;
    parentId: string | null;
}

declare interface IProduct {
    id: string;
    imageDefault: string;
    images: string[];
    name: string;
    category: id;
    price: number;
    size: string[];
    productDetail: string;
    productCare: string[];
}

declare interface IOrder {
    id: string;
    userId: string;
    phone: string;
    orderDetailId: string[];
    streetAddress: string;
    province: string;
    district: string;
    ward: string;
    shippingFee: number;
    date: Date;
    total: number;
    statetus: 'pending' | 'completed' | 'delivering';
}

declare interface IOrderDetail {
    id: string;
    price: number;
    productId: string;
    quantity: number;
    size: 'XS' | 'S' | 'M' | 'L' | 'XL';
}

declare interface IUser {
    id: string;
    name: string;
    email: string;
    phone: string;
    streetAddress: string;
    province: string;
    district: string;
    ward: string;
    avatar: string;
    password: string;
}
