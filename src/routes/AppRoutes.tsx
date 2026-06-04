import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
