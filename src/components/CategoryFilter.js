import React, { useState } from "react";

function CategoryFilter({categories, onFilter}) {
  const [isSelected, setIsSelected] = useState(null);
 
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => {
        return <button  key={index} onClick={()=> {setIsSelected(index); onFilter(category)}} className={isSelected === index ? "selected" : null}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
