/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : 2-SecondSection
 */

import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';

type TAnimation = {
  attrAnim: boolean;
};

export default function SecondSection() {
  // RootState
  const { currentScroll, secondOffsetTop, setSecondOffsetTop } = useScrollStore();
  // Ref
  const secondScrollRef = useRef<any>(null);

  useEffect(() => {
    if (secondScrollRef && secondScrollRef.current) {
      setSecondOffsetTop(secondScrollRef.current.offsetTop);
    }
  }, []);

  return (
    <Wrapper ref={secondScrollRef}>
      <ContentBlock attrAnim={currentScroll > secondOffsetTop - 600}>
        <p>{'패키지 가전,\n같은 상품인데'}</p>
        <div>
          <p>{'매장마다 가격이\n다르다고요?'}</p>
          <div />
        </div>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  height: 100vh;
`;

const ContentBlock = styled.div<TAnimation>`
  width: 240px;
  margin-top: 70px;
  & > p:nth-child(1) {
    margin-bottom: 15px;
    ${({ theme }) => theme.fontSet(33, 400, 45)};
    letter-spacing: -0.05em;
    white-space: pre-wrap;
    text-align: center;
    opacity: 0;
    ${props =>
      props.attrAnim &&
      css`
        opacity: 1;
        animation: moveup 1.5s 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) both;
      `}
  }
  & > div:nth-child(2) {
    position: relative;
    ${({ theme }) => theme.flexSet('center', 'center', 'row')};
    height: 45px;
    margin-top: 60px;
    & > p:nth-child(1) {
      position: absolute;
      bottom: 0;
      ${({ theme }) => theme.fontSet(35, 700, 48)};
      letter-spacing: -0.02em;
      white-space: pre-wrap;
      text-align: center;
      z-index: 2;
      opacity: 0;
      ${props =>
        props.attrAnim &&
        css`
          opacity: 1;
          animation: moveup 1s 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
        `}
    }
    & > div:nth-child(2) {
      position: absolute;
      bottom: 98px;
      left: 5px;
      border: 10px solid #92b6fb;
      z-index: 1;
      opacity: 0;
      ${props =>
        props.attrAnim &&
        css`
          opacity: 1;
          animation: MUnderline 1.5s 1.5s both;
        `}
    }
  }
`;
