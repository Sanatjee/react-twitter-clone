import React from "react";
import Bluebutton from "./UI/Buttons/BlueButton/BlueButton";
import Darkbutton from "./UI/Buttons/DarkButton/DarkButton";
import LightButton from "./UI/Buttons/LightButton/LightButton";
import RedButton from "./UI/Buttons/RedButton/RedButton";
import GreyCard from "./UI/Cards/GreyCard/GreyCard";
import RoundedCornerImage from "./UI/Images/RoundedCornerImage/RoundedCornerImage";
import CircularImage from "./UI/Images/CircleImage/CircleImage";
import Modal from "./UI/Modals/Modal";

const Componentslist = () => {
  return (
    <div>
      <Bluebutton title="Tweet" />
      <Darkbutton title="Tweet" />
      <LightButton title="Tweet" />
      <RedButton title="Discard" />
      <Modal title="Discard" />
      <GreyCard />
      <RoundedCornerImage />
      <CircularImage />
    </div>
  );
};

export default Componentslist;
