import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Modal from "../Modal";

const ModalButton = ({
  history,
  routeName = "",
  children = "Open up",
  buttonChildren = ""
}) => {
  const [showExps, setShowExps] = useState(false);
  const [pathName, setPathName] = useState(history.location.pathname);
  useEffect(() => {
    setPathName(history.location.pathname);
  });
  return (
    <React.Fragment>
      <button
        type="button"
        className="info"
        onClick={() => {
          if (routeName) history.push(`${pathName}#${routeName}`);
          setShowExps(!showExps);
        }}
      >
        {buttonChildren}
      </button>
      <Modal
        activate={bool => {
          if (routeName) history.push(pathName);
          setShowExps(typeof bool === "boolean" ? bool : !showExps);
        }}
        active={showExps}
      >
        {children}
      </Modal>
    </React.Fragment>
  );
};

export default withRouter(ModalButton);
