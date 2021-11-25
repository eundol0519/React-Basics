import React from "react";
import styled from "styled-components";
// import { Eco } from "@material-ui/icons";

const Spinner = (props) => {

    return (
        <Outter>
            오나
            {/* <Eco style={{ color: "white", fontSize: "150px" }} /> */}
        </Outter>
    );
}

const Outter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #B0C4DE	;
`;

export default Spinner;