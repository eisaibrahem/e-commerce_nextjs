import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import { products } from "./data";

export default function Recommended() {
  return (
    <main>
      <h1 className="recommended">
        <FontAwesomeIcon
          style={{ width: "1.5rem", marginRight: "0.3rem" }}
          className="fa-solid fa-check"
          icon={faCheck}
        />
        Recommended for you
      </h1>
      <section className="products flex">
        {products.map((product) => (
          <article key={product.id} className="card">
            <a href={product.link}>
              <img width={266} src={product.image} />
            </a>
            <div style={{ width: 266 }} className="content">
              <h1 className="title">{product.title}</h1>
              <p className="description">{product.description}</p>
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">{product.price}</div>
                <button className="add-to-cart flex">
                  <FontAwesomeIcon
                    style={{ width: "1.5rem", marginRight: "0.3rem" }}
                    className="fa-solid fa-cart-plus"
                    icon={faCartPlus}
                  />
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
