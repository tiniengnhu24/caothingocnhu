import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import "./assets/css/quanlysp.css";

export default function Menu1() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("product1")
      .select("*")
      .order("id", { ascending: true });

    if (!error) setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addToCart = (product) => {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      exist.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    sessionStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (loading) return <p style={{ padding: 20 }}>Đang tải dữ liệu...</p>;

  return (
    <div className="coffee-container">
      <h2 className="title">☕ Danh sách các loại cà phê</h2>

      <div className="row-grid">
        {products.map((p) => (
          <div className="row-card" key={p.id}>
            <img src={p.image} alt={p.title} className="row-img" />

            <div className="row-info">
              <h3 className="row-title">{p.title}</h3>

              <p className="row-price">${p.price}</p>

              <p className="row-rating">
                ⭐ {p.rating_rate} ({p.rating_count} đánh giá)
              </p>

              <button className="row-add-btn" onClick={() => addToCart(p)}>
                + Thêm vào giỏ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
