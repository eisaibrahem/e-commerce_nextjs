import Footer from "@/Components/footer/Footer";
import Header from "@/Components/header/Header";
import "./home.css";
import Recommended from "@/Components/productsRecpmmended/Recommended";

export default function Home() {
  return (
    <main>
      <div>
        <div className="top-img">
          <Header />
          <section className="content">
            <p className="lifestyle">Lifestyle collection</p>
            <p className="men">MEN</p>
            <p className="sale">
              SALE UP TO <span>30% OFF</span>
            </p>
            <p className="free-shipping">
              Get Free Shipping on orders over $99.00
            </p>
            <button>Shop Now</button>
          </section>
        </div>
        <Recommended />
        <Footer />
      </div>
    </main>
  );
}
