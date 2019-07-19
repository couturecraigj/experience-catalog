import React, { useContext } from "react";
import ModalButton from "../../ModalButton";
import Context from "../../Context";
import ExperienceList from "./List/Bullet";

const ExperienceModalButton = () => {
  const [{ experiences }] = useContext(Context);
  return (
    <ModalButton
      buttonChildren={
        <React.Fragment>
          <span>{experiences.total}</span> Experiences
        </React.Fragment>
      }
      routeName="experiences"
    >
      <ExperienceList />
    </ModalButton>
  );
};

export default ExperienceModalButton;
