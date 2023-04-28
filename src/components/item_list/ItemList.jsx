import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function ItemList({ product }) {
  const [cart, setCart] = useContext(cartContext);

  const buyProduct = (product) => {
    const productRepeat = cart.find((item) => item.id === product.id);
    if (productRepeat) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, cuantos: productRepeat.cuantos + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
  };

  return (
    <Card sx={{ width: 380, height: 500, margin: 1 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          width="300"
          image={product.img}
          alt={product.producto}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.producto}
          </Typography>
          <Typography variant="body2">{product.descripcion}</Typography>
          <Typography gutterBottom variant="body3" component="div">
            Marca: {product.marca}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Precio: {product.precio} / En Stock: {product.cantidad}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/detail/${product.id}`} size="small" color="primary">
          Ir Detalle...
        </Link>
        <Button
          onClick={() => buyProduct(product)}
          size="small"
          color="primary"
        >
          Agregar
        </Button>
      </CardActions>
    </Card>
  );
}
