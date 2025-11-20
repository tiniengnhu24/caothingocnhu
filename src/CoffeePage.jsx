import React from "react";
import "./assets/css/coffee.css"; // CSS riêng cho trang cà phê

const coffeeData = [
  {
    id: 1,
    name: "Espresso",
    description: "Một loại cà phê đậm, nồng, được pha bằng áp suất cao.",
    image: "https://coffee.alexflipnote.dev/QiRoX8QrMqU_coffee.jpg",
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Cà phê Espresso kết hợp với sữa nóng và bọt sữa mịn.",
    image: "https://coffee.alexflipnote.dev/DUqs2Cde8Ac_coffee.jpg",
  },
  {
    id: 3,
    name: "Latte",
    description: "Cà phê Espresso pha với nhiều sữa nóng, vị nhẹ nhàng.",
    image: "https://coffee.alexflipnote.dev/0Wc-p_W_tMI_coffee.png",
  },
  {
    id: 4,
    name: "Mocha",
    description: "Espresso, sô-cô-la và sữa tạo nên hương vị đặc biệt.",
    image: "https://coffee.alexflipnote.dev/_3c_dq2nbYQ_coffee.jpg",
  },
];

const CoffeePage = () => {
  return (
    <div className="coffee-container">
      <h1>🌟 Các loại cà phê nổi bật</h1>
      <div className="coffee-grid">
        {coffeeData.map((coffee) => (
          <div key={coffee.id} className="coffee-card">
            <img src={coffee.image} alt={coffee.name} />
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeePage;
