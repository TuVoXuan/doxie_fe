declare interface IUserStore {
    id: string;
    name: string;
    email: string;
    phone: string;
    streetAddress: string;
    province: string;
    district: string;
    ward: string;
    hamlet: string;
    avatar: string;
}

declare interface ISignIn {
    email: string;
    password: string;
}

declare interface IResSignIn {
    message: string;
    data: IUserStore;
}
