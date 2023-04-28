import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { CartItemCounter } from "./CartItemCounter";


export const CartElements = () => {
  const [cart, setCart] = useContext(cartContext);


  const onDeleted = (id) => {

   const foundId = cart.find( (element)=> element.id === id )

     const newCart = cart.filter((element) => {
      return element !== foundId
     })
     setCart(newCart)

  }

  return cart.length > 0 ? cart.map((product) => {
    return (
      <Card key={product.id} sx={{ width: 380, height: 500, margin: 1 }}>
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
              Precio: {product.precio * product.cuantos} / En Stock: {product.cantidad}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Ir Detalle...
          </Button>
          <CartItemCounter product={product} />
          <Button onClick={()=>onDeleted(product.id)} size="small" color="primary">
            Eliminar
          </Button>
        </CardActions>
      </Card>
    ) 
  }) : <h1>Carrito Vacio</h1>
}
