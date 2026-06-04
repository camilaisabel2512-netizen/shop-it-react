import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { useCartStore } from "../store/cartStore";
import Navbar from "../components/Navbar";

export default function Home() {
  const { products, loading, error } = useProducts();

  const [search, setSearch] = useState("");

  const addToCart = useCartStore((state) => state.addToCart);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      <input
        type="text"
        placeholder="Buscar producto..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px",
          width: "100%",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "1px solid #ccc",
        }}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product: any) => (
            <div
              key={product.id}
              style={{
                background: "white",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                }}
              />

              <h3>{product.title}</h3>

              <p>⭐ {product.rating.rate}</p>

              <p>ARS ${(product.price * 1200).toLocaleString("es-AR")}</p>

              <button onClick={() => addToCart(product)}>
                Agregar al carrito
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
