/**
 * Author : Ryan
 * Date : 2022-08-21
 * Desc : HeaderBlock
 */

import styled from 'styled-components';

export default function HeaderBlock() {
  return (
    <Wrapper>
      <ContentBlock>
        <FlexSpaceBox>
          <LogoText>VLPM</LogoText>
          <StoreBox>
            <p>Contact</p>
            <div />
            <div />
          </StoreBox>
        </FlexSpaceBox>
      </ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  width: 100%;
  height: 60px;
  background-color: black;
  z-index: 9;
`;

const ContentBlock = styled.div`
  width: 1024px;
  padding: 0 25px;
`;

const FlexSpaceBox = styled.div`
  ${({ theme }) => theme.flexSet('space-between', 'center', 'row')};
`;

const LogoText = styled.p`
  color: white;
  ${({ theme }) => theme.fontSet(30, 900, 57)};
`;

const StoreBox = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'row')};
  & > p {
    margin-right: 30px;
    color: white;
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
`;
