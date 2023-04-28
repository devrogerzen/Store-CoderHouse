import { useContext } from "react";
import { CartElements } from "../components/cart/CartElements";
import { cartContext } from "../context/CartContext";
import Shop from "../components/shop/Shop";

export const Cart = () => {
  const [cart] = useContext(cartContext);

  const cartTotalPrice = cart.reduce((acc, prod) => acc + prod.precio * prod.cuantos, 0);

  return (
    <>
    <Shop total={cartTotalPrice} />
      <h2>el total a pagar es: {cartTotalPrice}</h2>
      <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
        <CartElements />
      </div>
    </>
  );
};
