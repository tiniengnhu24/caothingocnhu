// src/ContactPage.jsx
import React, { useState } from "react";
import "./assets/css/contact.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("❌ Vui lòng điền đầy đủ thông tin!");
      return;
    }
    // Demo: chỉ hiển thị alert
    alert("✅ Gửi liên hệ thành công!\nCảm ơn bạn đã liên hệ với chúng tôi.");
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2 className="contact-title">Liên hệ với chúng tôi</h2>
        <p className="contact-subtitle">
          Hãy gửi cho chúng tôi thông tin để nhận được phản hồi nhanh nhất
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Họ và tên</label>
            <input
              type="text"
              placeholder="Nhập họ và tên..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Nhập email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Lời nhắn</label>
            <textarea
              placeholder="Nhập lời nhắn..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button type="submit">Gửi liên hệ</button>
        </form>

        {submitted && (
          <p className="success-msg">✅ Bạn đã gửi thông tin thành công!</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
