import React from "react";

// import all images function
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
    return 0; // just return to avoid warning
  });
  return images;
}

const images = importAll(
  require.context("../../assets/images", false, /\.(png|jpg|svg)$/)
);

const FoodCard = (props) => {
  
  return (
    <div>
      <img alt="load" src={images[`${props.img}.jpg`]} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default FoodCard;
