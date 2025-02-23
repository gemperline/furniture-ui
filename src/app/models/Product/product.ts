// should match the product found in the MOCK_PRODUCTS.ts file
export interface IProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    altText?: string;
    sku: string;
    rating?: number;
    price: number;
    salePrice?: number;
    varieties?: any[];
}

export enum ColumnAmount {
    LESS = 'less',
    MORE = 'more',
};

export enum ProductTileVariant {
    REGULAR = 'regular',
    CENTERED = 'centered',
};