/* eslint-disable @next/next/no-img-element */
// Import necessary modules from Next.js

// Rest of your imports remain the same
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number; // Ensure price property is defined
  image: string;
  link: string;
}
async function getData() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Recommended() {
  const products: Product[] = await getData();
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
          <article
            key={product.id}
            className="card"
            style={{ height: "450px" }}
          >
            <Link href={`product-details/${product.id}`}>
              <img
                width={266}
                height={300}
                sizes="cover"
                src={product.image}
                alt={`${product.title}`}
              />
            </Link>
            <div style={{ width: 266 }} className="content">
              <h1 title={product.title} className="title">
                {product.title.slice(0, 16)}...
              </h1>
              <p className="description">
                {product.description.slice(0, 100)}...
              </p>{" "}
              <div
                className="flex"
                style={{
                  justifyContent: "space-between",
                  paddingBottom: "0.7rem",
                }}
              >
                <div className="price">${product.price.toFixed(2)}</div>
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
