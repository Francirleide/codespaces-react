import { createContext } from "react";
import { Cart } from "../components/Cart";
import { Product } from "../components/Product";

export const CartContext = createContext(); (
{
    Product: [],
    Cart:[],
    addtoCart: () => {},
    updateQty: () => {},
    clearCart: () => {},
}

);

export function CartProvider({ children }) {


}