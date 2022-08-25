/**
 * Author : Ryan
 * Date : 2022-08-22
 * Desc : 4-fourthSection
 */

import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';

type TAnimation = {
  attrAnim: boolean;
};

export default function FifthSection() {
  // RootState
  const { currentScroll, fifthOffsetTop, setFifthOffsetTop } = useScrollStore();
  // Ref
  const fifthScrollRef = useRef<any>(null);

  useEffect(() => {
    if (fifthScrollRef && fifthScrollRef.current) {
      setFifthOffsetTop(fifthScrollRef.current.offsetTop);
    }
  }, []);

  return (
    <Wrapper ref={fifthScrollRef}>
      <ContentBlock>
        <SimulatorImageBox
          src="/static/images/simulator3.png"
          attrAnim={currentScroll > fifthOffsetTop - 400}
        />
        <DescriptionBox attrAnim={currentScroll > fifthOffsetTop - 100}>
          <h1>견적서 확인</h1>
          <p>{`전국 가전매장\n딜러분들이\n직접 견적`}</p>
          <p>{`최저 견적서 추천 및 다양한 혜택을\n한눈에 확인 할 수 있어요`}</p>
        </DescriptionBox>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'flex-start', 'row')};
  width: 100%;
  padding-top: 180px;
  padding-bottom: 100px;
`;

const ContentBlock = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'column')};
`;

const SimulatorImageBox = styled.img<TAnimation>`
  width: 240px;

  opacity: 0;
  ${props =>
    props.attrAnim &&
    css`
      opacity: 1;
      animation: fadein 1.5s 0s both;
    `}
`;

const DescriptionBox = styled.div<TAnimation>`
  margin-top: 120px;
  & > h1 {
    margin-bottom: 10px;
    color: #5180df;
    ${({ theme }) => theme.fontSet(20, 900, 30)};
    letter-spacing: -0.02em;
    text-align: center;
    opacity: 0;
  }
  & > p:nth-child(2) {
    margin-bottom: 10px;
    ${({ theme }) => theme.fontSet(35, 700, 44)};
    letter-spacing: -0.03em;
    text-align: center;
    white-space: pre-wrap;
    opacity: 0;
  }
  & > p:nth-child(3) {
    ${({ theme }) => theme.fontSet(17, 400, 30)};
    text-align: center;
    white-space: pre-wrap;
    opacity: 0;
    & > em {
      color: #3a67bf;
      ${({ theme }) => theme.fontSet(17, 500, 30)};
      text-align: center;
    }
  }
  ${props =>
    props.attrAnim &&
    css`
      & > h1 {
        opacity: 1;
        animation: moveup 1.5s 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) both;
      }
      & > p:nth-child(2) {
        opacity: 1;
        animation: moveup 1.5s 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
      }
      & > p:nth-child(3) {
        opacity: 1;
        animation: moveup 1.5s 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) both;
      }
    `}
`;
