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

export interface orderType {
  buyer_id: number;
  buyer_name: string;
  created_at: string;
  id: number;
  order_status: string;
  seller_id: number;
  seller_name: string;
  total_price: number;
  transaction_id: string;
}

export interface cartType {
  id: number;
  id_product: number;
  id_user: number;
  price: number;
  product: {
    id_product: number;
    product_name: string;
  };
  product_image: string;
  quantity: number;
  seller: {
    id_user: number;
    user_name: string;
  };
}
