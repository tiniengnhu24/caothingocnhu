import React from "react";
import avatarImg from "./assets/images/avatar.jpg"; // 👉 ảnh trong thư mục assets

const Home = () => {
  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "Arial",
      }}
    >
      {/* Ảnh giới thiệu */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={avatarImg}
          alt="avatar"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #ddd",
          }}
        />
      </div>

      <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
        👋 Chào đến web bán cà phê của Cao Ngọc Như nhoe
      </h2>

      <p style={{ textAlign: "center", color: "#555", fontSize: "18px" }}>
        Sinh viên Công nghệ thông tin – Trường Cao đẳng kinh tế HCE
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h3>🌟 Giới thiệu bản thân</h3>
      <p style={{ lineHeight: "1.7", fontSize: "17px" }}>
        Mình là người đam mê lập trình web và thiết kế giao diện. Mục tiêu của
        mình là trở thành lập trình viên Frontend chuyên nghiệp.
      </p>

      <p style={{ lineHeight: "1.7", fontSize: "17px" }}>
        Hiện tại mình đang học ReactJS, VueJS và Supabase, thích tạo các dự án
        thực tế như blog ẩm thực, hệ thống quản lý…
      </p>

      <hr style={{ margin: "30px 0" }} />

      <h3>📬 Thông tin liên hệ</h3>

      <ul style={{ fontSize: "17px", lineHeight: "1.8" }}>
        <li>babylovevn159@gmail.com</li>
        <li> 0857921573</li>
        <li>🌐 Facebook: https://www.facebook.com/cao.ngoc.nhu.868759</li>
      </ul>
    </div>
  );
};

export default Home;
