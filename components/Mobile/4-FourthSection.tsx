/**
 * Author : Ryan
 * Date : 2022-08-22
 * Desc : 4-fourthSection
 */

import { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { validatePrice } from '@lib/utils/verification';
import { useScrollStore } from '@lib/store/useZustandStore';

type TAnimation = {
  attrAnim: boolean;
};

export default function FourthSection() {
  // RootState
  const { currentScroll, fourthOffsetTop, setFourthOffsetTop } = useScrollStore();
  // State
  const [count, setCount] = useState(500);
  const [toggleSwitch, setToggleSwitch] = useState(false);
  // Value
  const frameRate = 1000 / 60;
  const totalFrame = Math.round(2000 / frameRate);
  // Ref
  const fourthScrollRef = useRef<any>(null);

  const easeOutExpo = (t: number): number => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  useEffect(() => {
    if (fourthScrollRef && fourthScrollRef.current) {
      setFourthOffsetTop(fourthScrollRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    if (currentScroll > fourthOffsetTop - 300) {
      setToggleSwitch(true);
    } else {
      setToggleSwitch(false);
      setCount(500);
    }
  }, [currentScroll, fourthOffsetTop]);

  useEffect(() => {
    if (toggleSwitch) {
      setTimeout(() => {
        let currentNumber = 0;
        const counter = setInterval(() => {
          const progress = easeOutExpo(++currentNumber / totalFrame);
          setCount(Math.round(1300 * progress));

          if (progress === 1) {
            clearInterval(counter);
          }
        }, frameRate);
      }, 500);
    }
  }, [toggleSwitch]);

  return (
    <Wrapper ref={fourthScrollRef}>
      <ContentBlock>
        <SimulatorBox>
          <SimulatorImage
            src="/static/images/simulator2.png"
            attrAnim={currentScroll > fourthOffsetTop - 600}
          />
          <ExpansionBox attrAnim={currentScroll > fourthOffsetTop - 300}>
            <div>
              <div />
              <div>
                <div>
                  <div />
                  <p>{validatePrice(count)}</p>
                </div>
              </div>
            </div>
          </ExpansionBox>
        </SimulatorBox>
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

const SimulatorBox = styled.div`
  position: relative;
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 300px;
`;

const SimulatorImage = styled.img<TAnimation>`
  width: 240px;
  opacity: 0;
  ${props =>
    props.attrAnim &&
    css`
      opacity: 1;
      animation: fadein 1.5s 0s both;
    `}
`;

const ExpansionBox = styled.div<TAnimation>`
  position: absolute;
  top: 135px;
  width: 100%;
  height: 100px;
  border-radius: 25px;
  background-color: white;
  filter: drop-shadow(3px 3px 10px rgba(0, 0, 0, 0.15));
  opacity: 0;
  & > div {
    position: relative;
    padding: 30px;
    & > div:nth-child(1) {
      position: absolute;
      bottom: 0px;
      width: calc(100% - 60px);
      height: 30px;
      border-radius: 10px;
      background-color: #f2f4f6;
      z-index: 0;
    }
    & > div:nth-child(2) {
      position: absolute;
      bottom: 0px;
      width: 50px;
      height: 30px;
      border-radius: 10px;
      background-color: #557fe6;
      z-index: 0;
      & > div {
        ${({ theme }) => theme.flexSet('flex-end', 'center', 'row')};
        width: 100%;
        height: 100%;
        padding: 10px;
        position: relative;
        & > div {
          position: absolute;
          bottom: -25px;
          right: -10px;
          width: 25px;
          height: 25px;
          ${({ theme }) => theme.backgroundSet('/static/icons/budget-pointer.svg', 'contain')};
        }
        & > p {
          color: white;
        }
      }
    }
  }
  ${props =>
    props.attrAnim &&
    css`
      opacity: 1;
      animation: fadein 0.5s 0s both;
      & > div {
        & > div {
          animation: width130 1s 0.5s both;
        }
      }
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
