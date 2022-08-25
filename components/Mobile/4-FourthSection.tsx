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
        <DescriptionBox attrAnim={currentScroll > fourthOffsetTop - 100}>
          <h1>요청서 작성</h1>
          <p>{`원하는 스펙과\n조건으로!`}</p>
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
  ${({ theme }) => theme.flexSet('center', 'flex-start', 'row')};
  width: 100%;
  padding-top: 180px;
  padding-bottom: 50px;
`;

const ContentBlock = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
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
