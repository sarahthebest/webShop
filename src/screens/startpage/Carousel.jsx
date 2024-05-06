import ProductBox from "../common/ProductBox";
import { useEffect, useState } from "react";

const Carousel = () => {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all([
          fetch("https://fakestoreapi.com/products/6"),
          fetch("https://fakestoreapi.com/products/7"),
          fetch("https://fakestoreapi.com/products/8"),
        ]);

        const data = await Promise.all(responses.map(res => res.json()));
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <div className="carousel w-100 h-1/3 mt-10 px-20 border-b-black">
      <h2 className="text-5xl uppercase " style={{ fontFamily: "impact" }}>
        Bestsellers
      </h2>
      <div className="products flex flex-row gap-20">
      {products.map((product, id) => (
          <ProductBox
          key={id}
          ProductTitle={product.title}
          ProductID={product.id}
          ProductImage={product.image}
          ProductPrice={product.price}
          />
        ))}
        </div>
    </div>
  );
};

export default Carousel;
