import { Route, Routes } from "react-router-dom";
import { Home, Contact, Detail, AddProduct, ErrorPage } from "../pages";
import { Cart } from "../pages/Cart";
import { Categories } from "../pages/Categories";

export const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/category/:cate" element={ <Categories/>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};