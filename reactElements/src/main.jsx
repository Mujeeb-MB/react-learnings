import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function Card(props) {
  const { title, image, brand, price } = props;
  return (
    <div className="card">
      <img src={image} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{brand}</p>
        <p>
          <b>₹ {price}</b>
        </p>
      </div>
    </div>
  );
}

// console.log(Card);

// const container = [Card(1), Card(2), Card(3), Card(4), Card(5)];

const root = ReactDOM.createRoot(document.getElementById("root"));

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="container">
        {data.products.map((product) => {
          return (
            <Card
              key={product.id}
              title={product.title}
              image={product.thumbnail}
              brand={product.brand}
              price={product.price}
            />
          );
        })}
      </div>
    );
  });
