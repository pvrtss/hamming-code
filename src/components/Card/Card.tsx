import React from "react";
import { makeReport } from "../../utils/error-finder";
import {
  CloseWrap,
  Column,
  Columns,
  Header,
  InfoWrap,
  StyledClose,
  TestCardWrap,
  TextWrap,
} from "./Card.style";

import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({ onClick, info }) => {
  const report = makeReport("011101001010011");

  return (
    <TestCardWrap>
      <CloseWrap onClick={onClick}>
        <StyledClose />
      </CloseWrap>
      {info ? (
        <InfoWrap>
          Проверка позволяет найти место совершения одинарной ошибки или
          обнаружить, что была совершена двойная ошибка. В случае допущения двух
          и более ошибок, поле вывода проверки будет показывать некорректную
          позицию ошибочного бита
        </InfoWrap>
      ) : (
        <>
          <Columns>
            <Column>
              <Header>Кратность ошибок</Header>
              {report.map((_, i) => (
                <p key={i}>{i + 1}</p>
              ))}
            </Column>
            <Column>
              <Header>Найденные ошибки</Header>
              {report.map((cr, i) => (
                <p key={i}>{cr[0]}</p>
              ))}
            </Column>
            <Column>
              <Header>Сочетания</Header>
              {report.map((cr, i) => (
                <p key={i}>{cr[1]}</p>
              ))}
            </Column>
            <Column>
              <Header>Co</Header>
              {report.map((cr, i) => (
                <p key={i}>
                  {parseInt(((cr[0] / cr[1]) * 10000).toString()) / 100} %
                </p>
              ))}
            </Column>
          </Columns>
          <hr />
          <TextWrap>Со - обнаруживающая способность кода</TextWrap>
        </>
      )}
    </TestCardWrap>
  );
};
