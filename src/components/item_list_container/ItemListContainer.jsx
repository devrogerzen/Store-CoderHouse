import { useState, useEffect } from "react";
import { db } from "../../firebase/app";
import { collection, query, getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import ItemList from "../item_list/ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const q = query(collection(db, "productos"));

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <CircularProgress />
      ) : (
        products.map((product) => {
          return <ItemList key={product.id} product={product} />;
        })
      )}
    </div>
  );
};
