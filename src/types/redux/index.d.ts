declare interface IUserStore {
    id: string;
    name: string;
    email: string;
    phone: string;
    streetAddress: string;
    province: string;
    district: string;
    ward: string;
}

declare interface ISignIn {
    email: string;
    password: string;
}

declare interface IResAuth {
    message: string;
    data: IUserStore;
}

declare interface IResUpdateProfile {
    message: string;
    data: IUpdateProfile;
}

declare interface ISignUP {
    name: string;
    email: string;
    phone: string;
    streetAddress: string;
    province: string;
    district: string;
    ward: string;
    password: string;
}

declare interface IUpdateProfile {
    name: string;
    email: string;
    phone: string;
    streetAddress: string;
    province: string;
    district: string;
    ward: string;
}

declare interface IUpdateProfileData {
    userId: string;
    name: string;
    email: string;
    phone: string;
    streetAddress: string;
    province: string;
    district: string;
    ward: string;
}

declare interface ICartItem {
    id: string;
    productId: string;
    name: string;
    quantity: number;
    defaultImg: string;
    size: string;
    price: number;
    category: string;
}

declare interface IChangeQuantity {
    id: string;
    type: 'increase' | 'decrease';
}
