import React from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 150px;
  width: 250px;
  box-shadow: 0 5px 10px 2px rgba(195, 192, 192, 0.5);
  padding: 20px;
  text-align: center;
  overflow: hidden;
`;

export default ModalContainer;
