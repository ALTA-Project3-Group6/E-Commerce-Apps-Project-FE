export interface ContensType {}

export interface ProductsType {
  user: {
    user_id: number;
    user_name: string;
  };
  description: string;
  id: number;
  name: string;
  price: number;
  product_image: string;
  stock: number;
}

export interface ProductType {
  user: {
    user_id: number;
    user_name: string;
  };
  description: string;
  id: number;
  name: string;
  price: number;
  product_image: string;
  stock: number;
}
