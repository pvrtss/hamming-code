import styled from "styled-components";

export const Centralize = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.3;
  filter: blur(0.5px);
  background-image: url("https://sun1.userapi.com/sun1-83/s/v1/ig2/HBvHfjZuQU3aGa06n-bZluzOrSS3cXg3F-kKf_0KQGB77HWT2hV8QHhDnZET0doX0zYDiAvz5dg8yLOXbTu_t57_.jpg?size=832x555&quality=96&type=album");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const LeftWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  border-right: 1px solid rgb(99, 99, 99);
  box-sizing: border-box;
  padding: 28px;
`;

export const SideHeader = styled.div`
  font-size: 40px;
  font-weight: bold;
`;

export const InputField = styled.input`
  background: rgba(112, 112, 112, 0.2);
  border: 1px solid transparent;
  border-radius: 8px;
  height: 42px;
  width: 70%;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 16px;
  outline: none;

  :active,
  :focus {
    border: 1px solid rgb(94, 53, 189);
  }
`;

export const InputRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  width: 100%;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const EncodeButton = styled.button`
  background-color: #1c7bce;
  width: 30%;
  border: 1px solid transparent;
  border-radius: 16px;
  height: 50px;
  font-weight: bold;
  font-family: inherit;
  color: white;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  transition: border 0.2s, box-shadow 0.2s;
  :hover {
    border: 1px solid #649fff;
    box-shadow: 0px 0px 8px 5px rgba(34, 141, 223, 0.2);
  }
  :active {
    color: #1c7bce;
    background: white;
  }
`;

export const CheckButton = styled.button`
  background-color: #17b93a;
  width: 30%;
  border: 1px solid transparent;
  border-radius: 16px;
  height: 50px;
  font-weight: bold;
  font-family: inherit;
  color: white;
  box-shadow: 0px 0px 10px 0px rgba(34, 80, 36, 0.2);
  transition: border 0.2s, box-shadow 0.2s;
  :hover {
    border: 1px solid #43f169;
    box-shadow: 0px 0px 8px 5px rgba(34, 223, 65, 0.2);
  }
  :active {
    color: #17b93a;
    background: white;
  }
`;

export const AnswerWrap = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(112, 112, 112, 0.2);
  border: 1px solid transparent;
  border-radius: 16px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
`;

export const TestButton = styled.button`
  cursor: pointer;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: #5821f0;
  color: white;
  font-family: inherit;
  padding: 12px;
  font-weight: bold;
  :hover {
    border: 2px solid #815de4;
  }
  :active {
    background-color: white;
    color: #5821f0;
  }
`;

export const ErrorAnswerWrap = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(112, 112, 112, 0.2);
  border: 1px solid transparent;
  border-radius: 16px;
  color: #ce1a23;
  font-family: "Courier New", Courier, monospace;
  font-size: 32px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CheckAnswerWrap = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(112, 112, 112, 0.2);
  border: 1px solid transparent;
  border-radius: 16px;
  color: #2beb4b;
  font-family: "Courier New", Courier, monospace;
  font-size: 32px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorCheckAnswerWrap = styled.div`
  width: 100%;
  height: 250px;
  background: rgba(112, 112, 112, 0.2);
  border: 1px solid transparent;
  border-radius: 16px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 32px;
  font-weight: normal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorWrap = styled.div`
  font-size: inherit;
  font-family: inherit;
  font-weight: bold;
  color: #ce1a23;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding: 28px;
`;

export const MainCardWrap = styled.div`
  display: flex;
  z-index: 100;
  width: 80vw;
  height: 90vh;
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgb(99, 99, 99);
  background-color: rgba(0, 0, 0, 0.8);
  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
  }
`;
