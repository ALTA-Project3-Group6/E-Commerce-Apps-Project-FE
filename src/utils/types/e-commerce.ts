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

export interface userType {
  id: number;
  name: string;
  email: string;
  address: string;
  phone_number: number;
  password: string;
  profile_photo: string;
}
