import React from "react";
import { makeReport } from "../../utils/error-finder";
import {
  CloseWrap,
  Column,
  Columns,
  Header,
  StyledClose,
  TestCardWrap,
} from "./TestCard.style";

import { TestCardProps } from "./TestCard.types";

export const TestCard: React.FC<TestCardProps> = ({onClick}) => {
  const report = makeReport("011101001010011");

  return (
    <TestCardWrap>
      <CloseWrap onClick={onClick}>
        <StyledClose />
      </CloseWrap>
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
            <p key={i}>{parseInt((cr[0] / cr[1] * 10000).toString()) / 100 } %</p>
          ))}
        </Column>
      </Columns>
    </TestCardWrap>
  );
};
