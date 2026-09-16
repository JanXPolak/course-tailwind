export interface Shoe {
  id: number;
  src: string;
  className: string;
  title: string;
  description: string;
  price: number;
}

export type SelectValue = number | string;

export interface CartEntry {
  product: Shoe;
  qty: SelectValue;
  size: SelectValue;
}
