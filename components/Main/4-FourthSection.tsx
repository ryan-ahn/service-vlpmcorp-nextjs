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
          attrAnim={currentScroll > fourthOffsetTop - 550}
        />
        <DescriptionBox>
          <h1>요청서 작성</h1>
          <p>{`발품없는\n패키지 가전\n전국딜러 견적비교1`}</p>
          <p>
            {`가전 구성을 선택하면`}
            <em>AI</em>
            {`인공지능이\n추천 가격대를 미리 알려줘요`}
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

const DescriptionBox = styled.div`
  margin-top: 100px;
  margin-right: 120px;
  & > p {
    margin-bottom: 50px;
    ${({ theme }) => theme.fontSet(45, 700, 57)};
    white-space: pre-wrap;
  }
  animation: moveup 1.5s 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;
`;

const SimulatorImageBox = styled.img<TAnimation>`
  width: 300px;
  opacity: 0;
  ${props =>
    props.attrAnim &&
    css`
      opacity: 1;
      animation: fadein 2s 2s both;
    `}
`;
