import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import "./assets/css/quanlysp.css"; // Tái sử dụng CSS bảng đã có

export default function Menu1() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Lấy danh sách sản phẩm
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("product1")
      .select("*")
      .order("id", { ascending: true });

    if (error) console.error("Lỗi tải sản phẩm:", error.message);
    else setProducts(data);

    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p style={{ padding: 20 }}>Đang tải dữ liệu...</p>;

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}> Danh sách các loại cà phê</h2>

      <table className="product-table">
        <thead>
          <tr>
            <th>Hình ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Đánh giá</th>
          </tr>
        </thead>

        <tbody>
          {products.length > 0 ? (
            products.map((p) => (
              <tr key={p.id}>
                <td style={{ width: "100px" }}>
                  <img src={p.image} alt={p.title} className="thumb" />
                </td>
                <td style={{ width: "400px" }}>{p.title}</td>
                <td>${p.price}</td>
                <td>
                  ⭐ {p.rating_rate} ({p.rating_count})
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ padding: 20 }}>
                Không có sản phẩm nào!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
