import { categories } from '../fake-data/category';

export const getCategoryName = (id: string) => {
    return categories.find((item) => item.id === id)?.name;
};
