import styled from "styled-components";

const ModalStyled = styled.div`
  position: absolute;
  z-index: 8;
  background-color: #1e3360;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
  top: 36%;
  height: 200px;
  width: 60%;
  right: 25%;
  left: 20%;
  transition: 0.3s;
  .alert__message {
    color: #fff;
    font-size: 20px;
    font-size: 20px;
  }

  @media (min-width: 900px) {
    top: 30%;
    left: 40%;
    width: 20%;
  }
`;

export default ModalStyled;
