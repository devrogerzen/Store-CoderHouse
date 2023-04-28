import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

export const CartWidget = () => {


  const [cart] = useContext(cartContext);
  return (
    <><ShoppingCartCheckoutIcon /> : {cart.length}</>
  )
}
