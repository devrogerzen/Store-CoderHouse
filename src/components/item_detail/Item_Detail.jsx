import {
  collection,
  documentId,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CircularProgress } from "@mui/material";
import { db } from "../../firebase/app";

export const Item_Detail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const q = query(collection(db, "productos"), where(documentId(), "==", id));

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs[0]);
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <img style={{ height: "500px" }} src={product.img} alt="" />
          <h2>Producto: {product.producto}</h2>
          <h3>Marca: {product.marca}</h3>
          <h4>Descripción: {product.descripcion}</h4>
          <h3>Stock: {product.cantidad}</h3>
          <h2>Categoria: {product.categoria}</h2>
        </div>
      )}
    </div>
  );
};
