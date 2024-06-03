import categories from "../../assets/json/categories.json";
import GridCell from "./GridCell";

const GridContainer = () => {
  return (
    <div className="gridContainer grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 grid-rows-1 overflow-hidden w-full
     border border-t-black divide-black divide-x">
      {categories.jewelry_categories.map((category, index) => (
        <GridCell
          key={index}
          name={category.name}
          image={category.image}
          hoverImg={category.image_hover}
        />
      ))}
    </div>
  );
};

export default GridContainer;
