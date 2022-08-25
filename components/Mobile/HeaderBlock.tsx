/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : HeaderBlock
 */

import { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useScrollStore } from '@lib/store/useZustandStore';
import { useScrollTo } from '@lib/hooks/useScroll';

type TWhiteMode = {
  attrWhiteMode: boolean;
  attrGrayMode?: boolean;
};

export default function HeaderBlock() {
  // RootState
  const { currentScroll, secondOffsetTop, thirdOffsetTop, fourthOffsetTop, contactOffsetTop } =
    useScrollStore();

  const onClickScrollToUp = useCallback(() => {
    useScrollTo('default', 0, contactOffsetTop, 'smooth');
  }, [contactOffsetTop]);

  return (
    <Wrapper
      attrWhiteMode={
        (currentScroll >= secondOffsetTop - 60 && currentScroll < thirdOffsetTop - 60) ||
        (currentScroll >= fourthOffsetTop - 60 && currentScroll < contactOffsetTop - 60)
      }
      attrGrayMode={currentScroll >= contactOffsetTop - 60}
    >
      <ContentBlock>
        <FlexSpaceBox>
          <LogoText
            attrWhiteMode={
              (currentScroll >= secondOffsetTop - 60 && currentScroll < thirdOffsetTop - 60) ||
              (currentScroll >= fourthOffsetTop - 60 && currentScroll < contactOffsetTop - 60)
            }
            attrGrayMode={currentScroll >= contactOffsetTop - 60}
          >
            VLPM
          </LogoText>
          <StoreBox
            attrWhiteMode={
              (currentScroll >= secondOffsetTop - 60 && currentScroll < thirdOffsetTop - 60) ||
              (currentScroll >= fourthOffsetTop - 60 && currentScroll < contactOffsetTop - 60)
            }
            attrGrayMode={currentScroll >= contactOffsetTop - 60}
            onClick={onClickScrollToUp}
          >
            <p>Contact</p>
            <div />
            <div />
          </StoreBox>
        </FlexSpaceBox>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div<TWhiteMode>`
  position: fixed;
  top: 0;
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 100%;
  height: 60px;
  background-color: black;
  z-index: 9;
  transition: all 0.3s ease-out;
  ${props =>
    props.attrWhiteMode &&
    css`
      background-color: white;
      transition: all 0.3s ease-out;
    `}
  ${props =>
    props.attrGrayMode &&
    css`
      background-color: #fcfcfc;
      transition: all 0.3s ease-out;
    `}
`;

const ContentBlock = styled.div`
  width: 1024px;
  padding: 0 25px;
`;

const FlexSpaceBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')};
`;

const LogoText = styled.p<TWhiteMode>`
  color: white;
  ${({ theme }) => theme.fontSet(30, 900, 57)};
  transition: all 0.3s ease-out;
  ${props =>
    props.attrWhiteMode &&
    css`
      color: black;
      transition: all 0.3s ease-out;
    `}
  ${props =>
    props.attrGrayMode &&
    css`
      color: black;
      transition: all 0.3s ease-out;
    `}
`;

const StoreBox = styled.div<TWhiteMode>`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  & > p {
    margin-right: 30px;
    color: white;
    cursor: pointer;
    ${({ theme }) => theme.fontSet(20, 500, 37)};
    @media (max-width: 350px) {
      margin-right: 15px;
    }
    @media (max-width: 320px) {
      display: none;
    }
  }
  & > div:nth-child(2) {
    width: 20px;
    height: 20px;
    margin-right: 30px;
    ${({ theme }) => theme.backgroundSet('/static/icons/app-store.svg', 'contain')};
    @media (max-width: 350px) {
      margin-right: 15px;
    }
  }
  & > div:nth-child(3) {
    width: 20px;
    height: 18px;
    ${({ theme }) => theme.backgroundSet('/static/icons/play-store.svg', 'contain')};
  }
  ${props =>
    props.attrWhiteMode &&
    css`
      & > p {
        color: #666;
        transition: all 0.3s ease-out;
      }
    `}
  ${props =>
    props.attrGrayMode &&
    css`
      & > p {
        color: #666;
        transition: all 0.3s ease-out;
      }
    `}
`;
