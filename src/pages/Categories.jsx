import { useState, useEffect } from "react";
import { db } from "../firebase/app";
import { collection, query, getDocs, where } from "firebase/firestore";
import { CircularProgress } from "@mui/material";
import ItemList from "../components/item_list/ItemList";
import { useParams } from "react-router-dom";

export const Categories = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { cate } = useParams();

  const q = query(collection(db, "productos"), where("categoria", "==", cate));

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
  }, [cate]);

  return (
    <div
      style={{
        width: "100%",
        paddingTop:"100px",
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
