import React, { useState } from "react";

// Firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/app";

import "./Shop.css";

import TextField from "@mui/material/TextField";

import { CartPurchase } from "./CartPurchase";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const Shop = ({total}) => {
  const [values, setValues] = useState(initialState);
  // Este estado está destinado a guardar el id de la compra
  const [purchaseID, setPurchaseID] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "ventas"), {
      values,
    });
    // console.log("Document written with ID: ", docRef.id);
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1>Finaliza tu Compra</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={onChange}
          required
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={onChange}
          required
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400 }}
          name="city"
          value={values.city}
          onChange={onChange}
          required
        />
        <button className="btnASendAction" type="submit">
          Comprar
        </button>
      </form>
      {purchaseID.length ? <CartPurchase purchaseID={purchaseID} total={total} /> : null}
    </div>
  );
};

export default Shop;
