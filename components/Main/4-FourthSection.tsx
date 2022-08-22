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

export default function FourthSection() {
  // RootState
  const { currentScroll, fourthOffsetTop, setFourthOffsetTop } = useScrollStore();
  // Ref
  const fourthScrollRef = useRef<any>(null);

  useEffect(() => {
    if (fourthScrollRef && fourthScrollRef.current) {
      setFourthOffsetTop(fourthScrollRef.current.offsetTop);
    }
  }, []);

  return (
    <Wrapper ref={fourthScrollRef}>
      <ContentBlock>
        <SimulatorImageBox
          src="/static/images/simulator2.png"
          attrAnim={currentScroll > fourthOffsetTop - 600}
        />
        <DescriptionBox attrAnim={currentScroll > fourthOffsetTop - 600}>
          <h1>요청서 작성</h1>
          <p>{`원하는 스펙과 조건으로\n손쉬운 요청서 작성이 가능해요`}</p>
          <p>
            {`가전 구성을 선택하면 `}
            <em>Ai</em>
            {` 인공지능이\n추천 가격대를 미리 알려줘요`}
          </p>
        </DescriptionBox>
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
  margin-right: 100px;
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
  & > h1 {
    margin-bottom: 20px;
    color: #5180df;
    ${({ theme }) => theme.fontSet(38, 900, 50)};
    letter-spacing: -0.02em;
    opacity: 0;
  }
  & > p:nth-child(2) {
    margin-bottom: 20px;
    ${({ theme }) => theme.fontSet(44, 700, 60)};
    letter-spacing: -0.03em;
    white-space: pre-wrap;
    opacity: 0;
  }
  & > p:nth-child(3) {
    margin-bottom: 50px;
    ${({ theme }) => theme.fontSet(20, 500, 30)};
    white-space: pre-wrap;
    opacity: 0;
    & > em {
      color: #3a67bf;
      ${({ theme }) => theme.fontSet(20, 900, 30)};
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
