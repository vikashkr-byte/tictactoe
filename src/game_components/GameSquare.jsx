import React from "react";
import { Square } from "@chakra-ui/react";
import { ImCross, ImRadioUnchecked } from "react-icons/im";
{
  /* <ImRadioUnchecked size={"70px"} color={"rgb(194,239,102)"} /> */
}

//   <ImCross size={"70px"} color={"rgb(194,239,102)"} />
const GameSquare = (props) => {
  return (
    <Square
      m="2px"
      boxShadow="base"
      size={"100px"}
      bgColor="rgb(251,159,96)"
      onClick={props.onClick}
    >
    {props.value===null?"": props.value === "X" ? (
        <ImCross size={"70px"} color={"rgb(194,239,102)"} />
      ) : (
        <ImRadioUnchecked size={"70px"} color={"rgb(194,239,102)"} />
      )}
    </Square>
  );
};

export default GameSquare;
