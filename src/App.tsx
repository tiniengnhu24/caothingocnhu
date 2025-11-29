import "./styles.css";
// @ts-ignore
import Home from "./Home";
// @ts-ignore
import Layout from "./Layout";

// @ts-ignore
import Chitietsanpham from "./Chitietsanpham";

// @ts-ignore
import ProductDetail from "./ProductDetail";

// @ts-ignore
import ListProducts from "./ListProducts";

// @ts-ignore
import ListProducts_SP from "./ListProducts_SP";

// @ts-ignore
import Trang2 from "./Trang2";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//@ts-ignore
import LoginPage from "./LoginPage";
//@ts-ignore

import LogoutPage from "./LogoutPage";
//@ts-ignore
import ProtectedRoute from "./ProtectedRoute";
//@ts-ignore
import ListProducts_SP_Admin from "./ListProducts_SP_Admin";
//@ts-ignore
import EditProduct from "./EditProduct";
//@ts-ignore
import Menu1 from "./Menu1";
//@ts-ignore
import CoffeePage from "./CoffeePage";
//@ts-ignore
import ContactPage from "./ContactPage";
//@ts-ignore
import ChatPage from "./ChatPage"; // ✅ Import trang Chat
//@ts-ignore
import Cart from "./Cart";
export default function App() {
  // return <Layout />;

  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Layout chung cho toàn bộ hệ thống */}
        <Route path="/" element={<Layout />}>
          {/* Trang chính (cho người dùng vãng lai) */}
          <Route index element={<Home />} />
          <Route path="trang2" element={<Trang2 />} />
          <Route path="sanpham/:id" element={<Chitietsanpham />} />
          <Route path="/admin/edit/:id" element={<EditProduct />} />
          <Route path="/menu1" element={<Menu1 />} />
          <Route path="coffee" element={<CoffeePage />} />
          <Route path="/menu3" element={<ContactPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="chat" element={<ChatPage />} />

          {/* <Route path="detail/:id" element={<ProductDetail />} /> */}

          {/* ✅ Trang đăng nhập (nằm trong Layout) */}
          <Route path="login" element={<LoginPage />} />

          {/* ✅ Trang đăng xuất */}
          <Route path="logout" element={<LogoutPage />} />

          {/* ✅ Trang quản trị (nằm trong Layout, chỉ Admin truy cập) */}
          <Route
            path="admin/products"
            element={
              <ProtectedRoute>
                <ListProducts_SP_Admin />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
