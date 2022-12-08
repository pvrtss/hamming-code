import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";

export const TestCardWrap = styled.div`
  width: 700px;
  color:black;
  position: absolute;
  top: 40px;
  right: 32%;
  background: white;
  border-radius: 16px;
  padding: 20px;
  font-size: 14px;
  font-family: 'Courier New', Courier, monospace;
  z-index: 1000;
  @media (max-width: 1024px)  {
    width: 90%;
  }
`;

export const StyledClose = styled(CloseIcon)`
    fill: #3a3a3a;
    width: 30px;
`;

export const CloseWrap = styled.div`
    position: absolute;
    top: 16px;
    right: 16px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 8px;


    :hover {
        svg {
            fill: black;
        }

        background: rgba(27, 27, 27, 0.3);
    }
`;


export const Fader = styled.div`
  background-color: black;
  backdrop-filter: blur(3px);
  opacity: 0.9;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 500;
`;

export const Columns = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
`

export const Header = styled.div`
    font-weight: bold;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: max-content;
`
