import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import GameSquare from "./GameSquare";
import { ImCross, ImRadioUnchecked } from "react-icons/im";
{
  /* <ImRadioUnchecked size={"70px"} color={"rgb(194,239,102)"} /> */
}

//   <ImCross size={"70px"} color={"rgb(194,239,102)"} />

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXturn, setIsXturn] = useState(true);

  const checkWinner = () => {
    const winnerTriplet = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerTriplet) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const handleClick = (index) => {
    console.log("index:", index);
    const copyState = [...state];
    copyState[index] = isXturn ? "X" : "O";
    setState(copyState);

    setIsXturn(!isXturn);
  };

  const WinnerBool = checkWinner();
  console.log("WinnerBool:", WinnerBool);
  return (
    <Box border={"2px"} display={"flex"} justifyContent={"center"} h="100vh">
      {WinnerBool ? (
        <Box display={"flex"} justifyContent={"center"} h="100vh">
          <Text>
            {WinnerBool == "X" ? (
              <ImCross size={"70px"} color={"rgb(194,239,102)"} />
            ) : (
              <ImRadioUnchecked size={"70px"} color={"rgb(194,239,102)"} />
            )}{" "}
          </Text>
        </Box>
      ) : (
        <Box border={"2px"} margin="auto">
          <Box display={"flex"}>
            <GameSquare onClick={() => handleClick(0)} value={state[0]} />
            <GameSquare onClick={() => handleClick(1)} value={state[1]} />
            <GameSquare onClick={() => handleClick(2)} value={state[2]} />
          </Box>
          <Box display={"flex"}>
            <GameSquare onClick={() => handleClick(3)} value={state[3]} />
            <GameSquare onClick={() => handleClick(4)} value={state[4]} />
            <GameSquare onClick={() => handleClick(5)} value={state[5]} />
          </Box>
          <Box display={"flex"}>
            <GameSquare onClick={() => handleClick(6)} value={state[6]} />
            <GameSquare onClick={() => handleClick(7)} value={state[7]} />
            <GameSquare onClick={() => handleClick(8)} value={state[8]} />
          </Box>
        </Box>
      )}
      {/* <Box h="150px" w="100%" border={"2px"} borderColor="red" ></Box> */}
    </Box>
  );
};

export default Board;
