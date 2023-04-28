import { Button } from "@mui/material";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

export const CartItemCounter = ({ product }) => {
  const [cart, setCart] = useContext(cartContext);

  const onIncrement = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...product, cuantos: productRepeat.cuantos + 1 }
          : item
      )
    );
  };

  const onDecrement = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);
    productRepeat.cuantos > 1 &&
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...product, cuantos: productRepeat.cuantos - 1 }
          : item
      )
    );
  };

  return (
    <>
      <Button onClick={() => onDecrement(product)} variant="outlined">
        -
      </Button>
      <p>{product.cuantos}</p>
      <Button onClick={() => onIncrement(product)} variant="outlined">
        +
      </Button>
    </>
  )
};
