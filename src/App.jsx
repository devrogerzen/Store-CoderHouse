import { Navbar } from "./components/navbar/Navbar";
import { CartProvider } from "./context/CartContext";
import { MainRouter } from "./routers/MainRouter";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <MainRouter />
    </CartProvider>
  );
}

export default App;
