const ProductBox = ({
  ProductTitle,
  ProductImage,
  ProductPrice,
}) => {
  return (
    <div className="productBox w-60 mt-10">
      <img
        src={ProductImage}
        className="object-contain imagePreview"
        alt="Beautiful ring."
      />
      <div className="productInfo gap-1 flex flex-col">
        <caption className="w-full font-bold text-wrap text-left">
          {ProductTitle}
        </caption>
        <p>{ProductPrice}€</p>
      </div>
    </div>
  );
};

export default ProductBox;
