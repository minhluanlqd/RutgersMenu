import React from "react";
import CardMenu from "../CardMenu/CardMenu";
import { dininghalls } from "../DiningHalls";
import Modal from "react-modal";
import {CSSTransition} from 'react-transition-group';
import FoodList from "../Food/FoodList";

import '../../styles/styles.css';

const stylesModal = {
  alignItems: "center",
  //display: "flex",
  // "flex-direction": "column",
  //flexWrap: 'wrap'
};

const CardMenuList = ({ controlModal }) => (
  <div
    style={{
      marginTop: "99px",
    }}
  >
    {dininghalls.map((data, index) => {
      // const food = foodData[data.nameId].food;
      return (
        <div>
          <CardMenu
            {...data}
            setModalIsOpen={controlModal[index][1]}
            modalIsOpen={controlModal[index][0]}
          />

          <CSSTransition
          timeout={300}
          classNames="dialog">

          <Modal
            closeTimeoutMS={500}
            key={data.id}
            isOpen={controlModal[index][0]}
            style={{
              overlay: {
                backgroundColor: "red",
              },
            }}>
            <button
              className="f6 grow no-underline br-pill ph3 pv2 mt4 dib white bg-green"
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
              className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green"
              onClick={() => {
                controlModal[index][1](false);
              }}
            >
              Close
            </button>
          </Modal>
          </CSSTransition>
        </div>
      );
    })}
  </div>
);

export default CardMenuList;
