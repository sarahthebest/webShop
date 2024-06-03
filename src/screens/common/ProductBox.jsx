const ProductBox = ({
  ProductTitle,
  ProductImage,
  ProductPrice,
  ProductLink
}) => {
  return (
    <div className="productBox">
      <a href={ProductLink}>
      <div className="imgWrapper bg-white">
      <img
        src={ProductImage}
        className="imagePreview object-fill w-full"
        alt="Beautiful ring."
      />
      </div>
      <div className="productInfo gap-1 flex flex-col mt-2">
        <h1 className="w-full font-bebas text-xl text-wrap text-left">
          {ProductTitle}
        </h1>
        <p>{ProductPrice}€</p>
      </div>
      </a>
    </div>
  );
};

export default ProductBox;
