/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : 3-ThirdSection
 */

import { useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';

type TAnimation = {
  attrAnim: boolean;
};

export default function ThirdSection() {
  // RootState
  const { currentScroll, thirdOffsetTop, setThirdOffsetTop } = useScrollStore();
  // Ref
  const thirdScrollRef = useRef<any>(null);

  useEffect(() => {
    if (thirdScrollRef && thirdScrollRef.current) {
      setThirdOffsetTop(thirdScrollRef.current.offsetTop);
    }
  }, []);

  return (
    <Wrapper ref={thirdScrollRef}>
      <ContentBlock>
        <TitleBox attrAnim={currentScroll > thirdOffsetTop - 550}>
          <p>
            <em>발품노노</em>
            {`에서\n한번에 견적 비교하세요!`}
          </p>
        </TitleBox>
        <GraphBox>
          <EverageGraphBox attrAnim={currentScroll > thirdOffsetTop - 550}>
            <div>
              <p>{'매장방문\n평균 8회'}</p>
            </div>
          </EverageGraphBox>
          <VlpmGraphBox attrAnim={currentScroll > thirdOffsetTop - 550}>
            <div>
              <p>1회 신청</p>
            </div>
          </VlpmGraphBox>
        </GraphBox>
        <NoticeBox attrAnim={currentScroll > thirdOffsetTop - 650}>
          <p>혼수 및 이사 준비로 낭비되는 시간과 비용을 줄여보세요.</p>
        </NoticeBox>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 100%;
  height: calc(100vh + 200px);
  padding-top: 150px;
  padding-bottom: 50px;
  background-color: black;
`;

const ContentBlock = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
`;

const TitleBox = styled.div<TAnimation>`
  margin-bottom: 50px;
  opacity: 0;
  & > p {
    color: white;
    ${({ theme }) => theme.fontSet(40, 500, 52)};
    white-space: pre-wrap;
    text-align: center;
    & > em {
      color: #4f90ff;
    }
  }
  ${props =>
    props.attrAnim &&
    css`
      opacity: 1;
      animation: moveup 1.5s 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) both;
    `}
`;

const GraphBox = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  margin-bottom: 40px;
`;

const EverageGraphBox = styled.div<TAnimation>`
  position: relative;
  width: 120px;
  height: 270px;
  margin-right: 70px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #666;
  opacity: 0;
  & > div {
    ${({ theme }) => theme.flexSet('center', 'center', 'row')};
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #c5c5c5;
    opacity: 0;
    & > p {
      opacity: 0;
      ${({ theme }) => theme.fontSet(18, 700, 30)};
      white-space: pre-wrap;
    }
  }
  ${props =>
    props.attrAnim &&
    css`
      opacity: 1;
      animation: fadein 1s 1s both;
      & > div {
        opacity: 1;
        animation: height100 1s 1.5s both;
        & > p {
          opacity: 1;
          animation: fadein 0.5s 2.5s both;
        }
      }
    `}
`;
const VlpmGraphBox = styled.div<TAnimation>`
  position: relative;
  width: 120px;
  height: 270px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #666;
  & > div {
    ${({ theme }) => theme.flexSet('center', 'center', 'row')};
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #4f90ff;
    opacity: 0;
    & > p {
      opacity: 0;
      color: white;
      ${({ theme }) => theme.fontSet(18, 700, 30)};
      white-space: pre-wrap;
    }
  }
  ${props =>
    props.attrAnim &&
    css`
      animation: fadein 1s 1s both;
      & > div {
        opacity: 1;
        animation: height20 1s 1.5s both;
        & > p {
          opacity: 1;
          animation: fadein 0.5s 2.5s both;
        }
      }
    `}
`;

const NoticeBox = styled.div<TAnimation>`
  opacity: 0;
  & > p {
    color: white;
    ${({ theme }) => theme.fontSet(20, 500, 30)};
  }
  ${props =>
    props.attrAnim &&
    css`
      opacity: 1;
      animation: fadein 1s 2s both;
    `}
`;
