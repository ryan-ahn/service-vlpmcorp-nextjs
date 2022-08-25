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
        <DescriptionBox attrAnim={currentScroll > fifthOffsetTop - 600}>
          <h1>견적서 확인</h1>
          <p>{`전국 가전매장 딜러분들이\n실시간으로 직접 견적내 드려요`}</p>
          <p>{`최저 견적서 추천 및 다양한 혜택을\n한눈에 확인 할 수 있어요`}</p>
        </DescriptionBox>
        <SimulatorImageBox
          src="/static/images/simulator3.png"
          attrAnim={currentScroll > fifthOffsetTop - 600}
        />
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 100%;
  height: calc(100vh + 100px);
  padding-top: 100px;
`;

const ContentBlock = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')};
`;

const SimulatorImageBox = styled.img<TAnimation>`
  width: 270px;

  opacity: 0;
  ${props =>
    props.attrAnim &&
    css`
      opacity: 1;
      animation: fadein 1.5s 0s both;
    `}
`;

const DescriptionBox = styled.div<TAnimation>`
  margin-top: 100px;
  margin-right: 100px;
  & > h1 {
    margin-bottom: 20px;
    color: #5180df;
    ${({ theme }) => theme.fontSet(38, 900, 50)};
    text-align: right;
    letter-spacing: -0.02em;
    opacity: 0;
  }
  & > p:nth-child(2) {
    margin-bottom: 20px;
    ${({ theme }) => theme.fontSet(44, 700, 60)};
    letter-spacing: -0.03em;
    white-space: pre-wrap;
    text-align: right;
    opacity: 0;
  }
  & > p:nth-child(3) {
    margin-bottom: 50px;
    ${({ theme }) => theme.fontSet(20, 500, 30)};
    white-space: pre-wrap;
    text-align: right;
    opacity: 0;
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
