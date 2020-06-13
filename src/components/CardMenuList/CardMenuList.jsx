import React from "react";
import CardMenu from "../CardMenu/CardMenu";
import { dininghalls } from "../DiningHalls";
import Modal from "react-modal";
// import foodData from "../../data/foodData";
import FoodList from "../Food/FoodList";

const stylesModal = {
  "alignItems": "center",
  //display: "flex",
 // "flex-direction": "column",
 //flexWrap: 'wrap'
};

const CardMenuList = ({ controlModal }) => (
  <div style={{ marginTop: "99px" }}>
    {dininghalls.map((data, index) => {
      // const food = foodData[data.nameId].food;
      return (
        <div>
          <CardMenu
            {...data}
            setModalIsOpen={controlModal[index][1]}
            modalIsOpen={controlModal[index][0]}
          />
          <Modal
            key={data.id}
            isOpen={controlModal[index][0]}
            style={{
              overlay: {
                backgroundColor: "red",
              },
            }}
          >
            <button
              className="f6 grow no-underline br-pill ph3 pv2 mt4 dib white bg-dark-pink"
              onClick={() => {
                controlModal[index][1](false);
              }}
            >
              Close
            </button>

            <div style={stylesModal}>
              <FoodList campus={data.nameId}/>
            </div>

            <button
              className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink"
              onClick={() => {
                controlModal[index][1](false);
              }}
            >
              Close
            </button>
          </Modal>
        </div>
      );
    })}
  </div>
);

export default CardMenuList;
