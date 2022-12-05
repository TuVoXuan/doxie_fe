declare interface INavigator {
    title: string;
    to: string;
}

declare interface IProPaginate {
    data: IProductCard[];
    after: string;
}

declare interface IFormCheckOut {
    name: string;
    phone: string;
    streetAddress: string;
    province: string;
    district: string;
    ward: string;
}
