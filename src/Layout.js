import "./assets/css/main.css";
import anhlogo from "./assets/images//coffee.png";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0); // 👉 THÊM MỚI
  const navigate = useNavigate();

  // 👉 Lấy số lượng giỏ hàng từ sessionStorage
  const updateCartCount = () => {
    const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    updateCartCount(); // 👉 lần đầu load
    // 👉 Lắng nghe sự kiện giỏ hàng vừa thêm
    window.addEventListener("cartUpdated", updateCartCount);

    // 👉 Lắng nghe khi tab khác update sessionStorage
    window.addEventListener("storage", updateCartCount);

    return () => {
      window.removeEventListener("storage", updateCartCount);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <html>
      <header>
        <div id="divheader" class="header1">
          <div id="banner" class="banner1">
            <div id="topleft">
              <ul class="ul1">
                <li>
                  <a href="/#">TRANG CHỦ</a>
                </li>
                <li>
                  <a href="/menu1">SẢN PHẨM</a>
                </li>
                <li>
                  <a href="/admin/products">QUẢN TRỊ</a>
                </li>
              </ul>
            </div>

            <div id="logo" class="logo1">
              <img src={anhlogo} width="250" />
            </div>

            <div id="divtimkiem" className="search-box">
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                className="search-input"
              />
              <button className="search-btn">🔍</button>
            </div>
          </div>

          <div id="menubar" className="menubar">
            <div className="menubar-left">
              <a href="/menu1" className="menu-item">
                Menu Cà Phê
              </a>
              <a href="/coffee" className="menu-item">
                Giới Thiệu Cà phê
              </a>
              <a href="/menu3" className="menu-item">
                Liên Hệ
              </a>
            </div>

            <div className="menubar-right">
              {/* 👉 GIỎ HÀNG */}
              <a href="/cart" className="cart-link">
                🛒 Giỏ hàng
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </a>

              {user ? (
                <>
                  <span className="username">người dùng {user.username}</span>
                  <button className="logout-btn" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </>
              ) : (
                <a href="/login" className="login-link">
                  Đăng nhập
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      <body>
        <div id="container" class="container">
          <Outlet />
        </div>
      </body>

      <footer></footer>
    </html>
  );
};

export default Layout;
