import ProductBox from "../common/ProductBox";
import jewelry from "../../assets/json/products.json";

const Carousel = () => {
  return (
    <div className="carousel w-full flex flex-col relative 
     align-items-center pt-10 border-b-black bg-gray-100">
      <h2 className="text-6xl ms-10 uppercase font-bebas">Bestsellers</h2>
      <div className="products flex flex-row mt-6">
        <div className="gridColumns w-full gap-x-10 sm:gap-x-10
         grid grid-rows-1 ps-10 sm:ps-10">
          {jewelry.products.map((product, index) => (
            <ProductBox
              key={index}
              ProductTitle={product.name}
              ProductImage={product.image}
              ProductPrice={product.price}
              ProductLink={product.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
