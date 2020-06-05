import React from "react";

const FoodCard = ({ img, name, info, key }) => {

  return (
    
      <article className="br2  ba dark-gray b--black-10 mv4 w-100 w-100-m w10-l mw5 center">
        <img src={img} className="db w-100-l min-h-100-m br2 br--top" alt={name} />
        <div className="pa2 ph3-ns pb3-ns">
          <div className="dt w-100 mt1">
            <div className="dtc">
              <h1 className="f5 f4-ns mv0">{name}</h1>
            </div>
          </div>
          <p className="f6 lh-copy measure mt2 mid-gray">
            {info}
          </p>
        </div>
      </article>
    
  );
};

export default FoodCard;
