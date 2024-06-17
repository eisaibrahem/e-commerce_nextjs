import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./details.css";
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

async function getData(id: number): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductDetails({
  params,
}: {
  params: { id: number };
}) {
  const product: Product = await getData(params.id);

  return (
    <div className="product-details">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "90%",
          margin: "20px auto",
        }}
      >
        <article
          key={product.id}
          className="card"
          style={{
            backgroundColor: "#fff",
            border: "none",
            padding: "0.2rem",
            borderRadius: "8px",

            height: "fit-content",
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "1rem",
              position: "relative", // Required for Next.js Image component
              maxWidth: "180px",

              height: "auto",
              margin: "0 auto",
              aspectRatio: "3 / 4", // Maintain the aspect ratio of 300/400
            }}
          >
            <Image
              className="image"
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              style={{ borderRadius: "8px" }}
            />
          </div>

          <div className="content">
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1
                  title={product.title}
                  className="title"
                  style={{ paddingBottom: "0.5rem", fontSize: "1.2rem " }}
                >
                  {product.title}
                </h1>
                <p
                  className="price"
                  style={{
                    color: "red",
                    fontSize: "0.8rem ",
                    width: "fit-content",
                  }}
                >
                  ${product.price.toFixed(2)}
                </p>
              </div>
              <p
                className="description"
                style={{
                  paddingBottom: "0.5rem",
                  lineHeight: "1.5rem",
                  fontSize: "0.8rem ",
                }}
              >
                {product.description}
              </p>
              <button
                className="add-to-cart flex"
                style={{
                  backgroundColor: "rgb(20, 90, 220)",
                  padding: "0.5rem",
                  fontSize: "0.8rem",
                  color: "white",
                  borderRadius: "5px",
                }}
              >
                Add To Cart
                <FontAwesomeIcon
                  style={{
                    width: "1.5rem",
                    marginRight: "0.3rem",
                    marginLeft: "0.4rem",
                    color: "white",
                  }}
                  className="fa-solid fa-cart-plus"
                  icon={faCartPlus}
                />
              </button>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
