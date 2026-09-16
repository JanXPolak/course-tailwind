import { CartItem } from "./CartItem";
import type { CartEntry } from "../types";

interface CartProps {
  cartItems: CartEntry[];
  onClickTrash: (productId: number) => void;
}

export function Cart({ cartItems, onClickTrash }: CartProps) {
  return (
    <>
      <h2 className="dark:text-white mb-5 text-4xl font-bold">Cart</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => (
          <li key={cartItem.product.id}>
            <CartItem item={cartItem} onClickTrash={onClickTrash} />
          </li>
        ))}
      </ul>
    </>
  );
}