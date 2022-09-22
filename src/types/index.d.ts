declare interface INavigator {
    title: string;
    to: string;
}

declare interface IProPaginate {
    data: IProductCard[];
    after: string;
}
