import React, { useState, useEffect } from "react";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Lưu lại vào session + thông báo cho Layout cập nhật
  const saveCart = (newCart) => {
    setCart(newCart);
    sessionStorage.setItem("cart", JSON.stringify(newCart));

    // 👉 THÊM: Cập nhật số lượng giỏ hàng ngay lập tức
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const increaseQty = (id) => {
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    saveCart(newCart);
  };

  const decreaseQty = (id) => {
    const newCart = cart
      .map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    saveCart(newCart);
  };

  const removeItem = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    saveCart(newCart);
  };

  const clearCart = () => {
    sessionStorage.removeItem("cart");
    setCart([]);

    // 👉 THÊM: Giỏ hàng về 0 ngay
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const total = cart.reduce((t, i) => t + i.price * i.quantity, 0);

  return (
    <div style={{ padding: 20 }}>
      <h2>🛒 Giỏ hàng</h2>

      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Hình</th>
                <th>Tên SP</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng</th>
                <th>Xóa</th>
              </tr>
            </thead>

            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} width="60" />
                  </td>

                  <td>{item.title}</td>
                  <td>${item.price}</td>

                  <td>
                    <button onClick={() => decreaseQty(item.id)}>-</button>

                    <span style={{ padding: "0 10px" }}>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </td>

                  <td>${item.price * item.quantity}</td>

                  <td>
                    <button
                      onClick={() => removeItem(item.id)}
                      style={{ color: "red" }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 style={{ marginTop: 15 }}>💵 Tổng cộng: ${total}</h3>

          <button
            onClick={clearCart}
            style={{
              marginTop: 10,
              padding: "8px 15px",
              background: "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Xóa toàn bộ giỏ hàng
          </button>
        </>
      )}
    </div>
  );
}
