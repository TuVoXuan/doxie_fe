import { products } from '../fake-data/product';
import { getCategoryName } from './cateogries';

export const getProductsForPagination = (categoryIds: string[]): IProductCard[] => {
    return products
        .filter((item) => {
            const index = categoryIds.findIndex((e) => e === item.category);
            if (index === -1) return false;
            return true;
        })
        .map((item) => {
            const newProduct: IProductCard = {
                id: item.id,
                category: getCategoryName(item.category) || '',
                image: item.imageDefault,
                name: item.name,
                price: item.price,
            };

            return newProduct;
        });
};

export const getProducts = (categoryIds: string[], limit: number, after: string): IProPaginate => {
    const pros = getProductsForPagination(categoryIds);
    if (!after) {
        return {
            data: pros.slice(0, limit),
            after: pros.length <= limit ? '' : pros[limit].id,
        };
    } else {
        const index = pros.findIndex((item) => item.id === after);
        if (index !== -1) {
            return {
                data: pros.slice(index, index + limit),
                after: pros.length <= index + limit ? '' : pros[index + limit].id,
            };
        }
        return {
            data: [],
            after: '',
        };
    }
};
