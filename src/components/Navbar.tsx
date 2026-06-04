import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);

  return (
    <nav
      style={{
        background: "#111",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <h2>Shop It</h2>

      <div style={{ marginBottom: "10px" }}>
        <Link
          to="/"
          style={{
            color: "white",
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          Inicio
        </Link>

        <Link
          to="/cart"
          style={{
            color: "white",
            marginRight: "15px",
            textDecoration: "none",
          }}
        >
          Carrito
        </Link>

        <Link
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Contacto
        </Link>
      </div>

      <p>Productos en el carrito: {cart.length}</p>
    </nav>
  );
}
