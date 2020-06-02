import React from "react";
import { dininghalls } from "./DiningHalls";

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
  require.context("../assets/images", false, /\.(png|jpg|svg)$/)
);

const Card = (props) => {
    const styles={
   
    "margin-top": "100px",
   
    
    
  };
  return (
    <div className="card-list" style={styles}  >
      <div>
        <div className="tc grow bg-red br3 pa3 ma2 dib bw2 shadow-5">
          <img alt="load" src={images["dininghall-1.jpg"]} />
          <div>
            <h2>{dininghalls[0].name}</h2>
            <p>{dininghalls[0].address}</p>
          </div>
        </div>
        <div className="tc grow bg-red br3 pa3 ma2 dib bw2 shadow-5">
          <img alt="load" src={images["dininghall-2.jpg"]} />
          <div>
            <h2>{dininghalls[1].name}</h2>
            <p>{dininghalls[1].address}</p>
          </div>
        </div>
      </div>

      <div>
        <div className="tc grow bg-red br3 pa3 ma2 dib bw2 shadow-5">
          <img alt="load" src={images["dininghall-3.jpg"]} />
          <div>
            <h2>{dininghalls[2].name}</h2>
            <p>{dininghalls[2].address}</p>
          </div>
        </div>
        <div className="tc grow bg-red br3 pa3 ma2 dib bw2 shadow-5">
          <img alt="load" src={images["dininghall-4.jpg"]} />
          <div>
            <h2>{dininghalls[3].name}</h2>
            <p>{dininghalls[3].address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
