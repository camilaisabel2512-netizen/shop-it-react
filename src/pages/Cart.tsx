import Navbar from "../components/Navbar";

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  <Navbar />;
  return (
    <div style={{ padding: "20px" }}>
      <h1>Carrito</h1>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        cart.map((item, index) => <p key={index}>{item.title}</p>)
      )}
    </div>
  );
}
