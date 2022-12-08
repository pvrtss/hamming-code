import React, { useCallback, useMemo, useState } from "react";
import { check } from "../../utils/checks";
import { decode } from "../../utils/decoder";
import { encode } from "../../utils/encoder";
import {
  AnswerWrap,
  ButtonRow,
  Centralize,
  CheckAnswerWrap,
  CheckButton,
  EncodeButton,
  ErrorAnswerWrap,
  ErrorCheckAnswerWrap,
  ErrorWrap,
  HeaderRow,
  InputField,
  InputRow,
  LeftContent,
  LeftWrap,
  MainCardWrap,
  RightWrap,
  SideHeader,
  TestButton,
} from "./MainCard.style";

import { MainCardProps } from "./MainCard.types";

export const MainCard: React.FC<MainCardProps> = ({onClick}) => {
  const [code, setCode] = useState<string>("");
  const [inputCode, setInputCode] = useState<string>("");
  const [inputCheck, setInputCheck] = useState<string>("");
  const [checkError, setCheckError] = useState<boolean>(false);
  const [codeError, setCodeError] = useState<boolean>(false);
  const [codeToCheck, setCodeToCheck] = useState<string>("");
  const [checkStatus, setCheckStatus] = useState<number>(-1);

  const onCodeChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputCode(e.currentTarget.value);
  };

  const onClickCode = useCallback(() => {
    if (check(inputCode, 11)) {
      setCode(encode(inputCode));
      setCodeError(false);
    } else {
      setCodeError(true);
    }
  }, [inputCode]);

  const onCheckChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputCheck(e.currentTarget.value);
  };

  const onClickCheck = useCallback(() => {
    if (check(inputCheck, 15)) {
      setCheckStatus(decode(inputCheck));
      setCheckError(false);
      setCodeToCheck(inputCheck);
    } else {
      setCheckError(true);
    }
  }, [inputCheck]);
  return (
    <Centralize>
      <MainCardWrap>
        <LeftWrap>
          <HeaderRow>
            <SideHeader>Кодирование</SideHeader>
            <TestButton onClick={onClick}>Сo</TestButton>
          </HeaderRow>
          <LeftContent>
            <InputRow>
              <InputField
                placeholder="Введите 11-разрядное двоичное число"
                value={inputCode}
                onChange={onCodeChange}
              />
            </InputRow>
            <ButtonRow>
              <EncodeButton onClick={onClickCode}>Закодировать</EncodeButton>
            </ButtonRow>
            {codeError ? (
              <ErrorAnswerWrap>Ошибка ввода!</ErrorAnswerWrap>
            ) : (
              <AnswerWrap>{code}</AnswerWrap>
            )}
          </LeftContent>
        </LeftWrap>
        <RightWrap>
          <HeaderRow>
            <SideHeader>Проверка</SideHeader>
          </HeaderRow>
          <LeftContent>
            <InputRow>
              <InputField
                placeholder="Введите 15-разрядный код Хэмминга"
                value={inputCheck}
                onChange={onCheckChange}
              />
            </InputRow>
            <ButtonRow>
              <CheckButton onClick={onClickCheck}>Проверить</CheckButton>
            </ButtonRow>
            {checkError ? (
              <ErrorAnswerWrap>Ошибка ввода!</ErrorAnswerWrap>
            ) : checkStatus >= 0 ? (
              <ErrorCheckAnswerWrap>
                {codeToCheck
                  .split("")
                  .map((letter, i) =>
                    i === checkStatus ? (
                      <ErrorWrap key={i}>{letter}</ErrorWrap>
                    ) : (
                      letter
                    )
                  )}
              </ErrorCheckAnswerWrap>
            ) : (
              <CheckAnswerWrap>Ошибка не обнаружена</CheckAnswerWrap>
            )}
          </LeftContent>
        </RightWrap>
      </MainCardWrap>
    </Centralize>
  );
};
