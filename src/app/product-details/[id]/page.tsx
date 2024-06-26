import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import React, { Suspense } from "react";
import ProductDetail from "@/Components/product_details/ProductDetails";

export default async function ProductDetails({
  params,
}: {
  params: { id: number };
}) {
  return (
    <div
      className="product-details"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetail id={params.id} />
      </Suspense>
      <Footer />
    </div>
  );
}
