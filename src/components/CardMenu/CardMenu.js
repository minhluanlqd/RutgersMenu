import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const CardMenu = ({
  name,
  img,
  address,
  setModalIsOpen,
}) => {

  const stylesImg = {
    height: "400px",
    width: "400px",
  };

  return (
    <div>
      <div className="tc grow bg-red br3 pa3 ma2 dib bw2 shadow-5" onClick={() => setModalIsOpen(true)}>
        <img alt="load" src={img} style={stylesImg} />
        <div>
          <h2>{name}</h2>
          <p>{address}</p>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
